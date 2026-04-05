function cleanup_by_filter_youtube() {
	filter_class_id_and_other_class_id("ytd-watch-metadata", "top-row", "ytd-watch-flexy", "full-bleed-container");
	filter_class_id_and_other_class_id("ytp-title-text", "", "ytd-watch-flexy", "full-bleed-container");
	filter_class_id_and_other_class_id("playerMicroformatRendererHost", "", "ytd-watch-flexy", "player-full-bleed-container")
	filter_class_id_and_other_class_id("playerMicroformatRendererHost", "", "ytd-page-manager watch-root-element", "");
	filter_class_id_remove_all("watch-main-col", "watch7-content");
	filter_class_id_and_inner_calls_tag("ytd-watch-flexy", "primary-inner", "watch-active-metadata ytd-watch-flexy", "ytd-watch-metadata");
	filter_tag_and_other_class_id("ytm-slim-video-metadata-section-renderer", "player-container", "player-container-id");
	filter_by_class_and_id("ytd-channel-renderer", "content-section");
	filter_by_class_and_id("ytp-videowall-still", "");
	filter_by_class_and_id("fullscreen-recommendation", "");
	filter_by_class_and_id("ytd-vertical-list-renderer", "");
	filter_by_class_and_id("ytd-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-rich-grid-media", "dismissible");
	filter_by_class_and_id("ytd-compact-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-watch-flexy", "primary");
	filter_by_class_and_id("ytd-watch-next-secondary-results-renderer", "");
	filter_by_class_and_id("ytd-section-list-renderer", "");
	filter_by_class_and_id("ytd-rich-grid-renderer", "");
	filter_by_class_and_id("ytp-ce-element", "");
	filter_by_class_and_id("ytd-item-section-renderer", "contents");
	filter_by_class_and_id("ytd-shorts", "shorts-container");
	filter_by_class_and_id("ytd-playlist-panel-renderer", "playlist-items");
	filter_by_class_and_id("ytd-secondary-search-container-renderer", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline-info", "");
	filter_by_class_and_id("ytSuggestionComponentSuggestion", "");
	filter_by_class_and_id("horizontal-card-list-card", "");
	filter_by_class_and_id("rich-item-single-column", "");
	filter_by_class_and_id("item", "");
	filter_by_class_and_id("ShortsLockupViewModelHost", "");
	filter_by_class_and_id("watch-content full-bleed-wn-thumbs", "");
	filter_by_class_and_id("carousel-item", "");
	filter_by_class_and_id("feed-item", "");
	filter_by_class_and_id("BidNOe fp-c", "");
	filter_by_tag("ytm-compact-video-renderer");
	filter_by_tag("script");
	filter_tag_and_ban("head");
}

function cleanup_ads_youtube() {
	remove_no_filter("ytd-watch-flexy", "player-ads");
	remove_tags("ad-slot-renderer");
	remove_tags("ytd-in-feed-ad-layout-renderer");
}

function cleanup_youtube() {
	cleanup_ads_youtube();
	cleanup_by_filter_youtube();
}
