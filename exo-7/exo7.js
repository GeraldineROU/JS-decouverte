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

function displayAllItems () {
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
}

// displayAllItems();

///////// fonction pour créer un élément DOM en reprenant les entrées de jsonDatas

function createDomElement (dataText) {
    let element = document.createElement("p");
    element.textContent = dataText;
    return element;
}


////////////////Au clic sur le bouton "rechercher", afficher les articles du type entré dans le champs texte /////

////// récupérer le bouton dans le dom
let button = document.getElementById("button")


////////faire une fonction A qui permet d'afficher les articles associés à un type

function displayItemsByType(typeSearched) {
        for (let item of jsonDatas) {
            if (item.translatedType === typeSearched) {
                let itemNameDomElement = createDomElement("Nom : " + item.name);
                let itemTypeDomElement = createDomElement("Type : " + item.translatedType);
                let itemDescriptionDomElement = createDomElement("Description : " + item.description);
                let itemPriceDomElement = createDomElement("Prix : " + item.price);
                let itemQuantityDomElement = createDomElement("Quantité : " + item.quantity);

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

////// au clic du bouton on récupère le texte saisi dans le champs texte
button.addEventListener("click", function () {
    let typedType = document.getElementById("rechercheParType").value;
    // window.alert(typedType);
    displayItemsByType(typedType);
});


/////appeler la fonction A avec le retour de la fonction B en paramètres











































