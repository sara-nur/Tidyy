const createButton = document.querySelectorAll(".create-btn");
const modal = document.querySelectorAll(".modal");
const cancel = document.querySelectorAll(".cancel-button");
const createNew = document.querySelectorAll(".create-button");
const User = sessionStorage.getItem("loggedInUser");
const org = sessionStorage.getItem("org");
const proj = sessionStorage.getItem("proj");
const task = sessionStorage.getItem("task");

let selectedPriority = "Medium"; // Default
let selectedAssignee = "sara.nur"; // Default
let selectedAssignedTeam = "Dev"; //Default

function GetList(name) {
  let newList = sessionStorage.getItem(name);
  console.log(newList);
  return JSON.parse(newList);
}

function StringifyList(name, list) {
  console.log(list);
  let newList = JSON.stringify(list);
  console.log(newList);
  sessionStorage.setItem(name, newList);
}

// Dodavanje funkcionalnosti za prikazivanje padajućih menija i odabir opcija
function setupDropdown(pElement, contentElement, callback) {
  pElement.addEventListener("click", () => {
    contentElement.classList.toggle("show");
  });
  contentElement.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const selectedText = item.innerText;
      callback(selectedText);
      contentElement.classList.remove("show");
    });
  });
}
// Postavljanje prioritet i assignee dropdown funkcionalnosti
setupDropdown(
  document.getElementById("priorityModal"),
  document.getElementById("priorityContent"),
  (selectedText) => {
    selectedPriority = selectedText;
    document.getElementById("priorityModal").innerText = selectedText + " ⌵";
  }
);

/*
setupDropdown(
  document.getElementById("assigneeModal"),
  document.getElementById("assigneeContent"),
  (selectedText) => {
    selectedAssignee = selectedText;
    document.getElementById("assigneeModal").innerText = selectedText + " ⌵";
  }
);
*/
setupDropdown(
  document.getElementById("assignedTeamModal"),
  document.getElementById("assignedTeamContent"),
  (selectedText) => {
    selectedAssignedTeam = selectedText;
    document.getElementById("assignedTeamModal").innerText =
      selectedText + " ⌵";
  }
);

for (let i = 0; i < createButton.length; i++) {
  createButton[i].addEventListener("click", (e) => {
    e.preventDefault();
    modal[i].style.display = "block";
    cancel[i].addEventListener("click", (e) => {
      e.preventDefault();
      modal[i].style.display = "none";
    });
    createNew[i].addEventListener("click", (e) => {
      e.preventDefault();
      const Name = document.getElementById("Name");

      if (
        modal[i].getElementsByTagName("h2")[0].innerHTML ===
        "Create New Organization"
      ) {
        if (User === "sara.nur") {
          let newList = GetList("saraOrg");
          newList.push(Name.value);
          StringifyList("saraOrg", newList);
        } else {
          let newList = GetList("newOrg");
          newList.push(Name.value);
          StringifyList("newOrg", newList);
        }
      }

      if (
        modal[i].getElementsByTagName("h2")[0].innerHTML ===
        "Create New Project"
      ) {
        if (User === "sara.nur" && org === "HCI") {
          let newList = GetList("HCIProject");
          newList.push(Name.value);
          StringifyList("HCIProject", newList);
        } else {
          let newList = GetList("NewProject");
          newList.push(Name.value);
          StringifyList("NewProject", newList);
        }
      }

      if (
        modal[i].getElementsByTagName("h2")[0].innerHTML === "Create New Task"
      ) {
        if (User === "sara.nur" && org === "HCI" && proj === "Project #1") {
          let newList = GetList("Project1Tasks");
          let newObj = {
            name: Name.value,
            progress: 0,
            priority: selectedPriority,
            asigneedTeam: selectedAssignedTeam,
            subtasks: [],
          }; //To do
          newList.push(newObj);
          StringifyList("Project1Tasks", newList);
        } else {
          let newList = GetList("NewTasks");
          let newObj = {
            name: Name.value,
            progress: 0,
            priority: selectedPriority,
            asigneedTeam: selectedAssignedTeam,
            subtasks: [],
          }; //To do
          newList.push(newObj);
          StringifyList("NewTasks", newList);
        }
      }

      if (
        modal[i].getElementsByTagName("h2")[0].innerHTML ===
        "Create New Subtask"
      ) {
        if (User === "sara.nur" && org === "HCI" && proj === "Project #1") {
          let newList = GetList("Project1Tasks");
          let newObj = {
            name: Name.value,
            progress: 0,
            priority: selectedPriority,
            asignee: selectedAssignee,
            finished: false,
          }; //To do
          for (let i = 0; i < newList.length; i++) {
            if (newList[i].name === task) {
              newList[i].subtasks.push(newObj);
            }
          }
          StringifyList("Project1Tasks", newList);
        } else {
          let newList = GetList("NewTasks");
          let newObj = {
            name: Name.value,
            progress: 0,
            priority: selectedPriority,
            assignee: selectedAssignee,
            finished: false,
          }; //To do
          for (let i = 0; i < newList.length; i++) {
            if (newList[i].name === task) {
              newList[i].subtasks.push(newObj);
            }
          }
          StringifyList("NewTasks", newList);
        }
      }

      if (
        modal[i].getElementsByTagName("h2")[0].innerHTML === "Add New Member"
      ) {
      }

      modal[i].style.display = "none";
      console.log(Name.value);
      window.location.reload();
    });
  });
}

// CSS for showing dropdown content
const style = document.createElement("style");
style.innerHTML = `
  .modal-dropdown-list-content {
    display: none;
  }
  .modal-dropdown-list-content.show {
    display: block;
  }
`;
document.head.appendChild(style);
