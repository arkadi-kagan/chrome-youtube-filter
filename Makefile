build: chrome-filter.crx

chrome-filter.crx:
  chromium --pack-extension=$PWD/chrome-filter
