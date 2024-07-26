const users = document.querySelectorAll(".team-card");
const team = sessionStorage.getItem("team");

function GetList(name) {
    let newList = sessionStorage.getItem(name);
    return JSON.parse(newList);
  }

  function StringifyList(name, list) {
    let newList = JSON.stringify(list);
    sessionStorage.setItem(name, newList);
  }

const list= GetList("TeamList");

console.log(list);

console.log(users);


for(let i = 0; i < users.length; i++){
    users[i].addEventListener("click", (e)=>{
        
        if(e.target.tagName === "svg"){
            if(confirm("are you sure you want to delete this user")){
                DeleteUser();
            }
        }
    })
}


function DeleteUser(){
    console.log(team);
    for(let i = 0; i < list.length; i++){
        if(list[i].teamName === team){
            console.log(list[i]);
            list[i].members.pop();

        }
        
    }
    StringifyList("TeamList", list);
    window.location.reload();
}


