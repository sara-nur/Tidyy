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
let selectedMember = "Ado"; //Default
let selectedTeam = "Dev";

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

// Definiši funkciju za postavljanje dropdown-a
function setupDropdown(triggerElement, contentElement, callback) {
  triggerElement.addEventListener("click", () => {
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

// Prolazak kroz sve modale
document.querySelectorAll(".modal").forEach((modal) => {
  const modalType = modal.getAttribute("data-modal-type");

  // Prolazak kroz sve dropdown liste unutar svakog modala
  modal.querySelectorAll(".modal-dropdown-list").forEach((dropdown) => {
    const dropdownType = dropdown
      .querySelector(".p-dropdown-modal")
      .getAttribute("data-dropdown-type");
    const triggerElement = dropdown.querySelector(".p-dropdown-modal");
    const contentElement = dropdown.querySelector(
      ".modal-dropdown-list-content"
    );

    // Postavi dropdown za "assignedTeam"
    if (dropdownType === "assignedTeam") {
      setupDropdown(triggerElement, contentElement, (selectedText) => {
        if (modalType === "taskCreation") {
          selectedAssignedTeam = selectedText;
          triggerElement.innerText = selectedText + " ⌵";
        }
      });
    }
    // Postavi dropdown za "assignee" samo u modalima za kreiranje subtaskova
    else if (dropdownType === "assignee" && modalType === "subtaskCreation") {
      setupDropdown(triggerElement, contentElement, (selectedText) => {
        if (modalType === "subtaskCreation") {
          selectedAssignee = selectedText;
          triggerElement.innerText = selectedText + " ⌵";
        }
      });
    }
    //Members
    else if (dropdownType === "members" && modalType === "teamCreation") {
      setupDropdown(triggerElement, contentElement, (selectedText) => {
        if (modalType === "teamCreation") {
          selectedMember = selectedText;
          triggerElement.innerText = selectedText + " ⌵";
        }
      });
    }
    //Priority
    else if (dropdownType === "priority") {
      setupDropdown(triggerElement, contentElement, (selectedText) => {
        if (modalType === "taskCreation" || modalType === "subtaskCreation") {
          selectedPriority = selectedText;
          triggerElement.innerText = selectedText + " ⌵";
        }
      });
    }
  });
});


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
        alert("You successfully created an Organization");
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
        alert("You successfully created an Project");
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
        modal[i].getElementsByTagName("h2")[0].innerHTML ===
        "Add New Team Member"
      ) {
        const team = sessionStorage.getItem("team");
        let teamList = GetList("TeamList");
        const Username = Name.value.replace(" ", ".");
        let newObj = {
          name: Name.value,
          username: Username.toLowerCase(),
          email: Username.toLowerCase() + "@gmail.com",
        };
        for (let i = 0; i < teamList.length; i++) {
          if (teamList[i].teamName === team) {
            teamList[i].members.push(newObj);
          }
        }
        StringifyList("TeamList", teamList);
        alert("You successfully added an new Member");
      }
   
      if (
        modal[i].getElementsByTagName("h2")[0].innerHTML ===
        "Create New Team"
      ){
        let teamList = GetList("TeamList");
        console.log("teamList:",teamList);
        let newObj = {
          teamName: Name.value,
          members: [{name: selectedMember, username: selectedMember.replace(" ","."), email: selectedMember.replace(" ",".")+"@gmail.com"}]
        }
        teamList.push(newObj);
        StringifyList("TeamList", teamList);
        alert("You successfully created a new Team");
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
