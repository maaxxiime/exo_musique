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


let heart_un = document.createElement("img");
heart_un.classList.add("heart")
heart_un.src = "/assets/img/coeur.png"
card_un.appendChild(heart_un);

let heart_deux = document.createElement("img");
heart_deux.classList.add("heart")
heart_deux.src = "/assets/img/coeur.png"
card_deux.appendChild(heart_deux);

let heart_trois = document.createElement("img");
heart_trois.classList.add("heart")
heart_trois.src = "/assets/img/coeur.png"
card_trois.appendChild(heart_trois);

// img_heart.onclick = function hearts(){ alert('blah'); };

// function hearts() {
//     document.querySelector(img_heart).style.backgroundColor = "red";
//     // img_heart.classList.toggle("up");
// }

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






let row_deux = document.createElement("div");
row_deux.classList.add("div_deux");

let card_quatre = document.createElement("div");
let card_cinq = document.createElement("div");
let card_six = document.createElement("div");
card_quatre.classList.add("card");
card_cinq.classList.add("card");
card_six.classList.add("card");

let img_quatre = document.createElement("img");
let img_cinq = document.createElement("img");
let img_six = document.createElement("img");

let name_quatre = document.createElement("p");
let name_cinq = document.createElement("p");
let name_six = document.createElement("p");

let ref_quatre = document.createElement("p");
let ref_cinq = document.createElement("p");
let ref_six = document.createElement("p");

let price_quatre = document.createElement("p");
let price_cinq = document.createElement("p");
let price_six = document.createElement("p");


content.appendChild(row_deux);
row_deux.appendChild(card_quatre);
row_deux.appendChild(card_cinq);
row_deux.appendChild(card_six);

card_quatre.appendChild(img_quatre);
card_cinq.appendChild(img_cinq);
card_six.appendChild(img_six);

card_quatre.appendChild(name_quatre);
card_cinq.appendChild(name_cinq);
card_six.appendChild(name_six);

card_quatre.appendChild(ref_quatre);
card_cinq.appendChild(ref_cinq);
card_six.appendChild(ref_six);

card_quatre.appendChild(price_quatre);
card_cinq.appendChild(price_cinq);
card_six.appendChild(price_six);

img_quatre.src = eclairage.produits[3].imgurl;
name_quatre.textContent = eclairage.produits[3].nom;
ref_quatre.textContent = eclairage.produits[3].référence;
price_quatre.textContent = eclairage.produits[3].prix;

img_cinq.src = eclairage.produits[4].imgurl;
name_cinq.textContent = eclairage.produits[4].nom;
ref_cinq.textContent = eclairage.produits[4].référence;
price_cinq.textContent = eclairage.produits[4].prix;

img_six.src = eclairage.produits[5].imgurl;
name_six.textContent = eclairage.produits[5].nom;
ref_six.textContent = eclairage.produits[5].référence;
price_six.textContent = eclairage.produits[5].prix;







let row_trois = document.createElement("div");
row_trois.classList.add("div_trois");
let card_sept = document.createElement("div");
card_sept.classList.add("card");
let img_sept = document.createElement("img");
let name_sept = document.createElement("p");
let ref_sept = document.createElement("p");
let price_sept = document.createElement("p");
content.appendChild(row_trois);
row_trois.appendChild(card_sept);
card_sept.appendChild(img_sept);
card_sept.appendChild(name_sept);
card_sept.appendChild(ref_sept);
card_sept.appendChild(price_sept);

img_sept.src = eclairage.produits[6].imgurl;
name_sept.textContent = eclairage.produits[6].nom;
ref_sept.textContent = eclairage.produits[6].référence;
price_sept.textContent = eclairage.produits[6].prix;


let heart_quatre = document.createElement("img");
heart_quatre.classList.add("heart")
heart_quatre.src = "/assets/img/coeur.png"
card_quatre.appendChild(heart_quatre);

let heart_cinq = document.createElement("img");
heart_cinq.classList.add("heart")
heart_cinq.src = "/assets/img/coeur.png"
card_cinq.appendChild(heart_cinq);

let heart_six = document.createElement("img");
heart_six.classList.add("heart")
heart_six.src = "/assets/img/coeur.png"
card_six.appendChild(heart_six);

let heart_sept = document.createElement("img");
heart_sept.classList.add("heart")
heart_sept.src = "/assets/img/coeur.png"
card_sept.appendChild(heart_sept);