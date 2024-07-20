const cancelButton = document.getElementById("CancelBtn");
const modalRegButton = document.getElementById("RegisterModalbtn");
const createBtn = document.getElementById("createButton");
const createMod = document.getElementById("createModal");

if (createBtn != null)
  createBtn.addEventListener("click", () => {
    createMod.style.display = "block";
  });

if (cancelButton != null)
  cancelButton.addEventListener("click", () => {
    console.log("I DID IT");
    createMod.style.display = "none";
  });

const dropDownLists1 = document.getElementById("firstddl");
const dropDownListContent1 = document.getElementById("firstContentddl");
if (dropDownLists1 != null)
  dropDownLists1.addEventListener("click", () => {
    if (dropDownListContent1.style.display == "block")
      dropDownListContent1.style.display = "none";
    else if ((dropDownListContent1.style.display = "none"))
      dropDownListContent1.style.display = "block";
  });

const dropDownLists2 = document.getElementById("Secondddl");
const dropDownListContent2 = document.getElementById("SecondContentddl");
if (dropDownListContent2 != null)
  dropDownLists2.addEventListener("click", () => {
    if (dropDownListContent2.style.display == "block")
      dropDownListContent2.style.display = "none";
    else if ((dropDownListContent2.style.display = "none"))
      dropDownListContent2.style.display = "block";
  });

const profileButton = document.getElementById("profileOptions");
const profileDropDown = document.getElementById("proflieDropDown");

if (profileButton != null)
  profileButton.addEventListener("click", () => {
    if (profileDropDown.style.display == "block")
      profileDropDown.style.display = "none";
    else if ((profileDropDown.style.display = "none"))
      profileDropDown.style.display = "block";
  });

const memberBtn = document.getElementById("Member");
const memberModal = document.getElementById("memberMod");

if (memberBtn != null)
  memberBtn.addEventListener("click", () => {
    memberModal.style.display = "block";
  });

if (cancelButton != null)
  cancelButton.addEventListener("click", () => {
    memberModal.style.display = "none";
  });

const modalddbtn = document.getElementById("modalddl");
const modalddcontent = document.getElementById("modalcontentddl");

if (modalddbtn != null)
  modalddbtn.addEventListener("click", () => {
    if (modalddcontent.style.display == "block")
      modalddcontent.style.display = "none";
    else if ((modalddcontent.style.display = "none"))
      modalddcontent.style.display = "block";
  });

const modalddbtn2 = document.getElementById("modalddl2");
const modalddcontent2 = document.getElementById("modalcontentddl2");

if (modalddbtn2 != null)
  modalddbtn2.addEventListener("click", () => {
    if (modalddcontent2.style.display == "block")
      modalddcontent2.style.display = "none";
    else if ((modalddcontent2.style.display = "none"))
      modalddcontent2.style.display = "block";
  });

const modalddbtn3 = document.getElementById("modalddl3");
const modalddcontent3 = document.getElementById("modalcontentddl3");

if (modalddbtn3 != null)
  modalddbtn3.addEventListener("click", () => {
    if (modalddcontent3.style.display == "block")
      modalddcontent3.style.display = "none";
    else if ((modalddcontent3.style.display = "none"))
      modalddcontent3.style.display = "block";
  });

const teamBtn = document.getElementById("teamBtn");

if (teamBtn != null)
  teamBtn.addEventListener("click", () => {
    window.location.href = "team-overview.html";
  });

function moveToOverview() {
  window.location.href = "team-overview.html";
}

const calendarBtn = document.getElementById("calendarBtn");

if (calendarBtn != null)
  calendarBtn.addEventListener("click", () => {
    window.location.href = "calendar-screen.html";
  });

function moveToOverview() {
  window.location.href = "calendar-screen.html";
}
