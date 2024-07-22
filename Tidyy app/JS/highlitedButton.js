document.addEventListener("DOMContentLoaded", function () {
  const allTasksButton = document.getElementById("AllTasks");
  const myTasksButton = document.getElementById("MyTasks");

  allTasksButton.classList.add("highlightButton");

  allTasksButton.addEventListener("click", function () {
    allTasksButton.classList.add("highlightButton");
    myTasksButton.classList.remove("highlightButton");
  });

  myTasksButton.addEventListener("click", function () {
    myTasksButton.classList.add("highlightButton");
    allTasksButton.classList.remove("highlightButton");
  });
});
