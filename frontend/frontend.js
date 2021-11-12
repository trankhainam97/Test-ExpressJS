// Initial page load - If someone visits a URL directly instead of clicking our links/buttons
const startingLocation = window.location.pathname

if (startingLocation == "/") renderHome()
if (startingLocation == "/menu") renderMenu()
if (startingLocation == "/about") renderAbout()
if (startingLocation == "/contact") renderContact()

// If someone clicks our buttons/links
document.querySelector("#home").addEventListener("click", function () {
  history.pushState({ page: "home" }, null, "/")
  renderHome()
})

document.querySelector("#menu").addEventListener("click", function () {
  history.pushState({ page: "menu" }, null, "menu")
  renderMenu()
})

document.querySelector("#about").addEventListener("click", function () {
  history.pushState({ page: "about" }, null, "about")
  renderAbout()
})

document.querySelector("#contact").addEventListener("click", function () {
  history.pushState({ page: "contact" }, null, "contact")
  renderContact()
})

// When someone uses the browser back/forward buttons
window.onpopstate = function (event) {
  if (event.state.page == "home") renderHome()
  if (event.state.page == "menu") renderMenu()
  if (event.state.page == "about") renderAbout()
  if (event.state.page == "contact") renderContact()
}

// The actual functions that modify the DOM
function renderHome() {
  document.querySelector("#content").innerHTML = `
  <h2>Homepage</h2>
  <p>This is the homepage.</p>
  `
}

function renderMenu() {
  document.querySelector("#content").innerHTML = `
  <h2>Menu</h2>
  <p>Here is our menu</p>
  `
}

function renderAbout() {
  document.querySelector("#content").innerHTML = `
  <h2>About Us</h2>
  <p>Restaurant in Sacramento</p>
  `
}

function renderContact() {
  document.querySelector("#content").innerHTML = `
  <h2>Contact Page</h2>
  <p>The contact page content will live here.</p>
  `
}