const my_regex = new RegExp(regex_array.join("|"), "i");

function filter_by_class_and_id(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	for (let i = 0; i < myNodeList.length; i++) {
		if (id === myNodeList[i].id) {
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
				if (others[j].id === other_id) {
					others[j].remove();
					j--;
				}
			}
		}
	}
}

// Find trigger_class & id and check for the pattern.
// If match, hide the other "other_class, other_id" element.
function filter_class_id_and_other_class_id(trigger_class, trigger_id, other_class, other_id) {
	let myNodeList = document.getElementsByClassName(trigger_class);
	for (let i = 0; i < myNodeList.length; i++) {
		if (myNodeList[i].id === trigger_id) {
			if (myNodeList[i].textContent.search(my_regex) != -1) {
				let others = document.getElementsByClassName(other_class);
				for (let j = 0; j < others.length; j++) {
					if (others[j].id === other_id) {
						others[j].remove();
						j--;
					}
				}
			}
		}
	}
}

function filter_class_id_and_inner_calls_tag(trigger_class, trigger_id, inner_class, inner_tag) {
	let myNodeList = document.getElementsByClassName(trigger_class);
	for (let i = 0; i < myNodeList.length; i++) {
		if (myNodeList[i].id === trigger_id) {
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
