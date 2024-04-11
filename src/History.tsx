import { FC } from "react";

export interface HistoryURL {
  title?: string;
  url?: string;
}

let devSites = [
  {
      "title": "Inbox - Gmail",
      "url": "https://mail.google.com/",
  },
  {
      "title": "zakwht (Zak)",
      "url": "https://github.com/zakwht",

  },
  {
      "title": "Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.",
      "url": "https://www.notion.so/",
  },
  {
      "title": "Google Docs",
      "url": "https://docs.google.com/",
  },
  {
      "title": "zakwh1te • Instagram",
      "url": "https://www.instagram.com/zakwh1te/",
  }
]

const filterDuplicateTitles = (h: HistoryURL[]) =>
  h.reduce<HistoryURL[]>((acc, item) => {
    if (acc.findIndex(i => i.title === item.title) < 0 ) acc.push(item);
    return acc;
  },[])


export const History: FC<{history: HistoryURL[]}> = ({history}) => {

  // const [topSites, setTopSites] = useState<TopSiteURL[]>([])

  // useEffect(() => {
  //   if (process.env.NODE_ENV === "development")
  //     setTopSites(devSites)
  //   else chrome.topSites.get().then(setTopSites)
  // }, [])

  console.log(history)

  return (
    <ol>
      {filterDuplicateTitles(history).slice(0,5).map(({url, title}) => (
        <li key={url}>
          <a href={url} target="_self">
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ol>
  )
}


