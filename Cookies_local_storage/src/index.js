$(document).ready(function () {
  $("#loginButton").on("click", setCookies);
  $("#showCookiesButton").on("click", showCookies);
});

function setCookies() {
  var firstNameValue = $("#firstname").val();
  var emailValue = $("#email").val();

  if (firstNameValue) {
    document.cookie =
      "firstname=" + encodeURIComponent(firstNameValue) + "; path=/";
  } else {
    console.log("No value entered in the firstname input field.");
  }

  if (emailValue) {
    document.cookie = "email=" + encodeURIComponent(emailValue) + "; path=/";
  } else {
    console.log("No value entered in the email input field.");
  }
}

function showCookies() {
  var cookies = $("<p>").html(`<p>Cookies: ${document.cookie}</p>`);
  $("body").append(cookies);
}
