//ERROR COLORS
let ErrorBackgroundColor = "#FE7D7D";
let OkBackgroundColor = "#DFF6D8";

sessionStorage.setItem("org", "");
sessionStorage.setItem("proj", "");

//ERROR MESSAGES
const errLogin = document.getElementById("error");
const errLoginEmpty = document.getElementById("errorLoginEmpty");
const errRegister = document.getElementById("errorRegister");
const errUsernameRegister = document.getElementById("errorUsernameRegister");
const errEmailRegister = document.getElementById("errorEmailRegister");
const errUsernameEmpty = document.getElementById("errorUsernameRegisterEmpty");
const errEmailIncorrect = document.getElementById(
  "errorEmailRegisterIncorrect"
);
const errEmailEmpty = document.getElementById("errorEmailRegisterEmpty");
const errPasswordNotMatch = document.getElementById("errorPasswordRegister");
const errPasswordEmpty = document.getElementById("errorPasswordRegisterEmpty");
const errPasswordIncorrect = document.getElementById(
  "errorPasswordRegisterIncorrect"
);

//VARIABLES FROM BUTTON FIELDS
const loginBtn = document.getElementById("loginbtn");
const registerBtn = document.getElementById("RegisterModalbtn");

//LISTS
let usernamesList = ["sara.nur", "ado", "ramo"];
let passwordsList = ["Sara1234!", "Ado1234!", "Ramo1234!"];
let emailsList = ["sara.nur@gmail.com", "ado@gmail.com", "ramo@gmail.com"];

//VARIABLES
let timeoutId;

// Function to save user data to sessionStorage
function saveUserDataToSessionStorage() {
  sessionStorage.setItem("usernamesList", JSON.stringify(usernamesList));
  sessionStorage.setItem("passwordsList", JSON.stringify(passwordsList));
  sessionStorage.setItem("emailsList", JSON.stringify(emailsList));
}

// Function to retrieve user data from sessionStorage
function retrieveUserDataFromSessionStorage() {
  if (sessionStorage.getItem("usernamesList")) {
    usernamesList = JSON.parse(sessionStorage.getItem("usernamesList"));
  }
  if (sessionStorage.getItem("passwordsList")) {
    passwordsList = JSON.parse(sessionStorage.getItem("passwordsList"));
  }
  if (sessionStorage.getItem("emailsList")) {
    emailsList = JSON.parse(sessionStorage.getItem("emailsList"));
  }
}

window.addEventListener("load", function () {
  retrieveUserDataFromSessionStorage();
});

function ValidateUserLogin() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!username || !password) {
    errLoginEmpty.style.display = "block";
    errLogin.style.display = "none";
    return;
  }

  for (let i = 0; i < usernamesList.length; i++) {
    if (username === usernamesList[i] && password === passwordsList[i]) {
      sessionStorage.setItem("loggedInUser", username);
      window.location.href = "home-screen.html";
      errLogin.style.display = "none";
      errLoginEmpty.style.display = "none";
      break;
    } else {
      errLogin.style.display = "block";
      errLoginEmpty.style.display = "none";
    }
  }
}

if (loginBtn != null) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ValidateUserLogin();
  });
}

function RegisterUser() {
  const usernameRegistracija =
    document.getElementById("usernameRegister").value;
  const emailRegistracija = document.getElementById("emali").value;
  const passwordRegistracija =
    document.getElementById("passwordRegister").value;

  if (ValidateUserRegister()) {
    alert(
      "Uspjesno ste se registrovali! Molimo logujte se da potvrdite svoje kredencijale."
    );

    usernamesList.push(usernameRegistracija);
    emailsList.push(emailRegistracija);
    passwordsList.push(passwordRegistracija);

    // Save updated data to sessionStorage
    saveUserDataToSessionStorage();

    console.log("Usernames:", usernamesList);
    console.log("Passwords:", passwordsList);
    console.log("Emails:", emailsList);

    setTimeout(function () {
      window.location.href = "index.html";
    }, 500);
  }

  console.log(usernamesList);
  console.log(passwordsList);
  console.log(emailsList);
}

function ValidateUserRegister() {
  const isUsernameValid = IsUsernameValid();
  const isEmailValid = IsEmailValid();
  const isPasswordValid = IsPasswordValid();

  if (isUsernameValid && isEmailValid && isPasswordValid) {
    return true;
  }
  return false;
}

if (registerBtn != null) {
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    RegisterUser();
  });
}

function IsUsernameValid() {
  return (
    UsernameInRegistrationFormEmpty() && UsernameInRegistrationFormExists()
  );
}

function UsernameInRegistrationFormEmpty() {
  const usernameRegistracija =
    document.getElementById("usernameRegister").value;

  if (usernameRegistracija === "") {
    errUsernameEmpty.style.display = "block";
    errUsernameRegister.style.display = "none";
    return false;
  } else {
    errUsernameEmpty.style.display = "none";
    return true;
  }
}

function UsernameInRegistrationFormExists() {
  const usernameRegistracija =
    document.getElementById("usernameRegister").value;

  let usernameExists = false;

  for (let i = 0; i < usernamesList.length; i++) {
    if (usernameRegistracija === usernamesList[i]) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    errUsernameRegister.style.display = "block";
    errUsernameEmpty.style.display = "none";
    return false;
  } else {
    errUsernameRegister.style.display = "none";
    return true;
  }
}

function IsEmailValid() {
  return (
    !EmailInRegistrationFormEmpty() &&
    !EmailInRegistrationFormExists() &&
    EmailInRegistrationFormRegex()
  );
}

function EmailInRegistrationFormEmpty() {
  const emailRegistracija = document.getElementById("emali").value;

  if (emailRegistracija === "") {
    errEmailEmpty.style.display = "block";
    errEmailRegister.style.display = "none";
    errEmailIncorrect.style.display = "none";
    return true;
  } else {
    errEmailEmpty.style.display = "none";
    return false;
  }
}

function EmailInRegistrationFormExists() {
  const emailRegistracija = document.getElementById("emali").value;

  let emailExists = false;

  for (let i = 0; i < emailsList.length; i++) {
    if (emailRegistracija === emailsList[i]) {
      emailExists = true;
      break;
    }
  }

  if (emailExists) {
    errEmailRegister.style.display = "block";
    errEmailEmpty.style.display = "none";
    errEmailIncorrect.style.display = "none";

    return true;
  } else {
    errEmailRegister.style.display = "none";
    return false;
  }
}

function EmailInRegistrationFormRegex() {
  const emailRegistracija = document.getElementById("emali").value;

  const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailRegistracija)) {
    errEmailIncorrect.style.display = "block";
    errEmailRegister.style.display = "none";
    errEmailEmpty.style.display = "none";
    return false;
  } else {
    errEmailIncorrect.style.display = "none";
    return true;
  }
}

function IsPasswordValid() {
  return (
    PasswordInRegistrationFormEmpty() &&
    PasswordInRegisrationFormMatch() &&
    PasswordInRegisrationFormRegex()
  );
}

function PasswordInRegistrationFormEmpty() {
  const passwordRegistracija =
    document.getElementById("passwordRegister").value;
  const passwordRegistracijaRepeat =
    document.getElementById("password-repeat").value;

  if (passwordRegistracija === "" || passwordRegistracijaRepeat === "") {
    errPasswordEmpty.style.display = "block";
    errPasswordNotMatch.style.display = "none";
    errPasswordIncorrect.style.display = "none";
    return false;
  } else {
    errPasswordEmpty.style.display = "none";
    return true;
  }
}

function PasswordInRegisrationFormMatch() {
  const passwordRegistracija =
    document.getElementById("passwordRegister").value;
  const passwordRegistracijaRepeat =
    document.getElementById("password-repeat").value;

  if (passwordRegistracija !== passwordRegistracijaRepeat) {
    errPasswordNotMatch.style.display = "block";
    errPasswordEmpty.style.display = "none";
    errPasswordIncorrect.style.display = "none";
    return false;
  } else {
    errPasswordNotMatch.style.display = "none";
    return true;
  }
}

function PasswordInRegisrationFormRegex() {
  const passwordRegistracija =
    document.getElementById("passwordRegister").value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  console.log("Password:", passwordRegistracija);

  if (!passwordRegex.test(passwordRegistracija)) {
    errPasswordIncorrect.style.display = "block";
    errPasswordEmpty.style.display = "none";
    errPasswordNotMatch.style.display = "none";
    return false;
  } else {
    errPasswordIncorrect.style.display = "none";
    return true;
  }
}
