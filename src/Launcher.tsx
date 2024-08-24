import { ReactComponent as LauncherIcon } from "./svg/launcher.svg";
import apps from "./json/apps.json";
// https://ssl.gstatic.com/gb/images/sprites/p_2x_a6cad964874d.png

export const Launcher = () => {
  return (
    <header>
      <button>
        <LauncherIcon width="36" />
      </button>
      <nav className="launcher">
        {apps.map(({ name, url, pos }) => (
          <a href={url} key={name}>
            <span style={{ backgroundPosition: pos }}></span>
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
};
