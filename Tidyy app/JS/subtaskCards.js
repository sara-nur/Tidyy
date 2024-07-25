let taskList = [{}];
const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");
const task = sessionStorage.getItem("task");

function StringifyList(name, list) {
  console.log(list);
  let newList = JSON.stringify(list);
  console.log(newList);
  sessionStorage.setItem(name, newList);
}

function GetList(name) {
  let newList = sessionStorage.getItem(name);
  console.log(newList);
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

console.log(taskList);
const toDO = document.getElementById("to-do-column");
const inProgress = document.getElementById("in-progress-column");
const review = document.getElementById("code-review");
const done = document.getElementById("done-column");

console.log(taskList.length);

let subtaskList;

for (let i = 0; i < taskList.length; i++) {
  if (task === taskList[i].name) {
    subtaskList = taskList[i].subtasks;
  }
}

function createCardHTML(task) {
  return `
    <div class="card" data-id="${task.id}">
      <div class="card-header">
        <h3>${task.name}</h3>
      </div>
      <p>Priority: ${task.priority}</p>
      <p>Progress: ${task.progress}%</p>
      <p>Asignee: ${task.asignee}</p>
    </div>`;
}

for (let i = 0; i < subtaskList.length; i++) {
  if (subtaskList[i].progress === 0) {
    toDO.innerHTML += createCardHTML(subtaskList[i]);
  }

  if (subtaskList[i].progress >= 1 && subtaskList[i].progress <= 74) {
    inProgress.innerHTML += createCardHTML(subtaskList[i]);
  }

  if (subtaskList[i].progress >= 75 && subtaskList[i].progress <= 94) {
    review.innerHTML += createCardHTML(subtaskList[i]);
  }

  if (subtaskList[i].progress === 100) {
    done.innerHTML += createCardHTML(subtaskList[i]);
  }
}

const columns = [toDO, inProgress, review, done];
columns.forEach((column) => {
  new Sortable(column, {
    group: "tasks",
    animation: 150,
    onEnd: function (evt) {
      const itemEl = evt.item;
      const newProgress = getNewProgress(evt.to.id);
      const taskId = itemEl.getAttribute("data-id");
      updateTaskProgress(taskId, newProgress);
    },
  });
});

function getNewProgress(columnId) {
  switch (columnId) {
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
  for (let i = 0; i < subtaskList.length; i++) {
    if (subtaskList[i].id == taskId) {
      subtaskList[i].progress = newProgress;
      break;
    }
  }
  StringifyList("Project1Tasks", taskList); // Update the list in sessionStorage
}
