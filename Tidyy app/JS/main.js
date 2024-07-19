//ERROR COLORS
let ErrorBackgroundColor = "#FE7D7D";
let OkBackgroundColor = "#DFF6D8";

//ERROR MESSAGES
const errLogin = document.getElementById("error");
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

//VARIABLES FROM BUTTON FIELDS
const loginBtn = document.getElementById("loginbtn");
const registerBtn = document.getElementById("RegisterModalbtn");

//LISTS
const usersList = ["sara.nur", "ado", "ramo"];
const passwordsList = ["sara", "ado", "ramo"];
const emailsList = ["sara.nur@gmail.com"];

//VARIABLES
let timeoutId;

function ValidateUserLogin() {
  let Username = document.getElementById("username").value.trim();
  let Password = document.getElementById("password").value.trim();
  let ispisiError = true;

  for (let i = 0; i < usersList.length; i++) {
    if (Username === usersList[i] && Password === passwordsList[i]) {
      window.location.href = "home-screen.html";
      ispisiError = false;
    }
  }

  if (ispisiError) {
    errLogin.style.display = "block";
  }
}

if (loginBtn != null) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ValidateUserLogin();
  });
}

function RegisterUser() {
  console.log(usersList);
  console.log(passwordsList);
  console.log(emailsList);

  if (!ValidacijaUsera()) {
    //window.location.href=
  }
}

function ValidacijaUsera() {
  const isUsernameValid = IsUsernameValid();
  const isEmailValid = IsEmailValid();
  const isPasswordEmpty = IsPasswordEmpty();
  const isPasswordCorrect = IsPasswordCorrect();

  if (isUsernameValid && isEmailValid && isPasswordEmpty && isPasswordCorrect) {
    return false;
  }
  return true;
}

if (registerBtn != null) {
  registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    RegisterUser();
  });
}

function IsUsernameValid() {
  const usernameRegistracija =
    document.getElementById("usernameRegister").value;

  if (usernameRegistracija === "") {
    errUsernameEmpty.style.display = "block";
    errUsernameRegister.style.display = "none";
    return false;
  } else {
    errUsernameEmpty.style.display = "none";
  }

  let usernameExists = false;

  for (let i = 0; i < usersList.length; i++) {
    if (usernameRegistracija === usersList[i]) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    errUsernameRegister.style.display = "block";
    return false;
  } else {
    errUsernameEmpty.style.display = "none";
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
    errEmailEmpty.style.display = "block";
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

function IsPasswordEmpty() {
  const passwordRegistracija =
    document.getElementById("passwordRegister").value;
  const passwordRegistracijaRepeat =
    document.getElementById("password-repeat").value;

  if (passwordRegistracija === "" || passwordRegistracijaRepeat === "") {
    errPasswordEmpty.style.display = "block";
    errPasswordNotMatch.style.display = "none";
    return false;
  } else {
    errPasswordEmpty.style.display = "none";
    return true;
  }
}

function IsPasswordCorrect() {
  const passwordRegistracija =
    document.getElementById("passwordRegister").value;
  const passwordRegistracijaRepeat =
    document.getElementById("password-repeat").value;

  if (passwordRegistracija !== passwordRegistracijaRepeat) {
    errPasswordNotMatch.style.display = "block";
    errPasswordEmpty.style.display = "none";
    return false;
  } else {
    errPasswordNotMatch.style.display = "none";
    return true;
  }
}
