const allTasks = document.getElementById("AllTasks");

const myTasks = document.getElementById("MyTasks");

const searchBar = document.getElementById("search");

const org = sessionStorage.getItem("org");
const User = sessionStorage.getItem("loggedInUser");
const proj = sessionStorage.getItem("proj");

let project;
let task;

// function StringifyList( name, list){
//     console.log(list);
//     let newList = JSON.stringify(list);
//     console.log(newList);
//     sessionStorage.setItem(name,newList);
// }

// function GetList(name){
//     let newList = sessionStorage.getItem(name);
//     return JSON.parse(newList);
// }


// if(User === "sara.nur"){
//     if(org === "HCI"){
//         project = GetList("HCIProject");
//         if(proj === "Project #1"){////////// MJENJAJ
//             task =GetList("Project1Tasks");
//         } 
//         else{
//             taskList = GetList("NewTasks");
//         }
//     }else{
//         project= GetList("NewProject");
//         task = GetList("NewTasks");
//     }
// }else{
//     project= GetList("NewProject");
//     task = GetList("NewTasks");
// }

const cards = document.getElementsByClassName("card");

console.log(cards);

for(let i = 0; i < cards.length; i++){
    console.log(cards[i].getElementsByTagName("p")[2]);
}

if(allTasks != null && myTasks != null){

    allTasks.addEventListener("click", (e)=>{
        e.preventDefault();
        for(let i = 0; i < document.getElementsByClassName("card").length; i++){
            if(cards[i].getElementsByTagName("p")[2].innerHTML !== `Asignee: ${User}`){
                cards[i].style.display= "block"
            }
        }
    })
       

   

    myTasks.addEventListener("click", (e)=>{
        e.preventDefault();    
        for(let i = 0; i < document.getElementsByClassName("card").length; i++){
            if(cards[i].getElementsByTagName("p")[2].innerHTML !== `Asignee: ${User}`){
                cards[i].style.display= "none";
            }
        }
        
    })

}
