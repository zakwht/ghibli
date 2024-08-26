import React, { useState } from "react";
import { TopSites } from "./TopSites";
import { History, HistoryURL } from "./History";
import { searchHistory } from "./chromeHandler";
import { Launcher } from "./Launcher";
import { getSettings, getStill, preloadNextStill } from "./util";

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key !== "Enter") return;
  const URI = encodeURIComponent(e.currentTarget.value);
  window.open(`https://google.com/search?q=${URI}`, "_self");
};

const settings = getSettings();
const still = getStill(settings.hideCGI);
preloadNextStill(settings.hideCGI);

export const App = () => {
  const [history, setHistory] = useState<HistoryURL[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    searchHistory(e.currentTarget.value).then(setHistory);

  return (
    <main
      style={{
        backgroundImage: `url('${still.url}')`
      }}
      data-alt={still.alt}
    >
      <div>
        {settings.showSearchBar && (
          <input
            placeholder="Search Google or type a URL"
            autoCorrect="false"
            spellCheck="false"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            className={
              history.length && settings.filterHistory ? "hideBorders" : ""
            }
          />
        )}
        {settings.filterHistory && <History history={history} />}
        {settings.showTopSites && <TopSites />}
      </div>
      <footer>
        <span>{still.title}</span>
        <span>
          {still.english} ({still.date.slice(0, 4)})
        </span>
      </footer>
      {settings.showLauncher && <Launcher />}
    </main>
  );
};
