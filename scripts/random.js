function random() {
	var colour_index = Math.floor((Math.random() * colours.length));
	background_colour = colours[colour_index];
	document.body.style.backgroundColor = background_colour;
	var random_index = Math.floor((Math.random() * content.length));
	var a = document.getElementById("mot");
	var b = document.getElementById("word");
	var c = document.getElementById("sentence_french");
	var d = document.getElementById("sentence_eng");
	a.innerHTML = content[random_index].a;
	b.innerHTML = content[random_index].b;
	c.innerHTML = content[random_index].c;
	d.innerHTML = content[random_index].d;
}
