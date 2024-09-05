console.log("exo-7");

console.log(jsonDatas);


////////afficher chaque article dans la console///////////////////////

function displayAllItems () {
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

displayAllItems();

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

displayAllItems();

///////// Créer l'affichage de tous les article dans la page html //////////////////////////////////

// Main code

// Get container DOM element
let container = document.getElementById("container");

for (let item of jsonDatas) {





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

///////// fonction pour créer un élément DOM en reprenant les entrées de jsonDatas

function createDomElement (dataText) {
    let element = document.createElement("p");
    element.textContent = dataText;
    return element;
}











































