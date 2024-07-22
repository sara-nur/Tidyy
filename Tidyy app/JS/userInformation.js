const currentUser = sessionStorage.getItem("loggedInUser");

const userBtn = document.querySelector("#profileOptions");

const userDropdownOptions = document.querySelector(".profile-options-dropdown");

let userName = document.querySelector("#userName");

userName.innerHTML = currentUser;

userBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    userDropdownOptions.classList.toggle("show");
})


