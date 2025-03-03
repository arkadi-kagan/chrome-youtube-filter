function filter_by_class_and_id_multiple_only(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	if (myNodeList.length > 1) {
		filter_by_class_and_id(class_name, id);
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
}

setInterval(function(){
	cleanup_by_filter();
}, 1000);

