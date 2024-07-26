const allTasks = document.getElementById("AllTasks");

const myTasks = document.getElementById("MyTasks");

const searchBar = document.getElementById("search");

const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");
const Team = "Dev";

const activeClass = "active-button";
const inactiveClass = "inactive-button";

let project;
let task;

function setButtonState(activeButton) {
  allTasks.classList.remove(activeClass);
  myTasks.classList.remove(activeClass);

  allTasks.classList.add(inactiveClass);
  myTasks.classList.add(inactiveClass);

  activeButton.classList.remove(inactiveClass);
  activeButton.classList.add(activeClass);
}

setButtonState(allTasks);

const cards = document.getElementsByClassName("card");

console.log(cards);

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i].getElementsByTagName("p")[2]);
}

if (allTasks != null && myTasks != null) {
  allTasks.addEventListener("click", (e) => {
    e.preventDefault();
    setButtonState(allTasks);
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
      if (
        cards[i].getElementsByTagName("p")[2].innerHTML !== `Assignee: ${User}`
      ) {
        cards[i].style.display = "block";
      }
    }
  });

  myTasks.addEventListener("click", (e) => {
    e.preventDefault();
    setButtonState(myTasks);
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
      if (
        cards[i].getElementsByTagName("p")[2].innerHTML !== `Assignee: ${User}`
      ) {
        console.log(`Asignee: ${User}`);
        cards[i].style.display = "none";
      }
    }
  });
}
