import { useState, useEffect } from "react";

interface TopSiteURL {
  title: string;
  url: string;
}

// let sample = [
//   {
//       "title": "Inbox (236) - zakerywhite.1@gmail.com - Gmail",
//       "url": "https://mail.google.com/"
//   },
//   {
//       "title": "zakwht (Zak)",
//       "url": "https://github.com/zakwht"
//   },
//   {
//       "title": "Coast Capital Savings - Online Banking",
//       "url": "https://my.coastcapitalsavings.com/OnlineBanking/"
//   },
//   {
//       "title": "Albums",
//       "url": "http://localhost:3000/"
//   },
//   {
//       "title": "Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.",
//       "url": "https://www.notion.so/"
//   },
//   {
//       "title": "(3) Trees Logic Puzzle 53 Quiz - By Katie_Wandering",
//       "url": "https://www.sporcle.com/games/Katie_Wandering/trees-logic-puzzle-53?playlist=more-of-katie_wanderings-trees-puzzles&creator=Katie_Wandering&pid=iN5fbe4b8"
//   },
//   {
//       "title": "Archives - University of Victoria",
//       "url": "https://web.uvic.ca/calendar2017-05/pdfs/undergraduate-201705_Part6.pdf"
//   },
//   {
//       "title": "Log in to your account",
//       "url": "https://accweb.mouv.desjardins.ca/identifiantunique/securite-garantie/authentification/auth/simple/0?domaineVirtuel=coast&executeTime=12"
//   },
//   {
//       "title": "Google Docs",
//       "url": "https://docs.google.com/"
//   },
//   {
//       "title": "Homepage - University of Victoria",
//       "url": "https://bright.uvic.ca/d2l/home"
//   }
// ]

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
    chrome.topSites.get().then(setTopSites)
  }, [])

  // console.log(topSites)
  // console.log(process.env.NODE_ENV)

  return (
    <nav>
      {topSites.slice(0,5).map(({title, url}) => (
        <a
          key={url}
          href={url} target="_self">
            <figure>
              <img 
              src={faviconURL(url)} 
              alt="favicon"
              width="24"
              // src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
              />
            </figure>
          <label>{stripTitle(title)}</label>
        </a>
      ))}
    </nav>
  )
}


