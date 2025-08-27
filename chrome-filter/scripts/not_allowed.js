let bodies = document.getElementsByTagName("body");
for (let i = 0; i < bodies.length; i++) {
	bodies[i].setHTMLUnsafe("<body><H1>אתר לא מורשה</H1><BR/><p>נסה יוטיוב: <a href=\"https://www.youtube.com\">Youtube</a></p></body>");
}

let heads = document.getElementsByTagName("head");
for (let i = 0; i < heads.length; i++) {
	heads[i].setHTMLUnsafe("<head><title>אתר לא מורשה</title></head>");
}
