
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