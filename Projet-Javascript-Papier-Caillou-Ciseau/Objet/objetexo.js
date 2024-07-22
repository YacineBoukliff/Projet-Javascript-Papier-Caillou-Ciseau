// 8a et 8c

let basketballProduct = {
  name: "basketball",
  price: 2095,
  ["delivery-time"]: "3 days",
};
console.log(basketballProduct);

// 8b
basketballProduct.price += 500;

console.log(basketballProduct);

// Exo 8d
let Produit1 = {
  name: "basketball",
  price: 1095,
};

let Produit2 = {
  name: "basketball",
  price: 1595,
};

function comparePrice(product1, product2) {
  if (Produit1.price > Produit2.price) {
    return true;
  } else {
    return false;
  }
}

console.log(comparePrice(Produit1, Produit2));

// Exo 8e
let Produit3 = {
  name: "basketball",
  price: 1095,
};

let Produit4 = {
  name: "basketball",
  price: 1095,
};

function MemeProduits(product1, product2) {
  if (Produit3.price === Produit4.price && Produit3.name === Produit4.name) {
    return true;
  } else {
    return false;
  }
}
console.log(MemeProduits(Produit1, Produit2));

// Exo 8f
console.log("Bonne Journée".toLowerCase());

// Exo 8g
console.log("Travail".repeat(2));
