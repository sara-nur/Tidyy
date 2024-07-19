
let TaskList = [{name:"Classes",Prority:"High",Progress:45, Asignie:"Sara.Nur"},
    {name:"Operators",Prority:"High",Progress:0, Asignie:"Admir"},
    {name:"File Managment",Prority:"High",Progress:100, Asignie:"Sara.Nur"},
    {name:"Copy Constructor",Prority:"High",Progress:75, Asignie:"Admir"},
    {name:"Move Constructor",Prority:"High",Progress:0, Asignie:"Sara.Nur"},
];

addEventListener("load",LoadPage());

function LoadPage(){
ChangeOrgProjection();
LoadOrg();
LoadProjectsTest();
DisplayTasks();

}


function ChangeOrgProjection(){
let OrgName= localStorage.getItem("selectedOrganisation");
let ProjName=localStorage.getItem("selectedProject")
console.log(OrgName);
document.getElementById("firstddl").innerHTML = OrgName;
document.getElementById("Secondddl").innerHTML=ProjName;
}

function LoadOrg(){
let content = document.getElementById("firstContentddl").getElementsByTagName("li");
for(let i = 0; i < content.length; i++){
content[i].innerHTML = "";
}
let OrgsLS = localStorage.getItem("orgs"); 
let Orgs = JSON.parse(OrgsLS);
for(let i = 0; i < Orgs.length; i++){
content[i].innerHTML += `
<li>
    <a href="orgainsation-screen.html">${Orgs[i]}</a>
</li>
`;
}
}

function LoadProjectsTest(){
let content = document.getElementById("SecondContentddl").getElementsByTagName("li");
for(let i = 0; i<content.length; i++){
content[i].innerHTML="";
}
let OrgsLS = localStorage.getItem("proj"); 
let proj = JSON.parse(OrgsLS);
for(let i = 0; i < proj.length; i++){
content[i].innerHTML += `
<li>
    <a href="Projects-screen.html">${proj[i]}</a>
</li>
`;
}
}


let content = document.getElementById("firstContentddl").getElementsByTagName("a");
for(let i = 0; i < content.length; i++){
content[i].addEventListener("click",(e)=>{
e.preventDefault();
console.log(content[i].innerHTML);
SelectedOrg(content[i].innerHTML);
ChangeOrgProjection();
LoadProjectCards();
})
}
function SelectedOrg(org){

localStorage.setItem("selectedOrganisation",org);
}


let content2 = document.getElementById("SecondContentddl").getElementsByTagName("a");
for(let i = 0; i < content2.length; i++){
content2[i].addEventListener("click",(e)=>{
e.preventDefault();
console.log(content2[i].innerHTML);
SelectedProj(content2[i].innerHTML);
LoadPage();
window.location.href = "Projects-screen.html";
})
}


function SelectedProj(org){

localStorage.setItem("selectedProject",org);
}


const Button = document.getElementById("createBtn");

Button.addEventListener("click", (e)=>{
e.preventDefault();
AddNewTask();
});


function AddNewTask(){


}


function DisplayTasks(){
let toDO = document.getElementById("to-do-column");
let inProgress = document.getElementById("in-progress-column");
let codeReview = document.getElementById("code-review");
let done = document.getElementById("done-column");



for( let i = 0; i < TaskList.length; i++){
if(TaskList[i].Progress == 0){
toDO.innerHTML += `
    <div class="card">
  <div class="card-header">
    <h3>${TaskList[i].name}</h3>
    <img src="../Img/virus.png" alt="" />
  </div>
  <p>Priority: ${TaskList[i].Prority}</p>
  <p>Progress: ${TaskList[i].Progress}%</p>
  <p>Asignee: ${TaskList[i].Asignie}</p>
</div>
`
}

if(TaskList[i].Progress >= 1 && TaskList[i].Progress <= 74 ){
    inProgress.innerHTML += `
        <div class="card">
      <div class="card-header">
        <h3>${TaskList[i].name}</h3>
        <img src="../Img/virus.png" alt="" />
      </div>
      <p>Priority: ${TaskList[i].Prority}</p>
      <p>Progress: ${TaskList[i].Progress}%</p>
      <p>Asignee: ${TaskList[i].Asignie}</p>
    </div>
    `
}

if(TaskList[i].Progress >= 75 && TaskList[i].Progress <= 99 ){
    codeReview.innerHTML += `
        <div class="card">
      <div class="card-header">
        <h3>${TaskList[i].name}</h3>
        <img src="../Img/virus.png" alt="" />
      </div>
      <p>Priority: ${TaskList[i].Prority}</p>
      <p>Progress: ${TaskList[i].Progress}%</p>
      <p>Asignee: ${TaskList[i].Asignie}</p>
    </div>
    `
}

if(TaskList[i].Progress == 100 ){
    done.innerHTML += `
        <div class="card">
      <div class="card-header">
        <h3>${TaskList[i].name}</h3>
        <img src="../Img/virus.png" alt="" />
      </div>
      <p>Priority: ${TaskList[i].Prority}</p>
      <p>Progress: ${TaskList[i].Progress}%</p>
      <p>Asignee: ${TaskList[i].Asignie}</p>
    </div>
    `
}
}
}