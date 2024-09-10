/*menu buttons starts*/
document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.querySelector(
		'[data-collapse-toggle="navbar-default"]'
	);
	const menu = document.getElementById("navbar-default");

	menuButton.addEventListener("click", function () {
		menu.classList.toggle("hidden");
	});
});
/*menu buttons ends*/

/*popup div starts*/
const engineComponentsSection = document.getElementById('Engine-Components');
const brakeSystemsSection = document.getElementById('Brake-Systems');
const electricalComponentsSection = document.getElementById('Electrical-Components');
const bodyPartsSection = document.getElementById('Body-Parts');
const accessoriesSection = document.getElementById('Accessories');
let pop_div_holder = document.getElementById("pop_div_holder");
category_search.onclick = () => {
	pop_div_holder.classList.remove("hide");
	pop_div_holder.classList.add("show-block");
};
first.addEventListener("click", () => {
	engineComponentsSection.classList.remove("hide");
	brakeSystemsSection.classList.add("hide");
	electricalComponentsSection.classList.add("hide");
	bodyPartsSection.classList.add("hide");
	accessoriesSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	first.style.backgroundColor = "#ffffff23";
	second.style.backgroundColor = "transparent";
	third.style.backgroundColor = "transparent";
	sixth.style.backgroundColor = "transparent";
	seventh.style.backgroundColor = "transparent";
});
second.addEventListener("click", () => {
	brakeSystemsSection.classList.remove("hide");
	engineComponentsSection.classList.add("hide");
	electricalComponentsSection.classList.add("hide");
	bodyPartsSection.classList.add("hide");
	accessoriesSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	first.style.backgroundColor = "transparent";
	second.style.backgroundColor = "#ffffff23";
	third.style.backgroundColor = "transparent";
	sixth.style.backgroundColor = "transparent";
	seventh.style.backgroundColor = "transparent";
});
third.addEventListener("click", () => {
	electricalComponentsSection.classList.remove("hide");
	engineComponentsSection.classList.add("hide");
	brakeSystemsSection.classList.add("hide");
	bodyPartsSection.classList.add("hide");
	accessoriesSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	first.style.backgroundColor = "transparent";
	second.style.backgroundColor = "transparent";
	third.style.backgroundColor = "#ffffff23";
	sixth.style.backgroundColor = "transparent";
	seventh.style.backgroundColor = "transparent";
});
sixth.addEventListener("click", () => {
	bodyPartsSection.classList.remove("hide");
	engineComponentsSection.classList.add("hide");
	brakeSystemsSection.classList.add("hide");
	electricalComponentsSection.classList.add("hide");
	accessoriesSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	first.style.backgroundColor = "transparent";
	second.style.backgroundColor = "transparent";
	third.style.backgroundColor = "transparent";
	sixth.style.backgroundColor = "#ffffff23";
	seventh.style.backgroundColor = "transparent";
});
seventh.addEventListener("click", () => {
	accessoriesSection.classList.remove("hide");
	engineComponentsSection.classList.add("hide");
	brakeSystemsSection.classList.add("hide");
	electricalComponentsSection.classList.add("hide");
	bodyPartsSection.classList.add("hide");
	scroller();
	pop_div_holder.classList.add("hide");
	first.style.backgroundColor = "transparent";
	second.style.backgroundColor = "transparent";
	third.style.backgroundColor = "transparent";
	sixth.style.backgroundColor = "transparent";
	seventh.style.backgroundColor = "#ffffff23";
});
function scroller(){
	window.scrollTo(0,0);
}
/*popup div ends*/


/*arrow starts */
const arrow_btn = document.getElementById("arrow-up-btn");
function arrow_func_scroll() {
	if (window.scrollY >= 940) {
		arrow_btn.style.opacity = "1";
		arrow_btn.style.zIndex = "20";
	} else {
		arrow_btn.style.opacity = "0";
		arrow_btn.style.zIndex = "-1";
	}
}
arrow_func_scroll();
window.addEventListener("scroll", arrow_func_scroll);
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
window.onload = () => {
	scrollToTop();
	// localStorage.clear()
};
arrow_btn.addEventListener("click", scrollToTop);
/*arrow ends */

/*aside starts*/
const closeAside = document.getElementById("close_aside_fav");
const aside_conatiner = document.getElementById("aside-conatiner");
const view_aside_container = document.getElementById("view_aside_container");
closeAside.addEventListener("click",()=>{
	aside_conatiner.style.padding = "0";
	aside_conatiner.style.width = "0";
	setTimeout(()=>{
		aside_conatiner.style.display = "none";
	},300);
})
view_aside_container.addEventListener("click",()=>{
	aside_conatiner.style.display = "flex";
	if(window.innerWidth <= 449){
		setTimeout(()=>{
			aside_conatiner.style.padding = "40px 10px 10px 10px";
			aside_conatiner.style.width = "100%";
			aside_conatiner.style.maxWidth = "100%";
		},200);
	}
	if(window.innerWidth > 449){
		setTimeout(()=>{
			aside_conatiner.style.padding = "40px";
			aside_conatiner.style.width = "450px";
		},200);
	}
})
/*aside endss*/