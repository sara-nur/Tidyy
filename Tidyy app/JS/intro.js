document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("tourCompleted")) {
    introJs().start();

    introJs().oncomplete(function () {
      localStorage.setItem("tourCompleted", true);
    });

    introJs().onexit(function () {
      localStorage.setItem("tourCompleted", true);
    });
  }
});


