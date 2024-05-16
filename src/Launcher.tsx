import { ReactComponent as LauncherIcon } from "./svg/launcher.svg";

// https://ssl.gstatic.com/gb/images/sprites/p_2x_a6cad964874d.png

let apps = ['Account', 'Search', 'Maps', 'YouTube', 'Play', 'News', 'Gmail', 'Meet', 'Chat', 'Contacts', 'Drive', 'Calendar', 'Translate', 'Photos', 'Shopping', 'Finance', 'Docs', 'Sheets', 'Slides', 'Books', 'Blogger', 'Keep', 'Jamboard', 'Earth', 'Saved', 'Arts and Culture', 'Google Ads', 'Travel', 'Forms', 'Google Store', 'Chrome Web Store']
let bps = ['0px -1798px', '0px -1392px', '0px -1044px', '0px -2378px', '0px -290px', '0px -1334px', '0px -2436px', '0px -348px', '0px -580px', '0px -1624px', '0px -116px', '0px -1276px', '0px -1682px', '0px -870px', '0px -174px', '0px -1508px', '0px -2088px', '0px -2146px', '0px 0px', '0px -522px', '0px -2494px', '0px -1102px', '0px -2030px', '0px -1566px', '0px -1972px', '0px -638px', '0px -1218px', '0px -754px', '0px -232px', '0px -2204px', '0px -1914px']
let urls = ['https://myaccount.google.com/?utm_source=OGB&utm_medium=app', 'https://www.google.com/', 'https://maps.google.com/', 'https://www.youtube.com/', 'https://play.google.com/', 'https://news.google.com/', 'https://mail.google.com/mail/', 'https://meet.google.com/?hs=197', 'https://chat.google.com/', 'https://contacts.google.com/', 'https://drive.google.com/', 'https://calendar.google.com/calendar', 'https://translate.google.com/', 'https://photos.google.com/', 'https://www.google.com/shopping?source=og', 'https://www.google.com/finance', 'https://docs.google.com/document/?usp=docs_alc', 'https://docs.google.com/spreadsheets/?usp=sheets_alc', 'https://docs.google.com/presentation/?usp=slides_alc', 'https://books.google.com/', 'https://www.blogger.com/', 'https://keep.google.com/', 'https://jamboard.google.com/', 'https://earth.google.com/web/', 'https://www.google.com/save', 'https://artsandculture.google.com/?utm_source=ogs.google.com&utm_medium=referral', 'https://ads.google.com/home/?subid=ww-ww-xs-ip-awhc-a-ogb_cons!o2', 'https://www.google.com/travel/?dest_src=al', 'https://docs.google.com/forms/', 'https://store.google.com/?utm_source=app_launcher&utm_medium=google_oo&utm_campaign=GS107345', 'https://chrome.google.com/webstore?utm_source=app-launcher', 'https://analytics.google.com/?utm_source=OGB&utm_medium=app'];

export const Launcher = () => {
  return (
    <header>
      <button>
        <LauncherIcon width="36" />
      </button>
      <nav className="launcher">
          {apps.map((a, i) => <a href={urls[i]} key={a} >
            <span style={{backgroundPosition: bps[i]}}></span>
            {a}
          </a>)}
      </nav>
    </header>
  );
};
