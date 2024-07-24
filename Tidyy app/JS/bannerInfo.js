const org = document.getElementById("banner-org");

const proj = document.getElementById("banner-proj");

const task = document.getElementById("banner-task");

const subtask = document.getElementById("banner-subtask");

const team = document.getElementById("banner-team");

if(org !== null){
    org.innerHTML = sessionStorage.getItem("org");
}

if(proj !== null){
    proj.innerHTML= sessionStorage.getItem("proj");
}

if(task !== null){
    task.innerHTML= sessionStorage.getItem("task");
}

if(subtask !== null){
    subtask.innerHTML= sessionStorage.getItem("subtask");
}

if(team !== null){
    team.innerHTML= sessionStorage.getItem("team");
}