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
const reg = document.getElementById("createButton");
const modal = document.getElementById("createModal");
//LISTS
let usernamesList = ["sara.nur", "ado", "ramo"];
let passwordsList = ["Sara1234!", "Ado1234!", "Ramo1234!"];
let emailsList = ["sara.nur@gmail.com", "ado@gmail.com", "ramo@gmail.com"];

//VARIABLES
let timeoutId;

//OPEN MODAL
reg.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

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
  const usernameRegistracija = document
    .getElementById("usernameRegister")
    .value.trim();
  const emailRegistracija = document.getElementById("emali").value.trim();
  const passwordRegistracija = document
    .getElementById("passwordRegister")
    .value.trim();

  if (ValidateUserRegister()) {
    Swal.fire({
      title:
        "Great! You’re registered. Redirecting to the login page to confirm your details.",
      icon: "success",
      showConfirmButton: false,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });

    usernamesList.push(usernameRegistracija);
    emailsList.push(emailRegistracija);
    passwordsList.push(passwordRegistracija);

    saveUserDataToSessionStorage();

    console.log("Usernames:", usernamesList);
    console.log("Passwords:", passwordsList);
    console.log("Emails:", emailsList);

    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
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
  const usernameRegistracija = document
    .getElementById("usernameRegister")
    .value.trim();

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
  const usernameRegistracija = document
    .getElementById("usernameRegister")
    .value.trim();

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
  const emailRegistracija = document.getElementById("emali").value.trim();

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
  const emailRegistracija = document.getElementById("emali").value.trim();

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
  const emailRegistracija = document.getElementById("emali").value.trim();

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
  const passwordRegistracija = document
    .getElementById("passwordRegister")
    .value.trim();
  const passwordRegistracijaRepeat = document
    .getElementById("password-repeat")
    .value.trim();

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
  const passwordRegistracija = document
    .getElementById("passwordRegister")
    .value.trim();
  const passwordRegistracijaRepeat = document
    .getElementById("password-repeat")
    .value.trim();

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
  const passwordRegistracija = document
    .getElementById("passwordRegister")
    .value.trim();
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
