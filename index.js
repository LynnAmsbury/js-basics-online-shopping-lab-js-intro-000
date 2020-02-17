var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObject = { itemName:`${item}`, itemPrice: Math.floor(Math.random()*100) }
 cart.push(itemObject);
  return itemObject.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    return `In your cart, you have ${itemObject.itemName[item]} at ${itemPrice[item]}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
