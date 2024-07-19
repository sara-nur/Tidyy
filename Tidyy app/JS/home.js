
let listOfOrg = ["Test", "HCI"]

addEventListener("load",LoadOrg());

function LoadOrg(){
    let content = document.getElementById("firstContentddl").getElementsByTagName("li");
    for(let i = 0; i<content.length; i++){
        content[i].innerHTML="";
    }

    for(let i = 0; i < listOfOrg.length; i++){
        content[i].innerHTML += `
            <li>
                <a href="orgainsation-screen.html">${listOfOrg[i]}</a>
            </li>
        `;
        
    }

    arrList = JSON.stringify(listOfOrg);
    localStorage.setItem("orgs",arrList);
    console.log(arrList);
}

const Button = document.getElementById("createBtn");

Button.addEventListener("click", (e)=>{
    e.preventDefault();
    AddNewOrganisation();
});

function AddNewOrganisation()
{
    const nameInput = document.getElementById("OrgName").value.trim();
    listOfOrg.push(nameInput);
    arrList = JSON.stringify(listOfOrg);
    localStorage.setItem("orgs",arrList);
    LoadOrg();

    const createMod = document.getElementById("createModal");
    createMod.style.display = "none";
}




let content= document.getElementById("firstContentddl").getElementsByTagName("a");

    for(let i = 0; i < content.length; i++){
        content[i].addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(content[i].innerHTML);
            SelectedOrg(content[i].innerHTML);
            window.location.href="orgainsation-screen.html";
        })
    }


function SelectedOrg(org){
    localStorage.setItem("selectedOrganisation",org);
}