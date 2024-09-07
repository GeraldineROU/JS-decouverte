console.log("exo-7");

console.log(jsonDatas);


////////afficher chaque article dans la console///////////////////////

function displayAllItemsInConsole () {
    jsonDatas.forEach((item) => {
        console.log("Article :");
        Object.entries(item).forEach((entry) => {
            console.log(entry[0] + " : " + entry[1]);
        })
        // for (let key in item) {
        //     console.log(key + " : " + item[key]);
        // }
        console.log("-----------------------------------------");
    });
}

displayAllItemsInConsole();

/////////// créer un tableau de traduction des "types" //////////////

const typeTranslation = {
    car : "voiture",
    house : "maison",
    game : "jeu",
    videoGame : "jeu vidéo",
    show : "spectacle"
}

////////////// Ajouter une nouvelle clé aux objets existants pour stocker le typer traduit, sans modifier datas.js ////

jsonDatas.forEach((item) => {
    item.translatedType = typeTranslation[item.type];
});

displayAllItemsInConsole();

///////// Créer l'affichage de tous les article dans la page html //////////////////////////////////

// Main code

// Get container DOM element
let container = document.getElementById("container");

function displayItemsInDom (array) {
    for (let item of array) {

        // Create item DOM element from jsonData
        // explication : prendre la description JS de l'élément et le transformer en element HTML

        let itemNameDomElement = createDomElement("Nom : " + item.name);
        let itemTypeDomElement = createDomElement("Type : " + item.translatedType);
        let itemDescriptionDomElement = createDomElement("Description : " + item.description);
        let itemPriceDomElement = createDomElement("Prix : " + item.price);
        let itemQuantityDomElement = createDomElement("Quantité : " + item.quantity);

        // append l'élement créé à ton container

        container.appendChild(itemNameDomElement);
        container.appendChild(itemTypeDomElement);
        container.appendChild(itemDescriptionDomElement);
        container.appendChild(itemPriceDomElement);
        container.appendChild(itemQuantityDomElement);

        let separator = document.createElement("hr");
        container.appendChild(separator);

    }
}

let buttonForAllItem = document.getElementById("buttonForAllItems");
buttonForAllItem.addEventListener("click", function () {
    container.replaceChildren();
    displayItemsInDom(jsonDatas);
});


///////// fonction pour créer un élément DOM en reprenant les entrées de jsonDatas

function createDomElement (dataText) {
    let element = document.createElement("p");
    element.textContent = dataText;
    return element;
}


////////////////Au clic sur le bouton "rechercher", afficher les articles du type entré dans le champs texte /////

////// récupérer le bouton dans le dom
let button = document.getElementById("button");

////// au clic du bouton on récupère le texte saisi dans le champs texte
////////faire une fonction A qui permet d'afficher les articles associés à un type
let typedType = "";
button.addEventListener("click", function () {
    typedType = document.getElementById("rechercheParType").value;
    // window.alert("button clicked !");
    console.log(" recherche reçue : " + typedType);
    //// création d'un nouveau tableau pour récupérer les items à afficher

    let typeArray = [];

    console.log('afficher les items par type recherché');

    jsonDatas.forEach((item)=> {
        if (item.translatedType === typedType) {
            typeArray.push(item);
            console.log(item);
        }
    });
    container.replaceChildren();
    displayItemsInDom(typeArray);
});

////////// Ajouter une checkbox pour afficher ou non les articles en rupture de stock














































