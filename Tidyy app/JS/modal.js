const createButton = document.querySelectorAll(".create-btn");
const modal = document.querySelectorAll(".modal");
const cancel = document.querySelectorAll(".cancel-button");

console.log(modal);

for ( let i = 0; i < createButton.length; i++){
    createButton[i].addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(createButton[i]);
        console.log(modal[i]);
        console.log(i);
        modal[i].style.display="block";
        cancel[i].addEventListener("click", (e)=>{
          e.preventDefault();
          console.log(modal[i]);
          modal[i].style.display="none";
        })
    })
}