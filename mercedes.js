/*piston decleration starts*/
const pistoncardContainer = document.getElementById(
	"Engine-Components-Pistons"
);
const Engine_Components_Crankshafts_Container = document.getElementById(
	"Engine-Components-Crankshafts"
);
const Engine_Components_Cylinder_HeadsContainer = document.getElementById(
	"Engine-Components-Cylinder-Heads"
);
const Engine_Components_Turbochargers_container = document.getElementById(
	"Engine-Components-Turbochargers"
);
const PistonArray = [];
const CrankshaftsArray = [];
const Cylinder_HeadsArray = [];
const TurbochargersArray = [];
/*piston decleratione ends*/

/*break decleratione starts*/
const brakePadsContainer = document.getElementById("Brake-Systems-Brake-Pads");
const brakeRotorsContainer = document.getElementById(
	"Brake-Systems-Brake-Rotors"
);
const brakeCalipersContainer = document.getElementById(
	"Brake-Systems-Brake-Calipers"
);
const brakePadsArray = [];
const brakeRotorsArray = [];
const brakeCalipersArray = [];
/*break decleratione ends*/

/*Electrical Components starts*/
const alternatorsContainer = document.getElementById(
	"Electrical-Components-Alternators"
);
const startersContainer = document.getElementById(
	"Electrical-Components-Starters"
);
const wiringHarnessesContainer = document.getElementById(
	"Electrical-Components-Wiring-Harnesses"
);
const alternatorsArray = [];
const startersArray = [];
const wiringHarnessesArray = [];
/*Electrical Components ends*/

/*body parts starts*/
const bumpersContainer = document.getElementById("Body-Parts-Bumpers");
const mirrorsContainer = document.getElementById("Body-Parts-Mirrors");
const grillesContainer = document.getElementById("Body-Parts-Grilles");
const bumpersArray = [];
const mirrorsArray = [];
const grillesArray = [];
/*body parts ends*/

/*Accessories starts*/
const accessoriesLightsContainer =
	document.getElementById("Accessories-Lights");
const airHornsContainer = document.getElementById("Accessories-Air-Horns");
const floorMatsContainer = document.getElementById("Accessories-Floor-Mats");
const accessoriesLightsArray = [];
const airHornsArray = [];
const floorMatsArray = [];
/*Accessories ends*/

/*category buttons starts*/
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
/*category buttons ends*/

/*other decleration starts*/
const SearchNameInp = document.getElementById("SearchName");
let mode = "Piston";
const favContainer = document.getElementById("fav-container");
let favArray = localStorage.getItem("favArrayStorage") ? JSON.parse(localStorage.getItem("favArrayStorage")) : [];
let remainCardsText = document.getElementById("remainCards");
let totalPriceContainer = document.getElementById("totalPrice");
let totalPrice = 0;
const notFound = document.getElementById("notFound");
/*other decleration ends*/

document.addEventListener("DOMContentLoaded", () => {
	fetchAndImplement("pistons", PistonArray, pistoncardContainer);
	fetchAndImplement("crankshafts",CrankshaftsArray,Engine_Components_Crankshafts_Container);
	fetchAndImplement("Cylinder-Heads",Cylinder_HeadsArray,Engine_Components_Cylinder_HeadsContainer);
	fetchAndImplement("Turbochargers",TurbochargersArray,Engine_Components_Turbochargers_container);
	fetchAndImplement("brakePads", brakePadsArray, brakePadsContainer);
	fetchAndImplement("brakeRotors", brakeRotorsArray, brakeRotorsContainer);
	fetchAndImplement("brakeCalipers",brakeCalipersArray,brakeCalipersContainer);
	fetchAndImplement("alternators", alternatorsArray, alternatorsContainer);
	fetchAndImplement("starters", startersArray, startersContainer);
	fetchAndImplement("wiringHarnesses",wiringHarnessesArray,wiringHarnessesContainer);
	fetchAndImplement("bumpers", bumpersArray, bumpersContainer);
	fetchAndImplement("mirrors", mirrorsArray, mirrorsContainer);
	fetchAndImplement("grilles", grillesArray, grillesContainer);
	fetchAndImplement("accessoriesLights",accessoriesLightsArray,accessoriesLightsContainer);
	fetchAndImplement("airHorns", airHornsArray, airHornsContainer);
	fetchAndImplement("floorMats", floorMatsArray, floorMatsContainer);
});

/*Engine Components starts*/
function fetchAndImplement(componentName, array, container) {
	fetch(`Engine-Components-${componentName}.json`)
		.then((response) => response.json())
		.then((data) => {
			array.length = 0;
			data.forEach((item) => array.push(item));
			shuffleArray(array);
			implementComponent(array, container);
		})

		.catch((error) =>
			console.error(`Error fetching ${componentName} JSON data:`, error)
		);
}

/*shuffle the arrays starts*/
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
/*shuffle the arrays ends */

function implementComponent(array, container) {
	container.innerHTML = "";
	array.forEach((item) => (container.innerHTML += cardHTMLTemplate(item)));
}
/*Engine Components ends*/

/*breakSystem starts*/
first.onclick = () => {
	mode = "Piston";
	SearchNameInp.value = "";
};

second.onclick = () => {
	mode = "Brake Systems";
	SearchNameInp.value = "";
};

third.onclick = () => {
	mode = "Engine Components";
	SearchNameInp.value = "";
};

sixth.onclick = () => {
	mode = "Body Parts";
	SearchNameInp.value = "";
};

seventh.onclick = () => {
	mode = "Accessories";
	SearchNameInp.value = "";
};

/*breakSystem ends*/

/*search Starts*/
function SearchByName() {
	const inputValue = SearchNameInp.value.toLowerCase();
	let combinedArray = [];
	let htmlStrings = {};
	let containers = {};

	if (mode === "Piston") {
		combinedArray = [
			...PistonArray,
			...CrankshaftsArray,
			...Cylinder_HeadsArray,
			...TurbochargersArray,
		];
		containers = {
			piston: pistoncardContainer,
			crankshaft: Engine_Components_Crankshafts_Container,
			CylinderHead: Engine_Components_Cylinder_HeadsContainer,
			turboChangers: Engine_Components_Turbochargers_container,
		};

		htmlStrings = {
			piston: "",
			crankshaft: "",
			CylinderHead: "",
			turboChangers: "",
		};
	} else if (mode === "Brake Systems") {
		combinedArray = [
			...brakePadsArray,
			...brakeRotorsArray,
			...brakeCalipersArray,
		];
		containers = {
			brakePads: brakePadsContainer,
			brakeRotors: brakeRotorsContainer,
			brakeCalipers: brakeCalipersContainer,
		};
		htmlStrings = {
			brakePads: "",
			brakeRotors: "",
			brakeCalipers: "",
		};
	} else if (mode == "Engine Components") {
		combinedArray = [
			...alternatorsArray,
			...startersArray,
			...wiringHarnessesArray,
		];
		console.log(combinedArray);
		containers = {
			alternator: alternatorsContainer,
			starter: startersContainer,
			wiringHarness: wiringHarnessesContainer,
		};
		htmlStrings = {
			alternator: "",
			starter: "",
			wiringHarness: "",
		};
	} else if (mode == "Body Parts") {
		combinedArray = [...bumpersArray, ...mirrorsArray, ...grillesArray];
		console.log(combinedArray);
		containers = {
			bumpers: bumpersContainer,
			mirrors: mirrorsContainer,
			grilles: grillesContainer,
		};
		htmlStrings = {
			bumpers: "",
			mirrors: "",
			grilles: "",
		};
	} else if (mode == "Accessories") {
		combinedArray = [
			...accessoriesLightsArray,
			...airHornsArray,
			...floorMatsArray,
		];
		console.log(combinedArray);
		containers = {
			accessoriesLights: accessoriesLightsContainer,
			airHorns: airHornsContainer,
			floorMats: floorMatsContainer,
		};
		htmlStrings = {
			accessoriesLights: "",
			airHorns: "",
			floorMats: "",
		};
	}

	combinedArray.forEach((item) => {
		if (item.name.toLowerCase().includes(inputValue)) {
			if (containers[item.type]) {
				htmlStrings[item.type] += cardHTMLTemplate(item);
			}
		}
	});
	Object.keys(containers).forEach((type) => {
		containers[type].innerHTML = htmlStrings[type] || "No Data Found";
	});
}
/*search ends*/
SearchNameInp.addEventListener("keyup", () => {
	SearchByName();
	if (event.key === "Enter") {
		SearchByName();
	}
});
/*implements starts*/
function cardHTMLTemplate(item) {
	return `
    <div class="card" id="Pistons-card-${item.type + item.id}">
        <img src="${item.image}" loading="lazy" alt="${item.name}"/>
        <div class="card-body">
            <div class="row">
                <div class="card-title">
                    <h4>${item.name}</h4>
                    <h4>${item.size}</h4>
                    <h3>${item.price}</h3>
                </div>
                <div class="view-btn">
					<i id="${item.type + item.id}" onclick='favContainerFunc(this.id, ${JSON.stringify(item)})' class="material-symbols-outlined">favorite</i>
				</div>
            </div>
            <hr />
        </div>
    </div>
    `;
}


function favContainerFunc(id,item){
	let favBtn = document.getElementById(`${item.type + item.id}`);
	let exists = false;

	for(let i = 0; i < favArray.length; i++) {
		if(id === favArray[i].type + favArray[i].id) {
			exists = true;
			break;
		}
	}
	if (!exists && favArray.length <= 39) {
		favArray.push(item);
		favBtn.classList.add("toggleColorFav");
		totalPrice += parseFloat(item.price.replace(/[^\d.-]/g, ''));
		totalPriceContainer.innerHTML = `EGP ${totalPrice}`;
		localStorage.setItem("favArrayStorage", JSON.stringify(favArray));
		favContainer.innerHTML += favImplement(item);
		remainCards.innerText = `${favArray.length}/40`;
		localStorage.setItem("remainCardsStorage", JSON.stringify(remainCards.innerText));
	}else if(favArray.length == 40){
		alert("You reached cart items");
	}
}
function favImplement(item){
	return `
		<div class="Fav-list-item p-3 relative">
			<img src="${item.image}" alt="${item.image}" class="Fav-Image" id="searchImageResult">
			<p class="FavText">${item.name}</p>
			<p class="FavPrice text-red-600 font-bold">${item.price}</p>
			<i id="close-${item.type + item.id}" onclick='removeFav(this.id, ${JSON.stringify(item)})' class="material-symbols-outlined absolute right-1 top-1 cursor-pointer text-black font-bold select-none">close</i>
		</div>
	`
}

function removeFav(id,item){
	let favBtn = document.getElementById(item.type + item.id);
	// console.log(favBtn)

	const index = favArray.findIndex(fav => "close-"+fav.type + fav.id === id);
    if (index !== -1) {
        favArray.splice(index, 1);
		totalPrice -= parseFloat(item.price.replace(/[^\d.-]/g, ''));
		totalPriceContainer.innerHTML = `EGP ${totalPrice}`;
		favBtn.classList.remove("toggleColorFav");
		localStorage.setItem("favArrayStorage", JSON.stringify(favArray));
		remainCards.innerText = `${favArray.length}/40`;
		localStorage.setItem("remainCardsStorage", JSON.stringify(remainCards.innerText));
		implementAfterRemove();
    } else {
        alert("Item not found.");
	}
}
function implementAfterRemove(){
	favContainer.innerHTML = "";
	favArray.forEach(index =>{
		favContainer.innerHTML += favImplement(index);
	})
	
};

function initializeFavorites() {
	favContainer.innerHTML = "";
    favArray.forEach(item => {
        favContainer.innerHTML += favImplement(item);
		totalPrice += parseFloat(item.price.replace(/[^\d.-]/g, ''));
		totalPriceContainer.innerHTML = `EGP ${totalPrice}`;
		let favBtn = document.getElementById(`${item.type + item.id}`);
		if(favBtn){
			favBtn.classList.add("toggleColorFav");
		}
    });
	if(favArray !== ""){
		remainCards.innerText = `${favArray.length}/40`;
	}
}
setTimeout(()=>{
	initializeFavorites();
},2000);
