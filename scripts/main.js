// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

// Store a reference to the <img> element in myImage
const myImage = document.querySelector("img");

// Add click event listener to the image
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    // img source: https://www.reddit.com/r/firefox/comments/ihlxxa/firefox_history_from_2002_to_2019_icon_in_pixel/
    myImage.setAttribute("src", "images/pixelated-firefox-icon.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

// Store a reference to the <button> element in myButton
let myButton = document.querySelector("button");

// Prompt user for their name and update heading
function setUserName() {
  const myName = prompt("Please enter your name.");
  // If user cancels or provides blank name, prompt again
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

// If name not in local storage, prompt for name
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// When button is clicked, allow user to change name
myButton.addEventListener("click", () => {
  setUserName();
});