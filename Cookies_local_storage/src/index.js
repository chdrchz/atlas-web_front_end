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

function showCookies() {
  var cookies = $("<p>").html(`<p>Cookies: ${document.cookie}</p>`);
  $("body").append(cookies);
}