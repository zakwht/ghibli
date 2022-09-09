from codecs import unicode_escape_decode, unicode_escape_encode
from json import dumps
import requests
from bs4 import BeautifulSoup

base_url = "https://www.ghibli.jp/works/"

page = requests.get(base_url)
soup = BeautifulSoup(page.content, "html.parser")

works = set()
for a in soup.find_all("a", href=lambda k: "#" == k[0] and len(k) > 1):
  works.add(a['href'][1:])

stills = []
for w in works:
  page = requests.get(base_url + w)
  if (page.status_code != 200): continue
  soup = BeautifulSoup(page.content, "html.parser")

  title = soup.find(itemprop=lambda k: k == "name").text
  date = soup.find(itemprop=lambda k: k == "datePublished").text
  english = soup.find(id=w).next_sibling.next_sibling.text

  for a in soup.find_all("a", href=lambda k: "gallery/" + w in k):
    url = a['href']
    alt = a['title']
    size = a['data-size']
    thumbnail = a.find("img")['src']

    stills.append({
      "url": url, "title": (title), "size": size, "thumbnail": thumbnail,
      "alt": alt, "date": date, "english": english
    })

print(dumps(stills))
# python scrape.py > ../stills.json