let projectList = [];
const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");

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
        projectList= GetList("HCIProject");
    }else{
        projectList = GetList("NewProject");
    }
}else{
    projectList = GetList("NewProject");
}

const Projects = document.querySelector(".project-card-layout");
Projects.innerHTML="";
console.log(projectList);


    for( let i = 0; i < projectList.length; i++){
        Projects.innerHTML+=
        `
            <div id="project-card-1" class="project-card card">
              <div class="card-header">
                <h3>${projectList[i]}</h3>
              </div>
              <p>Members: 4 </p>
              <p>Tasks:   43</p>
            </div>
        `

}