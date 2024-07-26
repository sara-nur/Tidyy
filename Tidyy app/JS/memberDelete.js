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
                DeleteUser(users[i].getElementsByTagName("p")[0].innerHTML);
            }
        }
    })
}

function DeleteUser(userName){
    for(let i = 0; i < list.length; i++){
        
        for(let j = 0; j < list[i].members.length; j++){
            if(userName !== list[i].members[j].name){
                list[i].members.pop();
                StringifyList("TeamList", list);
                window.location.reload();
            }
        }
    }
}


