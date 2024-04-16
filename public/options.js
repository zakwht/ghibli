const saveOptions = () => {
  let settings = Object.fromEntries(
    [...document.forms.settings.elements].map((x) => [x.id, x.checked])
  );

  try {
    chrome.storage.sync.set(settings);
    window.close();
  } catch (e) {
    console.log(settings);
  }
};

const loadOptions = () => {
  try {
    chrome.storage.sync.get().then((settings) => {
      [...document.forms.settings.elements].forEach((x) => {
        if (x.type === "checkbox") x.checked = settings[x.id];
      });
    });
  } catch (e) {
    const settings = {
      hideGGI: true,
      showTopSites: true
    };

    [...document.forms.settings.elements].forEach((x) => {
      if (x.type === "checkbox") x.checked = settings[x.id];
    });
  }
};

document.addEventListener("DOMContentLoaded", loadOptions);
document.getElementById("save").addEventListener("click", saveOptions);
