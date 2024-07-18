
const errLogin = document.getElementById("error");
const loginBtn = document.getElementById("loginbtn");

const users = ['sara.nur', 'ado', 'ramo'];
const passwords = ['sara', 'ado', 'ramo'];



function ValidateUser(){
    
    let Username = document.getElementById("username").value.trim();
    let Password = document.getElementById("password").value.trim();
    let ispisiError= true;
        
        for(let i = 0; i<users.length; i++){
            if(Username === users[i] && Password === passwords[i]){
                window.location.href="home-screen.html";
                ispisiError=false;
        }}

        if(ispisiError){
            errLogin.style.display = "block";
        }
}

if(loginBtn != null)
{
    loginBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        ValidateUser();
    });
}
