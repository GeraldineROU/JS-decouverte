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