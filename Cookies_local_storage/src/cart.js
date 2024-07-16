$(document).ready(function() {
    isLocalStorageAvailable();
    availableItemsValidation(availableItems);
});

function isLocalStorageAvailable() {
    if (!localStorage) {
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
    localStorage.setItem(item, item);
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
    if (localStorage) {
        $("body").append(`<p>You previously had ${localStorage.length} items in your cart</p>`);
    }
}

// Deletes local storage 
function removeItemsFromCart() {
    if (localStorage) {
        localStorage.clear();
    }
}