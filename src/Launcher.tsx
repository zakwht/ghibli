import { ReactComponent as LauncherIcon } from "./svg/launcher.svg";

// https://ssl.gstatic.com/gb/images/sprites/p_2x_a6cad964874d.png

let apps = ['Account', 'Search', 'Maps', 'YouTube', 'Play', 'News', 'Gmail', 'Meet', 'Chat', 'Contacts', 'Drive', 'Calendar', 'Translate', 'Photos', 'Shopping', 'Finance', 'Docs', 'Sheets', 'Slides', 'Books', 'Blogger', 'Keep', 'Jamboard', 'Earth', 'Saved', 'Arts and Culture', 'Google Ads', 'Travel', 'Forms', 'Google Store', 'Chrome Web Store']
let bps = ['0px -1798px', '0px -1392px', '0px -1044px', '0px -2378px', '0px -290px', '0px -1334px', '0px -2436px', '0px -348px', '0px -580px', '0px -1624px', '0px -116px', '0px -1276px', '0px -1682px', '0px -870px', '0px -174px', '0px -1508px', '0px -2088px', '0px -2146px', '0px 0px', '0px -522px', '0px -2494px', '0px -1102px', '0px -2030px', '0px -1566px', '0px -1972px', '0px -638px', '0px -1218px', '0px -754px', '0px -232px', '0px -2204px', '0px -1914px']
let urls = [];

export const Launcher = () => {
  return (
    <header>
      <LauncherIcon width="36" />
      <div>
          {apps.map((a, i) => <a href="#" key={a} >
            <span style={{backgroundPosition: bps[i]}}></span>
            {a}
          </a>)}
      </div>
    </header>
  );
};
