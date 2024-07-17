$(document).ready(function () {
  isSessionStorageAvailable();
  onClickAddItem();
  clearStorage();
});

const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

function isSessionStorageAvailable() {
  if (!sessionStorage) {
    console.log(
      "Sorry, your browser does not support Web storage. Try again with a better one"
    );
  } else {
    createStore(availableItems);
    displayCart();
  }
}

function createStore() {
  $("body").append("<h2>Available products:</h2>");
  $("body").append('<div class="listContainer"></div>');
  $(".listContainer").append("<ul></ul>");

  // loop through array and add available items into li
  for (let i = 0; i < availableItems.length; i++) {
    $("ul").append(`<li class="availableItems">${availableItems[i]}</li>`);
  }
}

// CREATE

// handles adding items to the cart
function addItemToCart(item) {
  cart = getCartFromStorage();
  console.log(cart);

  // does the item already exist? If yes, count the quantity
  if (cart.hasOwnProperty(item)) {
    cart[item] += 1;
  } else {
    cart[item] = 1;
  }

  // store the cart obj back in session storage as a string
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// handles click events for li elements, and adds to cart object
function onClickAddItem() {
  $(".availableItems").on("click", function () {
    var clickedItem = $(this).text();
    addItemToCart(clickedItem);
  });
}

// READ

// parses the cart string
function getCartFromStorage() {
  // get the cart data
  var cart = sessionStorage.getItem("cart");

  // return an empty obj if no data was found
  if (cart === null) {
    return {};
  }

  // parse the string and return an empty obj if parsing fails
  try {
    return JSON.parse(cart);
  } catch (error) {
    console.error("Error parsing cart data:", error);
    return {};
  }
}

function displayCart() {
  $("body").append("<h2>Your cart: </h2>");
  var cartContainer = $(".cartContainer");

  // check the length of the div
  if (cartContainer.length) {

    // cart div exists, clear its contents
    cartContainer.empty();
  } else {
    
    // cart div doesn't exist, create and append it
    cartContainer = $('<div class="cartContainer"></div>');
    $("body").append(cartContainer);
    $(".cartList").append('<li>Your cart is empty</li>');
  }
  updateCart();
}

// UPDATE

//
function updateCart() {
  $(".cartContainer").append('<ul class="cartList"></ul>');
}

function clearStorage() {
  sessionStorage.clear();
}
// DELETE
