const currentUser = sessionStorage.getItem("loggedInUser");

const userBtn = document.querySelector("#profileOptions");

const userDropdownOptions = document.querySelector(".profile-options-dropdown");

const userName = document.getElementById("userName");

userName.innerHTML = sessionStorage.getItem("loggedInUser");

userBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    userDropdownOptions.classList.toggle("show");
})


