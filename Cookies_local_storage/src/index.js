$(document).ready(function () {
  showWelcomeMessageOrForm();
  $("#loginButton").on("click", setCookies);
  $("#showCookiesButton").on("click", showCookies);
});

// Shows the login form 
function showForm() {
  $("#welcomeMessage").hide();
}

// Hides the login form 
function hideForm() {
  $("form").hide();
}

// Sets cookies
function setCookies() {
  var firstNameValue = $("#firstname").val();
  var emailValue = $("#email").val();

  // Expiration date
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // Expires in 30 days
  var expires = "expires=" + expirationDate.toUTCString() + "; path=/";

  // Set or overwrite cookies
  if (firstNameValue) {
    document.cookie = "firstname=" + encodeURIComponent(firstNameValue) + "; " + expires;
  } else {
    console.log("No value entered in the firstname input field.");
  }

  if (emailValue) {
    document.cookie = "email=" + encodeURIComponent(emailValue) + "; " + expires;
  } else {
    console.log("No value entered in the email input field.");
  }
}

// Retrieves cookies
function getCookie(name) {
  var cookies = document.cookie.split(';'); // Splits cookies into an array

  // Iterate over array and decode the cookie
  for (var i = 0; i < cookies.length; i++) {

    // Trim whitespace and split name= and name. ie: name=Savanna will be 'firstname', 'savanna'
    var cookiePair = cookies[i].trim().split('=');

    // If the key equals name, then decode the corresponding value to get yo cookie
    if (decodeURIComponent(cookiePair[0]) === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  // No cookie was found, return empty string
  return "";
}

// Deletes old cookies and shows form - ie, the user has logged out
function deleteCookiesAndShowForm() {
  // "remove" the firstname cookie
  document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  // "remove" the email cookie
  document.cookie = "email=; expires=Thur, 01 Jan 1970 00:00:00 UTC; path=/";

  showForm();
}

// Shows either the login form, or a welcome message. Ie - if the user is logged in or not 
function showWelcomeMessageOrForm() {
  var whoIsLoggedIn = getCookie("firstname");

  // Meaning NO ONE is logged in
  if (whoIsLoggedIn === "") {
    showForm();
  } else {
    hideForm();
    $("body").html(`<h1 id="welcomeMessage">Welcome: ${whoIsLoggedIn} <a id="logout"><i>(logout)</i></a></h1>`);
    $("#logout").on("click", function (event) {
      event.preventDefault();
      deleteCookiesAndShowForm();
      handleReload();
    })
  }
}

// Refreshes page after calling deleteCookiesAndShowForm
function handleReload() {
  window.location.href = window.location.href;
}

// Displays cokies for visual sake
function showCookies() {
  var email = getCookie("email");
  var firstName = getCookie("firstname");
  $('body').append(`<p>Email: ${email} - Firstname: ${firstName}</p>`);
}
