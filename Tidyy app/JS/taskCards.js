let taskList = [{}];
const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");

function StringifyList( name, list){

    let newList = JSON.stringify(list);

    sessionStorage.setItem(name,newList);
}

function GetList(name){
    let newList = sessionStorage.getItem(name);

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

const toDO = document.getElementById("to-do-column");
const inProgress = document.getElementById("in-progress-column");
const review = document.getElementById("code-review");
const done = document.getElementById("done-column");


for ( let i = 0; i < taskList.length; i++){
    if(taskList[i].progress === 0){
        toDO.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${taskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${taskList[i].priority}</p>
              <p>Progress: ${taskList[i].progress}%</p>
              <p>Asignee: ${taskList[i].asignee}</p>
            </div>`
    }

    if(taskList[i].progress >=1 && taskList[i].progress <=74){
        inProgress.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${taskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${taskList[i].priority}</p>
              <p>Progress: ${taskList[i].progress}%</p>
              <p>Asignee: ${taskList[i].asignee}</p>
            </div>`
    }

    if(taskList[i].progress >=75 && taskList[i].progress <=94){
        review.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${taskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${taskList[i].priority}</p>
              <p>Progress: ${taskList[i].progress}%</p>
              <p>Asignee: ${taskList[i].asignee}</p>
            </div>`
    }

    if(taskList[i].progress === 100){
        done.innerHTML += 
        `<div class="card">
              <div class="card-header">
                <h3>${taskList[i].name}</h3>
                <img src="../Img/virus.png" alt="" />
              </div>
              <p>Priority: ${taskList[i].priority}</p>
              <p>Progress: ${taskList[i].progress}%</p>
              <p>Asignee: ${taskList[i].asignee}</p>
            </div>`
    }
}

