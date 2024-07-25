const cards = document.querySelector(".team-layout");


function GetList(name) {
    let newList = sessionStorage.getItem(name);
    return JSON.parse(newList);
  }

const teams = GetList("TeamList");

console.log(teams);

const teamNumber = teams.length;

const memberNumber= getMemberNumber();

function getMemberNumber(){
    let number = 0;
    for(let i = 0; i < teams.length; i++){
        console.log(teams[i])
        number+= teams[i].members.length;
    }
    return number;
}


console.log(teamNumber);
console.log(memberNumber);
