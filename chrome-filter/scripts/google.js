function filter_by_class_and_id_multiple_only(class_name, id) {
	let myNodeList = document.getElementsByClassName(class_name);
	if (myNodeList.length > 1) {
		filter_by_class_and_id(class_name, id);
	}
}

function filter_last_resort() {
	let bodies = document.getElementsByTagName("body");
	for (let i = 0; i < bodies.length; i++) {
		if (bodies[i].outerHTML.search(my_regex) != -1) {
			ban_whole_page();
			break;
		}
	}
}

function cleanup_by_filter() {
	filter_by_class_and_id("XRVJtc bnmjfe aKByQb", "");
	filter_by_class_and_id("TzHB6b j8lBAb p7kDMc cLjAic", "");
	filter_by_class_and_id("g PmEWq", "");
	filter_by_class_and_id_multiple_only("MjjYud", "");
	filter_by_class_and_id("fp-c", "");
	filter_by_class_and_id("TkgYgb Ww4FFb", "");
	filter_by_class_and_id("kb0PBd cvP2Ce", "");
	filter_by_class_and_id("Ww4FFb vt6azd", "");
	filter_by_class_and_id("I8iMf", "");
	filter_by_class_and_id("eA0Zlc WghbWd FnEtTd mkpRId ivg-i", "");
	filter_by_class_and_id("xfX4Ac JI5uCe qB9BY yWNJXb", "");
	filter_by_class_and_id("sbct", "");
	filter_by_class_and_id("CYJS5e W0urI ZHugbd UivI7b", "");
	filter_by_class_and_id("TQc1id k5T88b vVVcqf", "rhs");
	filter_by_class_and_id("b2Rnsc vIifob", "");
	filter_by_class_and_id("GGYY2b cTMoX", "");
	filter_by_class_and_id("T19leb", "");
	filter_by_class_and_id("j8c53", "");
	filter_by_class_and_id("T286Pc", "");
	filter_by_tag("script");
	filter_by_tag("dev");
	filter_last_resort();
}

setInterval(function(){
	cleanup_by_filter();
}, 1000);
