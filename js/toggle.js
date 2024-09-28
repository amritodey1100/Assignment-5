function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
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
