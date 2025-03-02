build: chrome-filter.crx

chrome-filter.crx:
	chromium --pack-extension=${PWD}/chrome-filter --no-sandbox

clean:
	rm chrome-filter.crx chrome-filter.pem
