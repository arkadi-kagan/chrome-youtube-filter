function cleanup_by_filter() {
    hostname = window.location.hostname;
    if (hostname.match(/^[a-z0-9]+\.(vk|ok|pornhub|xvideos|xnxx|rutube|x|mover|eminem|reddit|tiktok|tlgrm|kinogo)\.[a-z0-9]+/i)) {
        ban_whole_page();
    } else if (hostname.match(/^[a-z]+\.youtube\.[a-z0-9\.]+/i)) {
        cleanup_youtube();
    } else if (hostname.match(/^[a-z]+\.google\.[a-z0-9\.]+/i)) {
        if (!hostname.match(/accounts\.google\.com/)) {
            cleanup_google();
        }
    } else {
        filter_by_tag("script");
        filter_by_tag("dev");
        filter_last_resort();
    }
}

setInterval(function(){
	cleanup_by_filter();
}, 1000);
