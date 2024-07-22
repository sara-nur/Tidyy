const createButton = document.querySelectorAll(".create-btn");
const modal = document.querySelectorAll(".modal");
const cancel = document.querySelectorAll(".cancel-button");
const createNew = document.querySelectorAll(".create-button");


for (let i = 0; i < createButton.length; i++) {
  createButton[i].addEventListener("click", (e) => {
    e.preventDefault();
    modal[i].style.display = "block";
    cancel[i].addEventListener("click", (e) => {
      e.preventDefault();
      modal[i].style.display = "none";
    });
    createNew[i].addEventListener("click", (e)=>{
      e.preventDefault();
      const orgName = document.getElementById("OrgName");
      if(User === "sara.nur"){
        SaraListOrg.push(orgName.value);
      }else{
        NewListOrg.push(orgName.value);
      }
      console.log(SaraListOrg);
      modal[i].style.display = "none";
      console.log(orgName.value);
      window.location.reload()
    })
  });
}
