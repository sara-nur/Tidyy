const cards = document.querySelector(".team-layout");

function GetList(name) {
  let newList = sessionStorage.getItem(name);
  return JSON.parse(newList);
}

const teams = GetList("TeamList");

const team = sessionStorage.getItem("team");

console.log(teams);

const teamNumber = teams.length;

const memberNumber = getMemberNumber();

function getMemberNumber() {
  let number = 0;
  for (let i = 0; i < teams.length; i++) {
    if (teams[i].teamName === team) {
      console.log(teams[i]);
      number += teams[i].members.length;
    }
  }
  return number;
}

console.log(teamNumber);
console.log(memberNumber);

const counters = document.querySelectorAll(".team-counter");

let numberOfMembers;

cards.innerHTML = "";
console.log(teams.length);
for (let i = 0; i < teams.length; i++) {
  for (let j = 0; j < teams[i].members.length; j++) {
    numberOfMembers = teams[i].members.length;
    if (teams[i].teamName === team) {
      cards.innerHTML += `
            
            <div class="team-card">
            <p>${teams[i].members[j].name}</p>
            <p>${teams[i].members[j].username}</p>
            <p>${teams[i].members[j].email}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="whitesmoke" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>
            </div>
            
            `;
    }
  }
}

for (let i = 0; i < counters.length; i++) {
  console.log(counters[i].innerHTML);
  if (i == 0) {
    counters[i].innerHTML = `<p>Number of Members : ${memberNumber}</p>`;
  }
}
