const regex_array = [
	"Бумажкин","Глент", "Кобяков", "Влад", "A4", "А4",
	"луномосик", "Lunomosik",
	"моргенштерн", "MORGENSHTERN",
	"Челлендж", "Challenge",
	"Морковь PRO",
	"KiKiDo",
	"Horror", "МОНСТР",
	"в реальной жизни", "In Real Life",
	"BRUNO",
	"ВУХУУ",
	"Мистер Макс"
];

const my_regex = new RegExp(regex_array.join("|"), "i");

function filter_by_class_and_id(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	for (let i = 0; i < myNodeList.length; i++) {
		if (id == myNodeList[i].id) {
			if (myNodeList[i].textContent.search(my_regex) != -1) {
				myNodeList[i].remove();
			}
		}
	}
}

// Find trigger_class_name and check for the pattern.
// If match, hide the other "class_name, id" element.
function cleanup_other(trigger_class_name, class_name, id) {
	let myNodeList = document.getElementsByClassName(trigger_class_name);
	for (let i = 0; i < myNodeList.length; i++) {
		if (myNodeList[i].textContent.search(my_regex) != -1) {
			let others = document.getElementsByClassName(class_name);
			for (let j = 0; j < others.length; j++) {
				if (others[j].id == id) {
					others[j].remove();
				}
			}
		}
	}
}

function remove_tags(tag_name) {
	let myNodeList = document.getElementsByTagName(tag_name);
	for (let i = 0; i < myNodeList.length; i++) {
		myNodeList[i].remove();
	}
}

function remove_no_filter(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	for (let i = 0; i < myNodeList.length; i++) {
		if (id == myNodeList[i].id) {
			myNodeList[i].remove();
		}
	}
}

function cleanup_by_filter() {
	filter_by_class_and_id("ytd-channel-renderer", "content-section");
	filter_by_class_and_id("ytd-vertical-list-renderer", "");
	filter_by_class_and_id("ytd-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-section-list-renderer", "");
	filter_by_class_and_id("ytd-secondary-search-container-renderer", "");
	filter_by_class_and_id("ytd-watch-flexy", "primary-inner");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline-info", "");
	filter_by_class_and_id("horizontal-card-list-card", "");
	filter_by_class_and_id("rich-item-single-column", "");
	filter_by_class_and_id("item", "");
	filter_by_class_and_id("ShortsLockupViewModelHost", "");
	cleanup_other("watch-content full-bleed-wn-thumbs", "player-container sticky-player", "player-container-id");
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
	cleanup_by_filter();
	cleanup_ads();
}, 1000);

