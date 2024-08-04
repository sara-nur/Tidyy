let taskList = [{}];
const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");
const task = sessionStorage.getItem("task");

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
    if (proj === "Seminarski") {
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

let subtaskList = [];

for (let i = 0; i < taskList.length; i++) {
  if (task === taskList[i].name) {
    subtaskList = taskList[i].subtasks;
  }
}

function createCardHTML(subtask) {
  return `
    <div class="card" data-id="${subtask.id}" data-task-id="${subtask.taskId}">
      <div class="card-header">
        <h3>${subtask.name}</h3>
      </div>
      <p class="priority">Priority: ${subtask.priority}</p>
      <p class="progress">Progress: ${subtask.progress}%</p>
      <p class="assignee">Assignee: ${subtask.asignee}</p>
    </div>`;
}

for (let i = 0; i < subtaskList.length; i++) {
  let columnElement;
  const subtask = subtaskList[i];
  if (subtask.progress === 0) {
    columnElement = toDO;
  } else if (subtask.progress >= 1 && subtask.progress <= 74) {
    columnElement = inProgress;
  } else if (subtask.progress >= 75 && subtask.progress <= 94) {
    columnElement = review;
  } else if (subtask.progress === 100) {
    columnElement = done;
  }
  if (columnElement) {
    columnElement.innerHTML += createCardHTML(subtask);
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
      const subtaskId = itemEl.getAttribute("data-id");
      const taskId = itemEl.getAttribute("data-task-id");
      saveColumnState();
      updateSubtaskProgress(subtaskId, newProgress);
      updateTaskProgress(taskId);

      updateCardDisplay(itemEl, newProgress);
      StringifyList("Project1Tasks", taskList);
    },
  });
});

function updateCardDisplay(cardElement, progress) {
  const progressElement = cardElement.querySelector(".progress");
  if (progressElement) {
    progressElement.innerText = `Progress: ${progress}%`;
  }
  StringifyList("Project1Tasks", taskList);
}

function saveColumnState() {
  const columnState = {
    "to-do-column": Array.from(toDO.querySelectorAll(".card")).map((card) =>
      card.getAttribute("data-id")
    ),
    "in-progress-column": Array.from(inProgress.querySelectorAll(".card")).map(
      (card) => card.getAttribute("data-id")
    ),
    "code-review": Array.from(review.querySelectorAll(".card")).map((card) =>
      card.getAttribute("data-id")
    ),
    "done-column": Array.from(done.querySelectorAll(".card")).map((card) =>
      card.getAttribute("data-id")
    ),
  };
  sessionStorage.setItem("columnState", JSON.stringify(columnState));
}

const columnState = JSON.parse(sessionStorage.getItem("columnState"));

function addCardToColumn(taskId, column) {
  const task = subtaskList.find((t) => t.id == taskId);
  if (task) {
    column.innerHTML += createCardHTML(task);
  }
}

function getNewProgress(columnId) {
  switch (columnId) {
    case "to-do-column":
      return 0;
    case "in-progress-column":
      return 25;
    case "code-review":
      return 75;
    case "done-column":
      return 100;
    default:
      return 0;
  }
}

function updateSubtaskProgress(subtaskId, newProgress) {
  for (let i = 0; i < subtaskList.length; i++) {
    if (subtaskList[i].id === subtaskId) {
      subtaskList[i].progress = newProgress;
      break;
    }
  }
  StringifyList("Project1Tasks", subtaskList);
}

function updateTaskProgress(taskId) {
  let task = taskList.find((task) => task.id === taskId);
  if (!task) return;

  let totalSubtasks = task.subtasks.length;
  if (totalSubtasks === 0) return;

  let completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.progress === 100
  ).length;
  let taskProgress = Math.ceil((completedSubtasks / totalSubtasks) * 100);

  task.progress = taskProgress;
  StringifyList("Project1Tasks", taskList);
  console.log("Project1Tasks", taskList);
}
