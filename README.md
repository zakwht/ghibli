# Studio Ghibli Browser Extension

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/fmdejajfcfdnbbanalgjibhcgbhihphd?label=chrome)](https://chrome.google.com/webstore/detail/studio-ghibli-new-tab/fmdejajfcfdnbbanalgjibhcgbhihphd)
[![Rating](https://img.shields.io/chrome-web-store/stars/fmdejajfcfdnbbanalgjibhcgbhihphd)](https://chrome.google.com/webstore/detail/studio-ghibli-new-tab/fmdejajfcfdnbbanalgjibhcgbhihphd)
[![License](https://img.shields.io/github/license/zakwht/ghibli)](/LICENSE)
[![Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Stills](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fzakwht%2Fghibli%2Fmain%2Fsrc%2Fjson%2Fstills.json&query=%24.length&label=stills)](./src/json/stills.json)

Browser extension designed to showcase still shots from Studio Ghibli films. 

![Screenshot](./webstore/top-sites.png)

### Features

- See a new Ghibli still as the background for each new tab opened
- Search user history (`chrome.history` API)
- Quick links to top sites (`chrome.topSites` API)
- Access the Google app launcher

### Development

#### Requirements
* Node v14 (built with 14.18.2)
* Python 3 (built with 3.7.3)

<!-- #### Setup

```
git clone <url>
npm i
pip3 install -r requirements.txt
``` -->

#### Scripts
* `start`: runs the app in development mode
* `build`: builds the app for production, including scraping the Studio Ghibli website for still shots and compressing the extension files
* `quick`: builds the app for production without executing the scraping script
* `options`: opens the extensions options page in the browser

### Acknowledgments
* __Designed with images retrieved from__ [Studio Ghibli](https://www.ghibli.jp/)
* __Developed with the inspiration of__ Kate Jones
