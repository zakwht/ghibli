import { useState, useEffect } from "react";

interface TopSiteURL {
  title: string;
  url: string;
  src?: string;
}

let devSites = [
  {
      "title": "Inbox - Gmail",
      "url": "https://mail.google.com/",
      "src": "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
  },
  {
      "title": "zakwht (Zak)",
      "url": "https://github.com/zakwht",
      "src": "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"

  },
  {
      "title": "Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.",
      "url": "https://www.notion.so/",
      "src": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  },
  {
      "title": "Google Docs",
      "url": "https://docs.google.com/",
      "src": "https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
  },
  {
      "title": "zakwh1te • Instagram",
      "url": "https://www.instagram.com/zakwh1te/",
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
  }
]

function faviconURL(u: string) {
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", u);
  url.searchParams.set("size", "32");
  return url.toString();
}

const stripTitle = (t: string) => t.split(/\s+(-|•|\||–)\s+/)[0]

export const TopSites = () => {

  const [topSites, setTopSites] = useState<TopSiteURL[]>([])

  useEffect(() => {
    if (process.env.NODE_ENV === "development")
      setTopSites(devSites)
    else chrome.topSites.get().then(setTopSites)
  }, [])


  return (
    <nav>
      {topSites.slice(0,5).map(({title, url, src}) => (
        <a
          key={url}
          href={url} target="_self">
            <figure>
              <img 
                src={src || faviconURL(url)} 
                alt="favicon"
                width="24"
              />
            </figure>
          <label>{stripTitle(title)}</label>
        </a>
      ))}
    </nav>
  )
}


