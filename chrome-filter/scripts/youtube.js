function cleanup_by_filter_youtube_desktop() {
	filter_class_id_and_other_class_id("ytd-watch-metadata", "top-row", "ytd-watch-flexy", "full-bleed-container");
	filter_class_id_and_other_class_id("ytp-title-text", "", "ytd-watch-flexy", "full-bleed-container");
	filter_class_id_and_other_class_id("playerMicroformatRendererHost", "", "ytd-watch-flexy", "player-full-bleed-container");
	filter_class_id_and_other_class_id("playerMicroformatRendererHost", "", "ytd-page-manager watch-root-element", "");
	filter_class_id_and_inner_calls_tag("ytd-watch-flexy", "primary-inner", "watch-active-metadata ytd-watch-flexy", "ytd-watch-metadata");
	filter_by_class_and_id("ytd-channel-renderer", "content-section");
	filter_by_class_and_id("ytd-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-rich-grid-media", "dismissible");
	filter_by_class_and_id("ytd-watch-flexy", "primary");
	filter_by_class_and_id("ytd-watch-next-secondary-results-renderer", "");
	filter_by_class_and_id("ytd-section-list-renderer", "");
	filter_by_class_and_id("ytd-rich-grid-renderer", "");
	filter_by_class_and_id("ytp-ce-element", "");
	filter_by_class_and_id("ytd-item-section-renderer", "contents");
	filter_by_class_and_id("ytd-shorts", "shorts-container");
	filter_by_class_and_id("ytd-secondary-search-container-renderer", "");
	filter_by_class_and_id("ytGridShelfViewModelGridShelfItem", "");
}

function cleanup_by_filter_youtube_mobile() {
	filter_tag_and_other_class_id("ytm-slim-video-metadata-section-renderer", "player-container", "player-container-id");
	filter_by_class_and_id("horizontal-card-list-card", "");
	filter_by_class_and_id("carousel-item", "");
	filter_by_class_and_id("feed-item", "");
	filter_by_class_and_id("ytGridShelfViewModelGridShelfItem", "");
	filter_by_tag("ytm-compact-video-renderer");
	filter_by_tag("ytm-rich-item-renderer");
}

function cleanup_ads_youtube() {
	remove_no_filter("ytd-watch-flexy", "player-ads");
	remove_tags("ytd-in-feed-ad-layout-renderer");
}

function cleanup_youtube() {
	const html_without_scripts = document.getElementsByTagName("html")[0].outerHTML
		.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "");
	if (html_without_scripts.search(my_regex) == -1)
		return;

	cleanup_ads_youtube();
	if (/^m\.youtube\./i.test(window.location.hostname)) {
		cleanup_by_filter_youtube_mobile();
		return;
	}
	cleanup_by_filter_youtube_desktop();
}
