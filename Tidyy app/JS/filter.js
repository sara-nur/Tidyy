const allTasks = document.getElementById("AllTasks");

const myTasks = document.getElementById("MyTasks");

const searchBar = document.getElementById("search");

const org = sessionStorage.getItem("org");
const user = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");
const selectedTask = GetList("selectedTask");

let organistaion;
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

allTasks.style.backgroundColor=selectedColor;
myTasks.style.backgroundColor=normalColor;

if(User === "sara.nur"){
    if(org === "HCI"){
        organistaion = GetList("HCIProject");
        if(proj === "Project #1"){////////// MJENJAJ
            project =GetList("Project1Tasks");
        } 
        else{
            taskList = GetList("NewTasks");
            task = GetList("NewSubTasks");
        }
    }else{
        organistaion = GetList("newOrg");
        project= GetList("NewProject");
        task = GetList("NewTasks");
    }
}

let orgList;
let newList;

if(allTasks != null && myTasks != null){
    allTasks.addEventListener("click", (e)=>{
        e.preventDefault();
        allTasks.style.backgroundColor=selectedColor;
        myTasks.style.backgroundColor=normalColor;

        if(window.location.href === "orgainsation-screen.html"){
            newList = orgList;
            if(org === "HCI"){
                sessionStorage.setItem("HCIProject",StringifyList(newList));
                window.location.reload();
            }else{
                sessionStorage.setItem("NewProject",StringifyList(newList));
                window.location.reload();
            }
        }
        else if(window.location.href === "projects-screen.html"){
            newList = orgList;
            if(proj === "Project #1"){
                sessionStorage.setItem("Project1Tasks",StringifyList(newList));
                window.location.reload();
            }else{
                sessionStorage.setItem("NewTasks",StringifyList(newList));
                window.location.reload();
            }
        }
        else if(window.location.href === "my-subtasks-screen.html"){
            newList = orgList;
            project
            }else{
                sessionStorage.setItem("NewSubTasks",StringifyList(newList));
                window.location.reload();
            }
        })

   

    myTasks.addEventListener("click", (e)=>{
        e.preventDefault();
        myTasks.style.backgroundColor=selectedColor;
        allTasks.style.backgroundColor=normalColor;

        
    })

};
