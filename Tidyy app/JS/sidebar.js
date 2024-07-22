
let SaraListOrg = ["HCI","MPP"];
let NewListOrg = [];



function StringifyList( name, list){
    console.log(list);
    let newList = JSON.stringify(list);
    console.log(newList);
    sessionStorage.setItem(name,newList);
}

StringifyList("saraOrg",SaraListOrg);
StringifyList("newOrg",NewListOrg);

function GetList(name){
    let newList = sessionStorage.getItem(name);
    console.log(newList);
    return JSON.parse(newList);
}

console.log(SaraListOrg);

const modalHeaders = document.getElementsByClassName("button-dropdown");

const modalContent = document.getElementsByClassName("dropdown-list-content");
modalContent[0].innerHTML = "";

const User = sessionStorage.getItem("loggedInUser");
let list;
if(User === "sara.nur"){
    list = GetList("saraOrg");
}else{
    list = GetList("newOrg");
}
    for( let i = 0; i < list.length; i++ ){
        modalContent[0].innerHTML += `
            <li>
                <a href="orgainsation-screen.html">${list[i]}</a>
              </li>
        `
    }







addEventListener("load", ()=>{
  
    for( let i = 0; i < modalHeaders.length; i ++){

        let projects = sessionStorage.getItem("proj");
        let org = sessionStorage.getItem("org");

        if(org === null || org === ""){
            org = "Select Organization";
        }

        if(projects === null || projects === ""){
            projects = "Select projects"
        }

        if( i === 0){
            modalHeaders[i].innerHTML= org;
        }
        else if (i === 1){
            modalHeaders[i].innerHTML = projects;
        }

            
    }
    
})







for(let i = 0; i < modalHeaders.length; i++){
    modalHeaders[i].addEventListener("click",(e)=>{
        e.preventDefault();
        if(modalContent[i].getElementsByTagName("a").length != 0){
            modalContent[i].classList.toggle("show");
            for(let j = 0; j < modalContent[i].getElementsByTagName("a").length; j++)
            modalContent[i].getElementsByTagName("a")[j].addEventListener("click", (e)=>{
                e.preventDefault();
                sessionStorage.setItem("item",modalContent[i].getElementsByTagName("a")[j].innerHTML);
                sessionStorage.setItem("header",modalHeaders[i].innerHTML);
                modalHeaders[i].innerHTML = modalContent[i].getElementsByTagName("a")[j].innerHTML;
                if(i === 0){
                    window.location.href = "orgainsation-screen.html";
                    sessionStorage.setItem("org",modalContent[i].getElementsByTagName("a")[j].innerHTML);
                }
    
                if(i === 1){
                    window.location.href = "projects-screen.html";
                    sessionStorage.setItem("proj",modalContent[i].getElementsByTagName("a")[j].innerHTML);
                }
        })}else{
            alert("You are not a part of any organisation");
        }
    
    })}
            




