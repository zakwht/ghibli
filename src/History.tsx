import { FC } from "react";

export interface HistoryURL {
  title?: string;
  url?: string;
}

const filterDuplicateTitles = (h: HistoryURL[]) =>
  h.reduce<HistoryURL[]>((acc, item) => {
    if (acc.findIndex((i) => i.title === item.title) < 0) acc.push(item);
    return acc;
  }, []);

export const History: FC<{ history: HistoryURL[] }> = ({ history }) => {
  return (
    <ol>
      {filterDuplicateTitles(history)
        .slice(0, 5)
        .map(({ url, title }) => (
          <li key={url}>
            <a href={url} target="_self">
              <span>{title}</span>
            </a>
          </li>
        ))}
    </ol>
  );
};
