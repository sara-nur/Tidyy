

const cards = document.querySelector(".team-layout");


function GetList(name) {
    let newList = sessionStorage.getItem(name);
    return JSON.parse(newList);
  }

const teams = GetList("TeamList");

const team = sessionStorage.getItem("team");

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

const counters = document.querySelectorAll(".team-counter")

let numberOfMembers;



cards.innerHTML = ""
console.log(teams.length)
for(let i = 0; i < teams.length; i++){
    for(let j = 0; j < teams[i].members.length; j++){
        numberOfMembers= teams[i].members.length;
        if(teams[i].teamName === team){
            cards.innerHTML +=
            `
            
            <div class="team-card">
            <p>${teams[i].members[j].name}</p>
            </div>
            
            `;
        }
    }
    
}

for(let i = 0; i < counters.length; i++ ){
    console.log(counters[i].innerHTML)
    if(i == 0){
        counters[i].innerHTML= `<p>Number of Members : ${numberOfMembers}</p>`;
    }
}