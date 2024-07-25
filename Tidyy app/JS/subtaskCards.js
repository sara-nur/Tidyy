let taskList = [{}];
const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");
const task = sessionStorage.getItem("task");

function StringifyList( name, list){
    console.log(list);
    let newList = JSON.stringify(list);
    console.log(newList);
    sessionStorage.setItem(name,newList);
}

function GetList(name){
    let newList = sessionStorage.getItem(name);
    console.log(newList);
    return JSON.parse(newList);
}




if(User === "sara.nur"){
    if(org === "HCI"){
        if(proj === "Project #1"){////////// MJENJAJ
            taskList =GetList("Project1Tasks");
        } 
        else{
            taskList = GetList("NewTasks");
        }
    }else{
        taskList = GetList("NewTasks");
    }
}else{
    taskList = GetList("NewTasks");
}

console.log(taskList);
const toDO = document.getElementById("to-do-column");
const inProgress = document.getElementById("in-progress-column");
const review = document.getElementById("code-review");
const done = document.getElementById("done-column");

console.log(taskList.length);

let subtaskList;

for( let i = 0; i < taskList.length; i++){
    if(task === taskList[i].name){
        subtaskList = taskList[i].subtasks
    }
}



for ( let i = 0; i < subtaskList.length; i++){
    if(subtaskList[i].progress === 0){
        toDO.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${subtaskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${subtaskList[i].priority}</p>
              <p>Progress: ${subtaskList[i].progress}%</p>
              <p>Asignee: ${subtaskList[i].asignee}</p>
            </div>`
    }

    if(subtaskList[i].progress >=1 && subtaskList[i].progress <=74){
        inProgress.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${subtaskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${subtaskList[i].priority}</p>
              <p>Progress: ${subtaskList[i].progress}%</p>
              <p>Asignee: ${subtaskList[i].asignee}</p>
            </div>`
    }



    if(subtaskList[i].progress === 100){
        done.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${subtaskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${subtaskList[i].priority}</p>
              <p>Progress: ${subtaskList[i].progress}%</p>
              <p>Asignee: ${subtaskList[i].asignee}</p>
            </div>`
    }
}

