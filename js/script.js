const toggleButton = document.getElementById("menu_icon");
const myDiv = document.getElementById("navbar");

myDiv.style.display = "none";

toggleButton.addEventListener("click", function() {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
});

myDiv.addEventListener("click", function() {
    myDiv.style.display = "none";
  });