function showSectionById(id) {
  document.getElementById("donation-section").style.display = "none";
  document.getElementById("history-section").style.display = "none";
  document.getElementById(id).style.display = "block";
}

showSectionById("donation-section");

document.getElementById("donation-show-button")
  .addEventListener("click", function () {
    showSectionById("donation-section");
  });

document.getElementById("history-show-button")
  .addEventListener("click", function () {
    showSectionById("history-section");
  });
