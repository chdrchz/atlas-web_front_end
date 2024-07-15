$(document).ready(function () {
  $("#loginButton").on("click", setCookies);
  $("#showCookiesButton").on("click", showCookies);
});

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

function getCookie(name) {
  var cookies = document.cookie.split(';'); // Splits cookies into an array

  // Iterate over array and decode the cookie
  for (var i = 0; i < cookies.length; i++) {

    // Trim whitespace and split name= and name. ie: name=Savanna will be 'name', 'savanna'
    var cookiePair = cookies[i].trim().split('=');

    // If the key equals name, then decode the corresponding value to get yo cookie
    if (decodeURIComponent(cookiePair[0]) === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  // No cookie was found, return empty string
  return "";
}

function showCookies() {
  var email = getCookie("email");
  var firstName = getCookie("firstname");
  $('body').append(`<p>Email: ${email} - Firstname: ${firstName}</p>`);
}
