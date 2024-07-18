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

  // Set or overwrite cookies with js-cookie
  if (firstNameValue) {
    Cookies.set('firstname', firstNameValue, { expires: 30 }); // Expires in 30 days
  }

  if (emailValue) {
    Cookies.set('email', emailValue, { expires: 30 }); // Expires in 30 days
  }
}

// Retrieves cookies
function getCookie(name) {
  return Cookies.get(name);
}

// Deletes cookies
function deleteCookies() {
  Cookies.remove('firstname');
  Cookies.remove('email');
}

// Deletes old cookies and shows form - ie, the user has logged out
function deleteCookiesAndShowForm() {
  deleteCookies();
  showForm();
}

// Shows either the login form, or a welcome message. Ie - if the user is logged in or not 
function showWelcomeMessageOrForm() {
  var whoIsLoggedIn = getCookie("firstname");

  // Meaning NO ONE is logged in
  if (whoIsLoggedIn === "" || !whoIsLoggedIn) {
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
