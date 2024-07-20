
let listOfOrg = ["HCI","MPP"];

const modalHeaders = document.querySelectorAll(".button-dropdown");
const modalContent = document.querySelectorAll(".dropdown-list-content");
console.log(modalHeaders);

let stectedOrg;
let seletedProj;

addEventListener("load", ()=>{
  
    for( let i = 0; i < modalHeaders.length; i ++){

        let projects = sessionStorage.getItem("proj");
        let org = sessionStorage.getItem("org");

        console.log(org)

        if(org=== null){
            org = "Select Organization";
        }

        if(projects === null){
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
    })})}




