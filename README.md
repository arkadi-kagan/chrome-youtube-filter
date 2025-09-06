This project implements chrome filter by arbitrary words.
Currently, this filter supports:
   www.google.com
   www.youtube.com

Because, Youtube pages have human-readible class names,
I give some more trust in my Youtube processing.

In advance to keyword filtering, some known non-appropriate sites are blocked.
In this case my filter adwises "go watch some youtube".

Chrome on Android does not support extensions.
For this reason, on Android I am using
Kiwi (https://play.google.com/store/apps/details?id=com.kiwibrowser.browser).

This project was developed on Linux with chromium browser.
On Windows - there is no reason it shouldn't work.
I just don't have resources to re-check all the configuration scripts.
Once plugin is ready - Chrome on Windows allows filtering without farther troubles.

# Instructions for new user
* Assume Linux or modify commands accordingly
* Clone repository:
*    git clone https://github.com/arkadi-kagan/chrome-youtube-filter.git
*    cd chrome-youtube-filter/chrome-filter/scripts
* Create new words filter:
*    cp Yuval.js MyList.js
*    gedit MyList.js
*    cd ../..
* Do remove all or some words and add new words instead
* Generate the new plugin
*    ./configyre MyList
* Generate the plugin
*    make
* The new plugin is chrome-filter.crx
* In case you want to check it locally,
*    install plugin as chrome-youtube-filter/chrome-filter directory
