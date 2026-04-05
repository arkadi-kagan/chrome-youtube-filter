function cleanup_by_filter() {
    hostname = window.location.hostname;
    if (hostname.match(/^[a-z0-9]+\.(vk|ok|pornhub|xvideos|xnxx|rutube|yandex|dzen|x|mover|spotify|eminem|reddit|tiktok|tlgrm|kinogo)\.[a-z0-9]+/i)) {
        ban_whole_page();
    } else if (hostname.match(/music\.youtube\.[a-z0-9\.]+/i)) {
        ban_whole_page();
    } else if (hostname.match(/^[a-z]+\.youtube\.[a-z0-9\.]+/i)) {
        cleanup_youtube();
    } else if (hostname.match(/^[a-z]+\.google\.[a-z0-9\.]+/i)) {
        cleanup_google();
    }
}

setInterval(function(){
	cleanup_by_filter();
}, 1000);
