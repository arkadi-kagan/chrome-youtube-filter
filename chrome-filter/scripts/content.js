const regex_array = [
	"Бумажкин","Глент", "Кобяков", "Влад", "A4", "А4",
	"SOIKAC", "Pe1m3sHeK", "БЕРТ",
	"Уральские Пельмени",
	"Pega_x", "jonathan barak",
	"Никита Удановский",
	"луномосик", "Lunomosik",
	"моргенштерн", "MORGENSHTERN",
	"Челлендж", "Challenge", "אתגר", "קומדי בר",
	"Морковь PRO",
	"KiKiDo",
	"Horror", "МОНСТР",
	"в реальной жизни", "In Real Life", "Все грехи",
	"BRUNO",
	"ВУХУУ",
	"Мистер Макс",
	"Даниил Беляков", "Шакалиус",
	"Братки", "Братан", "Братва",
	"туалет", "трэш", "лайфхак", "Полный треш", "угар",
	"ЛЮБОПЫТНЫЙ ПОЗНАВАТЕЛЬ", "LPOZNAVATEL", "сантехник",
	"фиксики.*чинилы", "чинилы.*фиксики"
];

const my_regex = new RegExp(regex_array.join("|"), "i");

function filter_by_class_and_id(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	for (let i = 0; i < myNodeList.length; i++) {
		if (id == myNodeList[i].id) {
			if (myNodeList[i].textContent.search(my_regex) != -1) {
				myNodeList[i].remove();
				i--;
			}
		}
	}
}

// Find trigger_class and check for the pattern.
// If match, hide the other "other_class, other_id" element.
function filter_class_and_other_class_id(trigger_class, other_class, other_id) {
	let myNodeList = document.getElementsByClassName(trigger_class);
	for (let i = 0; i < myNodeList.length; i++) {
		if (myNodeList[i].textContent.search(my_regex) != -1) {
			let others = document.getElementsByClassName(other_class);
			for (let j = 0; j < others.length; j++) {
				if (others[j].id == other_id) {
					others[j].remove();
					j--;
				}
			}
		}
	}
}

function filter_class_id_and_inner_calls_tag(trigger_class, trigger_id, inner_class, inner_tag) {
	let myNodeList = document.getElementsByClassName(trigger_class);
	for (let i = 0; i < myNodeList.length; i++) {
		if (myNodeList[i].id == trigger_id) {
			let inners = myNodeList[i].getElementsByClassName(inner_class);
			for (let j = 0; j < inners.length; j++) {
				if (inners[j].tagName.toLowerCase() == inner_tag) {
					if (inners[j].textContent.search(my_regex) != -1) {
						myNodeList[i].remove();
						i--;
						break;
					}
				}
			}
		}
	}
}

function remove_tags(tag_name) {
	let myNodeList = document.getElementsByTagName(tag_name);
	for (let i = 0; i < myNodeList.length; i++) {
		myNodeList[i].remove();
		i--;
	}
}

function remove_no_filter(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	for (let i = 0; i < myNodeList.length; i++) {
		if (id == myNodeList[i].id) {
			myNodeList[i].remove();
			i--;
		}
	}
}

function cleanup_by_filter() {
	filter_by_class_and_id("ytd-channel-renderer", "content-section");
	filter_by_class_and_id("ytd-vertical-list-renderer", "");
	filter_by_class_and_id("ytd-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-rich-grid-media", "dismissible");
	filter_by_class_and_id("ytd-compact-video-renderer", "dismissible");
	filter_by_class_and_id("ytd-section-list-renderer", "");
	filter_by_class_and_id("ytd-secondary-search-container-renderer", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline", "");
	filter_by_class_and_id("page-header-view-model-wiz__page-header-headline-info", "");
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

