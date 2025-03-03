const regex_array = [
	"Бумажкин","Глент", "Кобяков", "Влад", "А4",
	"SOIKAC", "Pe1m3sHeK", "БЕРТ",
	"Уральские Пельмени",
	"Pega_x", "jonathan barak",
	"Никита Удановский",
	"луномосик", "Lunomosik",
	"моргенштерн", "MORGENSHTERN",
	"Челлендж", "Challenge", "אתגר", "קומדי בר",
	"Морковь PRO",
	"KiKiDo",
	"Horror", "МОНСТР", "משוגע", "ужас", "стремный",
	"в реальной жизни", "In Real Life", "Все грехи",
	"BRUNO",
	"ВУХУУ",
	"Мистер Макс",
	"Даниил Беляков", "Шакалиус",
	"Братки", "Братан", "Братва",
	"туалет", "трэш", "лайфхак", "Полный треш", "угар",
	"ЛЮБОПЫТНЫЙ ПОЗНАВАТЕЛЬ", "LPOZNAVATEL", "сантехник",
	"фиксики.*чинилы", "чинилы.*фиксики",
    "секс", "סקס", "ציצי", "сиськи", "груди", "\\bsex\\b", "\\bsexy\\b"
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
