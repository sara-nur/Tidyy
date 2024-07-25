const allTasks = document.getElementById("AllTasks");

const myTasks = document.getElementById("MyTasks");

const searchBar = document.getElementById("search");

const org = sessionStorage.getItem("org");
const user = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");
const selectedTask = GetList("selectedTask");

let project;
let task;


let selectedColor = "#143444";
let normalColor = "#012537";

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
        project = GetList("HCIProject");
        if(proj === "Project #1"){////////// MJENJAJ
            task =GetList("Project1Tasks");
        } 
        else{
            taskList = GetList("NewTasks");
        }
    }else{
        project= GetList("NewProject");
        task = GetList("NewTasks");
    }
}else{
    project= GetList("NewProject");
    task = GetList("NewTasks");
}

if(allTasks != null && myTasks != null){
    allTasks.addEventListener("click", (e)=>{
        e.preventDefault();

        
        })

   

    myTasks.addEventListener("click", (e)=>{
        e.preventDefault();
        
    })

};
