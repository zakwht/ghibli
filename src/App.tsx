import React from "react";
import stills from "./stills.json";

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key !== "Enter") return;
  const URI = encodeURIComponent(e.currentTarget.value);
  window.open(`https://google.com/search?q=${URI}`, "_self");
};

const still = stills[Math.floor(Math.random() * stills.length)];

export const App = () => {
  return (
    <main
      style={{
        backgroundImage: `url('${still.url}')`
      }}
    >
      <input placeholder="Search Google or type a URL" autoCorrect="false" spellCheck="false" onKeyDown={handleKeyDown} />
      <footer>
        <span>{still.title}</span>
        <span>
          {still.english} ({still.date.slice(0, 4)})
        </span>
      </footer>
    </main>
  );
};
