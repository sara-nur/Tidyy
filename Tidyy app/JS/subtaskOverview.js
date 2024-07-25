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
                    <h3>${subtaskDetails.name}</h3>
                    <img src="../Img/virus.png" alt="" />
                </div>
                <p>Priority: ${subtaskDetails.priority}</p>
                <p>Progress: ${subtaskDetails.progress}%</p>
                <p>Assignee: ${subtaskDetails.asignee}</p>
                <p>Description: ${subtaskDetails.description} </p>
            </div>`;
  }
});
