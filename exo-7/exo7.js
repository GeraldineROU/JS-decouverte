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

///////// A partir de l'étape  4//////////////////////////////////

////////// récupération des éléments du dom ///////////

let container = document.getElementById("container");
let buttonForAllItem = document.getElementById("buttonForAllItems");
let button = document.getElementById("button");
let checkBox = document.getElementById("rupture");
let byNameRadio = document.getElementById("byName");
let byPriceRadio = document.getElementById("byPrice");
let ascendingOrderRadio = document.getElementById("ascending");
let descendingOrderRadio = document.getElementById("descending");
let addItemButton = document.getElementById("addItemButton");

///////////déclaration des fonctions /////////////////////////////////

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

function displayItemsByNameAsc (array) {
    array.sort((a, b) => a.name.localeCompare(b.name));
    displayItemsInDom(array);
}

function displayItemsByNameDesc (array) {
    array.sort((b, a) => a.name.localeCompare(b.name));
    displayItemsInDom(array);
}

function displayItemsByPriceAsc (array) {
    array.sort((a, b) => a.price - b.price);
    displayItemsInDom(array);
}

function displayItemsByPriceDesc (array) {
    array.sort((a, b) => b.price - a.price);
    displayItemsInDom(array);
}

function displayItemsByType () {
    let typedType = document.getElementById("rechercheParType").value;
    let isByName = byNameRadio.checked;
    let isByPrice = byPriceRadio.checked;
    let isAscending = ascendingOrderRadio.checked;
    let isDescending = descendingOrderRadio.checked;

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
    if (isByName && isAscending) {
        displayItemsByNameAsc(typeArray);
    }
    if (isByName && isDescending) {
        displayItemsByNameDesc(typeArray);
    }
    if (isByPrice && isAscending) {
        displayItemsByPriceAsc(typeArray);
    }
    if (isByPrice && isDescending) {
        displayItemsByPriceDesc(typeArray);
    }
}

function addANewItemInCatalog () {
    let newItem = {};
    newItem.name = document.getElementById("name").value;
    newItem.translatedType = document.getElementById("translatedType").value;
    newItem.description = document.getElementById("description").value;
    newItem.price = document.getElementById("price").value;
    newItem.quantity = document.getElementById("quantity").value;
    jsonDatas.push(newItem);
}

//////////Appel des fonctions ///////////////////////////////

buttonForAllItem.addEventListener("click", function () {
    container.replaceChildren();
    let isByName = byNameRadio.checked;
    let isByPrice = byPriceRadio.checked;
    let isAscending = ascendingOrderRadio.checked;
    let isDescending = descendingOrderRadio.checked;
    if (isByName && isAscending) {
        displayItemsByNameAsc(jsonDatas);
    }
    if (isByName && isDescending) {
        displayItemsByNameDesc(jsonDatas);
    }
    if (isByPrice && isAscending) {
        displayItemsByPriceAsc(jsonDatas);
    }
    if (isByPrice && isDescending) {
        displayItemsByPriceDesc(jsonDatas);
    }
});


button.addEventListener("click", displayItemsByType);

addItemButton.addEventListener('click', addANewItemInCatalog);















































