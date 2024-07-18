$(document).ready(function() {
    isSessionStorageAvailable();
    availableItemsValidation(availableItems);
});

function isSessionStorageAvailable() {
    if (!sessionStorage) {
        alert('Sorry, your browser does not support Web storage. Try again with a better one.');
    } else {
        createStore(availableItems);
        displayCart();
    }
}

// Available Items for shopping cart
const availableItems = [
    "Shampoo",
    "Soap",
    "Sponge",
    "Water"
];

// Data validation on available items 
function availableItemsValidation(availableItems) {
    for (let i = 0; i < availableItems.length; i++) {
        if (typeof(availableItems[i]) !== 'string') {
            console.log("Available items must all be valid strings")
        } else {
            console.log("All items are valid strings");
        }
    }
}

// Adds an item to local storage
function addItemToCart(item) {
    sessionStorage.setItem(item, item);
    console.log(item);
}

// Creates a store with available items 
function createStore(availableItems) {
    $("body").append(`<ul class="unorderedList"></ul>`);
    for (let i = 0; i < availableItems.length; i++) {
      const listItem = `<li class="availableItem">${availableItems[i]}</li>`;
      $("ul").append(listItem);
      $("ul li").on('click', function(){
        const clickedItem = $(this).text(); 
        addItemToCart(clickedItem); 
      });
    }
  }

// Displays a cart
function displayCart() {
    if (sessionStorage) {
        $("body").append(`<p>You previously had ${sessionStorage.length} items in your cart</p>`);
    }
}

// Deletes local storage 
function removeItemsFromCart() {
    if (sessionStorage) {
        sessionStorage.clear();
    }
}