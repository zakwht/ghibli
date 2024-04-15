import React, { useState } from "react";
import stills from "./stills.json";
import { TopSites } from "./TopSites";
import { History, HistoryURL } from "./History";
import { searchHistory } from "./chromeHandler";
// import { Launcher } from "./Launcher";

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key !== "Enter") return;
  const URI = encodeURIComponent(e.currentTarget.value);
  window.open(`https://google.com/search?q=${URI}`, "_self");
};

// will be a user option eventually
const randomStill = () =>
  stills.filter((s) => s.english !== "Earwig and the Witch")[
    Math.floor(Math.random() * stills.length)
  ];

const getStill = () => {
  const stored = localStorage.getItem("ghibli-extension-still");
  if (stored)
    try {
      return JSON.parse(stored);
    } catch (e) {
      return randomStill();
    }
  else return randomStill();
};

const still = getStill();
// preload next image
const nextStill = randomStill();
new Image().src = nextStill.url;
localStorage.setItem("ghibli-extension-still", JSON.stringify(nextStill));

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
        <input
          placeholder="Search Google or type a URL"
          autoCorrect="false"
          spellCheck="false"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={history.length ? "hideBorders" : ""}
        />
        <History history={history} />
        <TopSites />
      </div>
      <footer>
        <span>{still.title}</span>
        <span>
          {still.english} ({still.date.slice(0, 4)})
        </span>
      </footer>
    </main>
  );
};
