document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (loggedInUser !== "sara.nur" && !localStorage.getItem("tourCompleted")) {
    introJs().start();

    introJs().oncomplete(function () {
      localStorage.setItem("tourCompleted", true);
    });

    introJs().onexit(function () {
      localStorage.setItem("tourCompleted", true);
    });
  }
});
