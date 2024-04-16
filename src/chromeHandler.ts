import { inDev, devSites } from "./development";

export const getTopSites = async () => {
  if (inDev) return devSites;
  else return await chrome.topSites.get();
};

export const searchHistory = async (text: string) => {
  if (inDev) return devSites.filter((t) => t.title.includes(text));
  else return await chrome.history.search({ text });
};
