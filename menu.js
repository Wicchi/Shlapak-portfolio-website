// Select the button element by its id
const menuBtn = document.getElementById("menuBtn");

// Add an event listener for the "click" event
menuBtn.addEventListener("click", function() {
  // Select the menu element
  const menu = document.getElementById("navbarNav");
  
  // Toggle the menu's display between "none" and "block"
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});


