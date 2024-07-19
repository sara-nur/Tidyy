let ProjectsTest = ["Pr 1", "Pr 2"];
let ProjectsNew = [""]

addEventListener("load",LoadPage());

function LoadPage(){
    ChangeOrgProjection();
    LoadOrg();
    LoadProjectsTest();
    LoadProjectCards();
}

function ChangeOrgProjection(){
    let OrgName= localStorage.getItem("selectedOrganisation");
    console.log(OrgName);
    document.getElementById("h2-org").innerHTML = OrgName;
    document.getElementById("firstddl").innerHTML = OrgName;
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

function LoadProjectCards()
{
    let projectCards = document.getElementById("project-card-layout");
    projectCards.innerHTML="";
    let list = ProjectsNew;
    let OrgName= localStorage.getItem("selectedOrganisation");
    console.log(OrgName);
    if(OrgName === "Test"){
        list = ProjectsTest
    }
    console.log(list);
    if(list != ""){
        for( let i = 0; i < list.length; i++){
            if(list[i]!=""){
                projectCards.innerHTML += `
                     <div id="project-card-${i+1}" class="project-card">
                      <div class="card-header">
                        <h3>${list[i]}</h3>
                      </div>
                      <p>Number of members: 4</p>
                      <p>Number of tasks: 43</p>
                    </div>
                `
            }
        }
    }
    
}


function LoadProjectsTest(){
    let content = document.getElementById("SecondContentddl").getElementsByTagName("li");
    for(let i = 0; i<content.length; i++){
        content[i].innerHTML="";
    }
    let OrgsLS = localStorage.getItem("proj"); 
    let proj = JSON.parse(OrgsLS);
    for(let i = 0; i < ProjectsTest.length; i++){
        content[i].innerHTML += `
            <li>
                <a href="Projects-screen.html">${ProjectsTest[i]}</a>
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



function AddNewProject()
{
    let list = ProjectsNew;
    let OrgName= localStorage.getItem("selectedOrganisation");
    console.log(OrgName);
    if(OrgName === "Test"){
        list = ProjectsTest
    }
    const nameInput = document.getElementById("project-name").value.trim();
    list.push(nameInput);
    arrList = JSON.stringify(list);
    localStorage.setItem("proj",arrList);
    LoadProjectsTest();
    LoadProjectCards();
    const createMod = document.getElementById("createModal");
    createMod.style.display = "none";
}

const Button = document.getElementById("CreateBtn");

Button.addEventListener("click", (e)=>{
    e.preventDefault();
    AddNewProject();
});


