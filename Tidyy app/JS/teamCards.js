const cards = document.querySelector(".team-layout");


function GetList(name) {
    let newList = sessionStorage.getItem(name);
    return JSON.parse(newList);
  }

const teams = GetList("TeamList");


const memberNumber = getMemberNumber()

function getMemberNumber(){
    let number = 0;
    for(let i = 0; i < teams.length; i++){
        number += teams[i].members.length;
    }
    return number;
}

const counters = document.querySelectorAll(".team-counter")


for(let i = 0; i < counters.length; i++ ){
    console.log(counters[i].innerHTML)
    if(i == 0){
        counters[i].innerHTML= `<p>Number of Teams : ${teams.length}</p>`;
    }
    if( i == 1){
            counters[i].innerHTML= `<p>Number of Members : ${memberNumber}</p>`;
    }
}


cards.innerHTML = ""
console.log(teams.length)
for(let i = 0; i < teams.length; i++){
    cards.innerHTML +=
    `
        <div class="team-card" id="teamBtn" >
            <p>${teams[i].teamName}</p>
            <p>${teams[i].members.length}</p>
          </div>
    `
}
