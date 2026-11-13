const nav_level1 = document.querySelector("#nav-level1");
const sections = document.querySelectorAll("section");

sections.forEach(item => {
	if (item.id != "home") {
		item.style.display = "none";
	}
});
nav_level1.addEventListener(`click`, (event) => {
	let target = event.target;

	switch (target.textContent) {
		case 'Home':
			sections.forEach(node => {
				if (node.id == "home"){
					node.style.display = "flex";
				} else {
				node.style.display = "none";
				}
			})
			break;
		case 'Projects':
			nav_level1.style.display = "none";
			nav_level2.style.display = "flex";
			break;
		case 'About':
			sections.forEach(node => {
				if (node.id == "about"){
					node.style.display = "flex";
				} else {
				node.style.display = "none";
				}
			})
	}
})

const nav_level2 = document.querySelector("#nav-level2");

nav_level2.addEventListener(`click`, (event) =>{
	let target = event.target;

	switch (target.id) {
		case 'back':
			nav_level1.style.display = "flex";
			nav_level2.style.display = "none";
			break;
		case 'bpj1':
			sections.forEach (item => {
				if (item.id == "pj1") {
					item.style.display = "flex";
				} else {
					item.style.display = "none";
				}
			})
			break;
		case 'bpj2':
			sections.forEach (item => {
				if (item.id == "pj2") {
					item.style.display = "flex";
				} else {
					item.style.display = "none";
				}
			})
	}
})
