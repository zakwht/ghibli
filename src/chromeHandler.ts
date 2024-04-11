import { devSites } from "./development";

export const getTopSites = async () => {
  if (process.env.NODE_ENV === "development") return devSites;
  else return await chrome.topSites.get();
};

export const searchHistory = async (text: string) => {
  if (process.env.NODE_ENV === "development")
    return devSites.filter((t) => t.title.includes(text));
  else return await chrome.history.search({ text });
};
