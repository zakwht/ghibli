import { useState, useEffect } from "react";
import { getTopSites } from "./chromeHandler";

interface TopSiteURL {
  title: string;
  url: string;
  src?: string;
}

function faviconURL(u: string) {
  const url = new URL(chrome.runtime.getURL("/_favicon/"));
  url.searchParams.set("pageUrl", u);
  url.searchParams.set("size", "32");
  return url.toString();
}

const stripTitle = (t: string) => t.split(/\s+(-|•|\||–)\s+/)[0];

export const TopSites = () => {
  const [topSites, setTopSites] = useState<TopSiteURL[]>([]);

  useEffect(() => {
    getTopSites().then(setTopSites);
  }, []);

  return (
    <nav className="topSites">
      {topSites.slice(0, 5).map(({ title, url, src }) => (
        <a key={url} href={url} target="_self">
          <figure>
            <img draggable="false" src={src || faviconURL(url)} alt="favicon" width="24" />
          </figure>
          <label>{stripTitle(title)}</label>
        </a>
      ))}
    </nav>
  );
};
