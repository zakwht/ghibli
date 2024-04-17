const saveOptions = () => {
  let settings = Object.fromEntries(
    [...document.forms.settings.elements].map((x) => [x.id, x.checked])
  );
  localStorage.setItem("ghibli-extension-settings", JSON.stringify(settings));
  if (typeof chrome !== "undefined") window.close();
  else console.log(settings);
};

const loadOptions = () => {
  let settings = JSON.parse(localStorage.getItem("ghibli-extension-settings"));
  [...document.forms.settings.elements].forEach((x) => {
    if (x.type === "checkbox") x.checked = settings[x.id];
  });
};

document.addEventListener("DOMContentLoaded", loadOptions);
document.getElementById("save").addEventListener("click", saveOptions);
