import stills from "./json/stills.json";
import filteredStills from "./json/filtered.json";

export interface Settings {
  hideCGI: boolean;
  showTopSites: boolean;
  filterHistory: boolean;
  showLauncher: boolean;
}

export interface Still {
  url: string;
  title: string;
  size: string;
  thumbnail: string;
  alt: string;
  date: string;
  english: string;
}

// STORAGE HANDLING
const SETTINGSKEY = "ghibli-extension-settings";
const STILLKEY = "ghibli-extension-still";

// get stored settings or set default settings
export const getSettings = (): Settings => {
  let settings = JSON.parse(localStorage.getItem(SETTINGSKEY) || "{}");
  if (Object.keys(settings).length) return settings;
  settings = {
    hideCGI: true,
    showTopSites: true,
    filterHistory: false,
    showLauncher: true
  };
  localStorage.setItem(SETTINGSKEY, JSON.stringify(settings));
  return settings;
};

// STILL HANDLING
const getStoredStill = () => localStorage.getItem(STILLKEY);
const setStoredStill = (still: Still) =>
  localStorage.setItem(STILLKEY, JSON.stringify(still));

const randomStill = (hideCGI: boolean) =>
  hideCGI
    ? filteredStills[Math.floor(Math.random() * filteredStills.length)]
    : stills[Math.floor(Math.random() * stills.length)];

export const getStill = (hideCGI: boolean) => {
  const stored = getStoredStill();
  if (stored)
    try {
      return JSON.parse(stored);
    } catch (e) {
      return randomStill(hideCGI);
    }
  else return randomStill(hideCGI);
};

export const preloadNextStill = (hideCGI: boolean) => {
  const nextStill: Still = randomStill(hideCGI);
  new Image().src = nextStill.url;
  setStoredStill(nextStill);
};
