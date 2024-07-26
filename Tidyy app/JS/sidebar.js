function StringifyList(name, list) {
  let newList = JSON.stringify(list);
  sessionStorage.setItem(name, newList);
}

function GetList(name) {
  let newList = sessionStorage.getItem(name);
  return JSON.parse(newList);
}

const modalHeaders = document.querySelectorAll(".button-dropdown");

const modalContent = document.querySelectorAll(".dropdown-list-content");

const User = sessionStorage.getItem("loggedInUser");
let listOrg;
let listProj;
const org = sessionStorage.getItem("org");

if (User === "sara.nur") {
  listOrg = GetList("saraOrg");
  if (org === "HCI") {
    listProj = GetList("HCIProject");
  } else {
    listProj = GetList("NewProject");
  }
} else {
  listOrg = GetList("newOrg");
  listProj = GetList("NewProject");
}

for (let i = 0; i < modalContent.length; i++) {
  modalContent[i].innerHTML = "";
  if (i === 0) {
    for (let j = 0; j < listOrg.length; j++) {
      modalContent[i].innerHTML += `
            <li>
                <a href="orgainsation-screen.html">${listOrg[j]}</a>
              </li>
        `;
    }
  }
  if (i === 1) {
    for (let j = 0; j < listProj.length; j++) {
      modalContent[i].innerHTML += `
            <li>
                <a href="orgainsation-screen.html">${listProj[j]}</a>
              </li>
        `;
    }
  }
}

addEventListener("load", () => {
  for (let i = 0; i < modalHeaders.length; i++) {
    let projects = sessionStorage.getItem("proj");
    let org = sessionStorage.getItem("org");

    if (org === null || org === "") {
      org = "Select Organization";
    }

    if (projects === null || projects === "") {
      projects = "Select projects";
    }

    if (i === 0) {
      modalHeaders[i].innerHTML = org;
    } else if (i === 1) {
      modalHeaders[i].innerHTML = projects;
    }
  }
});

for (let i = 0; i < modalHeaders.length; i++) {
  modalHeaders[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (modalContent[i].getElementsByTagName("a").length != 0) {
      modalContent[i].classList.toggle("show");
      for (let j = 0; j < modalContent[i].getElementsByTagName("a").length; j++)
        modalContent[i]
          .getElementsByTagName("a")
          [j].addEventListener("click", (e) => {
            e.preventDefault();
            sessionStorage.setItem(
              "item",
              modalContent[i].getElementsByTagName("a")[j].innerHTML
            );
            sessionStorage.setItem("header", modalHeaders[i].innerHTML);
            modalHeaders[i].innerHTML =
              modalContent[i].getElementsByTagName("a")[j].innerHTML;
            if (i === 0) {
              window.location.href = "orgainsation-screen.html";
              sessionStorage.setItem(
                "org",
                modalContent[i].getElementsByTagName("a")[j].innerHTML
              );
              sessionStorage.setItem("proj", "");
            }

            if (i === 1) {
              window.location.href = "projects-screen.html";
              sessionStorage.setItem(
                "proj",
                modalContent[i].getElementsByTagName("a")[j].innerHTML
              );
            }
          });
    } else {
      if (i === 0) {
        alert("You are not a part of any organisation");
      } else {
        alert("You dont have any projects in this organisation");
      }
    }
  });
}
