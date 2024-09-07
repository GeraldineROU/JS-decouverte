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


let container = document.getElementById("container");
let buttonForAllItem = document.getElementById("buttonForAllItems");
let button = document.getElementById("button");
let checkBox = document.getElementById("rupture");


function createDomElement (dataText) {
    let element = document.createElement("p");
    element.textContent = dataText;
    return element;
}

function displayItemsInDom (array) {
    let isUnavailable = checkBox.checked;
    for (let item of array) {

        let itemNameDomElement = createDomElement("Nom : " + item.name);
        let itemTypeDomElement = createDomElement("Type : " + item.translatedType);
        let itemDescriptionDomElement = createDomElement("Description : " + item.description);
        let itemPriceDomElement = createDomElement("Prix : " + item.price);
        let itemQuantityDomElement = createDomElement("Quantité : " + item.quantity);

        if ((!isUnavailable && item.quantity > 0) || isUnavailable) {
            container.appendChild(itemNameDomElement);
            container.appendChild(itemTypeDomElement);
            container.appendChild(itemDescriptionDomElement);
            container.appendChild(itemPriceDomElement);
            container.appendChild(itemQuantityDomElement);

            let separator = document.createElement("hr");
            container.appendChild(separator);
        }
    }
}

function displayItemsByType () {
    let typedType = document.getElementById("rechercheParType").value;

    // window.alert("button clicked !");
    console.log(" recherche reçue : " + typedType);

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
}

buttonForAllItem.addEventListener("click", function () {
    container.replaceChildren();
    displayItemsInDom(jsonDatas);
});


button.addEventListener("click", displayItemsByType);















































