document.addEventListener("DOMContentLoaded", () => {
  const subtaskName = sessionStorage.getItem("subtask");

  function getTaskList() {
    const user = sessionStorage.getItem("loggedInUser");
    const org = sessionStorage.getItem("org");
    const proj = sessionStorage.getItem("proj");

    let taskList = [];

    if (user === "sara.nur") {
      if (org === "HCI") {
        if (proj === "Project #1") {
          taskList = JSON.parse(sessionStorage.getItem("Project1Tasks")) || [];
        } else {
          taskList = JSON.parse(sessionStorage.getItem("NewTasks")) || [];
        }
      } else {
        taskList = JSON.parse(sessionStorage.getItem("NewTasks")) || [];
      }
    } else {
      taskList = JSON.parse(sessionStorage.getItem("NewTasks")) || [];
    }

    return taskList;
  }

  const taskList = getTaskList();

  let subtaskDetails = null;
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    for (let j = 0; j < task.subtasks.length; j++) {
      if (task.subtasks[j].name === subtaskName) {
        subtaskDetails = task.subtasks[j];
        break;
      }
    }
    if (subtaskDetails) break;
  }

  if (subtaskDetails) {
    document.getElementById("banner-subtask").textContent = subtaskDetails.name;

    const cardLayout = document.querySelector(".card-layout");
    cardLayout.innerHTML = `
      <div class="subtask-overview-card">
        <div class="card-header">
          <h4>${subtaskDetails.name}</h4>
        </div>
        <p>Priority: ${subtaskDetails.priority}</p>
        <p>Progress: ${subtaskDetails.progress}%</p>
        <p>Assignee: ${subtaskDetails.asignee}</p>
        <p>Description: ${subtaskDetails.description}</p>
      </div>`;

    // Set initial values for the modal
    document.getElementById("description").value = subtaskDetails.description;

    const priorityModal = document.getElementById("priorityModal");
    const priorityContent = document.getElementById("priorityContent");
    priorityModal.textContent = `Priority ⌵ (${subtaskDetails.priority})`;

    priorityModal.addEventListener("click", () => {
      priorityContent.classList.toggle("show");
    });

    priorityContent.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        priorityModal.textContent = `Priority ⌵ (${event.target.textContent})`;
        priorityContent.classList.remove("show");
      }
    });

    const assigneeModal = document.getElementById("assigneeModal");
    const assigneeContent = document.getElementById("assigneeContent");
    assigneeModal.textContent = `Assignee ⌵ (${subtaskDetails.asignee})`;

    assigneeModal.addEventListener("click", () => {
      assigneeContent.classList.toggle("show");
    });

    assigneeContent.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        assigneeModal.textContent = `Assignee ⌵ (${event.target.textContent})`;
        assigneeContent.classList.remove("show");
      }
    });

    document.querySelector(".create-button").addEventListener("click", () => {
      const newPriority = priorityModal.textContent.match(/\((.*?)\)$/)[1];
      const newAssignee = assigneeModal.textContent.match(/\((.*?)\)$/)[1];
      const newDescription = document.getElementById("description").value;

      if (!newDescription) {
        document.querySelector(".error-message").style.display = "block";
        return;
      } else {
        document.querySelector(".error-message").style.display = "none";
      }

      subtaskDetails.priority = newPriority;
      subtaskDetails.asignee = newAssignee;
      subtaskDetails.description = newDescription;

      // Save the updated task list to session storage
      sessionStorage.setItem("Project1Tasks", JSON.stringify(taskList));

      // Update the card immediately
      cardLayout.innerHTML = `
        <div class="subtask-overview-card">
          <div class="card-header">
            <h4>${subtaskDetails.name}</h4>
            <img src="../Img/virus.png" alt="" />
          </div>
          <p>Priority: ${subtaskDetails.priority}</p>
          <p>Progress: ${subtaskDetails.progress}%</p>
          <p>Assignee: ${subtaskDetails.asignee}</p>
          <p>Description: ${subtaskDetails.description}</p>
        </div>`;

      // Close the modal
      document.getElementById("createModal").style.display = "none";
    });

    document.getElementById("CancelBtn").addEventListener("click", () => {
      document.getElementById("createModal").style.display = "none";
    });
  }
});

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
