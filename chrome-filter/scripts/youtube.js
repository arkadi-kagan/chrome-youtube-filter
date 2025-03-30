
function cleanup_by_filter() {
	filter_by_class_and_id("ytd-channel-renderer", "content-section");
	filter_by_class_and_id("ytd-vertical-list-renderer", "");
	filter_by_class_and_id("ytd-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-rich-grid-media", "dismissible");
	filter_by_class_and_id("ytd-compact-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-section-list-renderer", "");
	filter_by_class_and_id("ytd-rich-grid-renderer", "");
	filter_by_class_and_id("ytd-item-section-renderer", "");
	filter_by_class_and_id("ytd-playlist-panel-renderer", "playlist-items");
	filter_by_class_and_id("ytd-secondary-search-container-renderer", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline-info", "");
	filter_by_class_and_id("ytSuggestionComponentSuggestion", "");
	filter_by_class_and_id("horizontal-card-list-card", "");
	filter_by_class_and_id("rich-item-single-column", "");
	filter_by_class_and_id("item", "");
	filter_by_class_and_id("ShortsLockupViewModelHost", "");
	filter_class_id_and_inner_calls_tag("ytd-watch-flexy", "primary-inner", "watch-active-metadata ytd-watch-flexy", "ytd-watch-metadata");
	filter_class_and_other_class_id("watch-content full-bleed-wn-thumbs", "player-container sticky-player", "player-container-id");
	filter_by_class_and_id("watch-content full-bleed-wn-thumbs", "");
	filter_by_class_and_id("carousel-item", "");
	filter_by_class_and_id("feed-item", "");
}

function cleanup_ads() {
	remove_no_filter("ytd-watch-flexy", "player-ads");
	remove_tags("ad-slot-renderer");
	remove_tags("ytd-in-feed-ad-layout-renderer");
}

setInterval(function(){
	cleanup_ads();
	cleanup_by_filter();
}, 1000);

