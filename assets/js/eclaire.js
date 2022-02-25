let content = document.getElementById("content_lumiere");
let row_un = document.createElement("div");
row_un.classList.add("div_un");

let card_un = document.createElement("div");
let card_deux = document.createElement("div");
let card_trois = document.createElement("div");
card_un.classList.add("card");
card_deux.classList.add("card");
card_trois.classList.add("card");

let img_un = document.createElement("img");
let img_deux = document.createElement("img");
let img_trois = document.createElement("img");

let name_un = document.createElement("p");
let name_deux = document.createElement("p");
let name_trois = document.createElement("p");

let ref_un = document.createElement("p");
let ref_deux = document.createElement("p");
let ref_trois = document.createElement("p");

let price_un = document.createElement("p");
let price_deux = document.createElement("p");
let price_trois = document.createElement("p");


content.appendChild(row_un);
row_un.appendChild(card_un);
row_un.appendChild(card_deux);
row_un.appendChild(card_trois);

card_un.appendChild(img_un);
card_deux.appendChild(img_deux);
card_trois.appendChild(img_trois);

card_un.appendChild(name_un);
card_deux.appendChild(name_deux);
card_trois.appendChild(name_trois);

card_un.appendChild(ref_un);
card_deux.appendChild(ref_deux);
card_trois.appendChild(ref_trois);

card_un.appendChild(price_un);
card_deux.appendChild(price_deux);
card_trois.appendChild(price_trois);

img_un.src = eclairage.produits[0].imgurl;
name_un.textContent = eclairage.produits[0].nom;
ref_un.textContent = eclairage.produits[0].référence;
price_un.textContent = eclairage.produits[0].prix;

img_deux.src = eclairage.produits[1].imgurl;
name_deux.textContent = eclairage.produits[1].nom;
ref_deux.textContent = eclairage.produits[1].référence;
price_deux.textContent = eclairage.produits[1].prix;

img_trois.src = eclairage.produits[2].imgurl;
name_trois.textContent = eclairage.produits[2].nom;
ref_trois.textContent = eclairage.produits[2].référence;
price_trois.textContent = eclairage.produits[2].prix;