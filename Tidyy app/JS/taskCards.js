let taskList = [{}];
const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");

function StringifyList(name, list) {
  let newList = JSON.stringify(list);

  sessionStorage.setItem(name, newList);
}

function GetList(name) {
  let newList = sessionStorage.getItem(name);

  return JSON.parse(newList);
}

if (User === "sara.nur") {
  if (org === "HCI") {
    if (proj === "Project #1") {
      ////////// MJENJAJ
      taskList = GetList("Project1Tasks");
    } else {
      taskList = GetList("NewTasks");
    }
  } else {
    taskList = GetList("NewTasks");
  }
} else {
  taskList = GetList("NewTasks");
}

const toDO = document.getElementById("to-do-column");
const inProgress = document.getElementById("in-progress-column");
const review = document.getElementById("code-review");
const done = document.getElementById("done-column");

function createCardHTML(task) {
  return `
  <div class="card" data-id=${task.id}>
    <div class="card-header">
        <h3>${task.name}</h3>
      </div>
        <p>Priority: ${task.priority}</p>
        <p>Progress: ${task.progress}%</p>
        <p>Asigneed Team: ${task.asigneedTeam}</p>
    </div>`;
}

for (let i = 0; i < taskList.length; i++) {
  if (taskList[i].progress === 0) {
    toDO.innerHTML += createCardHTML(taskList[i]);
  }

  if (taskList[i].progress >= 1 && taskList[i].progress <= 74) {
    inProgress.innerHTML += createCardHTML(taskList[i]);
  }

  if (taskList[i].progress >= 75 && taskList[i].progress <= 94) {
    review.innerHTML += createCardHTML(taskList[i]);
  }

  if (taskList[i].progress === 100) {
    done.innerHTML += createCardHTML(taskList[i]);
  }
}

const columns = [toDO, inProgress, review, done];
columns.forEach((columm) => {
  new Sortable(columm, {
    group: "tasks",
    animation: 150,
    onEnd: function (evt) {
      const itemEl = evt.item;
      const newProgress = getNewProgress(evt.to.id);
      const taskId = itemEl.getAtribute("data-id");
      updateTaskProgress(taskId, newProgress);
    },
  });
});

function getNewProgress(colummId) {
  switch (colummId) {
    case "to-do-column":
      return 0;
    case "in-progress-column":
      return 1;
    case "code-review":
      return 75;
    case "done-column":
      return 100;
    default:
      return 0;
  }
}

function updateTaskProgress(taskId, newProgress) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == taskId) {
      taskList[i].progress = mewProgress;
      break;
    }
  }
  StringifyList("ProjectTasks", taskList);
}
