function filter_by_class_and_id_multiple_only(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	if (myNodeList.length > 1) {
		filter_by_class_and_id(class_name, id);
	}
}

function filter_last_resort() {
	let bodies = document.getElementsByTagName("body");
	for (let i = 0; i < bodies.length; i++) {
		if (bodies[i].textContent.search(my_regex) != -1) {
			bodies[i].setHTMLUnsafe("<body><H1>תוכן אסור בעמוד, לא נמצא מקום ספציפי</H1><BR/><p>נסה יוטיו: <a href=\"https://www.youtube.com\">Youtube</a></p></body>")
		}
	}
}

function cleanup_by_filter() {
	filter_by_class_and_id("TzHB6b j8lBAb p7kDMc cLjAic", "");
	filter_by_class_and_id("g PmEWq", "");
	filter_by_class_and_id_multiple_only("MjjYud", "");
	filter_by_class_and_id("fp-c", "");
	filter_by_class_and_id("TkgYgb Ww4FFb", "");
	filter_by_class_and_id("kb0PBd cvP2Ce", "");
	filter_by_class_and_id("Ww4FFb vt6azd", "");
	filter_by_class_and_id("I8iMf", "");
	filter_by_class_and_id("eA0Zlc WghbWd FnEtTd mkpRId ivg-i", "");
	filter_last_resort();
}

setInterval(function(){
	cleanup_by_filter();
}, 1000);

