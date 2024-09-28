function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

document
  .getElementById("donation-show-button")
  .addEventListener("click", function () {
    showSectionById("donation-show-button");
  });
