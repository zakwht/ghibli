import React from "react";
import stills from "./stills.json";

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key !== "Enter") return;
  const URI = encodeURIComponent(e.currentTarget.value);
  window.open(`https://google.com/search?q=${URI}`, "_self");
};

const randomStill = () => stills[Math.floor(Math.random() * stills.length)];

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
  return (
    <main
      style={{
        backgroundImage: `url('${still.url}')`
      }}
      data-alt={still.alt}
    >
      <input
        placeholder="Search Google or type a URL"
        autoCorrect="false"
        spellCheck="false"
        onKeyDown={handleKeyDown}
      />
      <footer>
        <span>{still.title}</span>
        <span>
          {still.english} ({still.date.slice(0, 4)})
        </span>
      </footer>
    </main>
  );
};
