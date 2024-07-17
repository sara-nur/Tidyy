const cancelButton = document.getElementById("CancelBtn");
const modalRegButton = document.getElementById("RegisterModalbtn");
const createBtn = document.getElementById("createButton");
const createMod = document.getElementById("createModal");

if(createBtn != null)
    createBtn.addEventListener("click",()=>{
    createMod.style.display="block";
 });


 if(cancelButton != null)
    cancelButton.addEventListener("click",()=>{
    console.log("I DID IT");
    createMod.style.display = "none";
 });



 if(modalRegButton != null)
    modalRegButton.addEventListener("click",()=>{
    createMod.style.display = "none";
 });



const dropDownLists1 = document.getElementById("firstddl");
const dropDownListContent1 = document.getElementById("firstContentddl");
if(dropDownLists1 != null)
dropDownLists1.addEventListener("click",()=>{
    
    if(dropDownListContent1.style.display =="block")
        dropDownListContent1.style.display="none";
    else if(dropDownListContent1.style.display="none")
        dropDownListContent1.style.display="block";
});

const dropDownLists2 = document.getElementById("Secondddl");
const dropDownListContent2 = document.getElementById("SecondContentddl");
if(dropDownListContent2 != null)
dropDownLists2.addEventListener("click",()=>{
    
    if(dropDownListContent2.style.display =="block")
        dropDownListContent2.style.display="none";
    else if(dropDownListContent2.style.display="none")
        dropDownListContent2.style.display="block";
});

const profileButton = document.getElementById("profileOptions");
const profileDropDown= document.getElementById("proflieDropDown");

if(profileButton != null)
    profileButton.addEventListener("click",()=>{
        
        if(profileDropDown.style.display =="block")
            profileDropDown.style.display="none";
        else if(profileDropDown.style.display="none")
            profileDropDown.style.display="block";
    });

const memberBtn = document.getElementById("Member");
const memberModal = document.getElementById("memberMod");

if(memberBtn != null)
    memberBtn.addEventListener("click", ()=>{
        memberModal.style.display = "block"
    })

if(cancelButton != null)
    cancelButton.addEventListener("click",()=>{
    memberModal.style.display = "none";
 });



const modalddbtn = document.getElementById("modalddl");
const modalddcontent = document.getElementById("modalcontentddl");


if(modalddbtn != null)
    modalddbtn.addEventListener("click",()=>{
        
        if(modalddcontent.style.display =="block")
            modalddcontent.style.display="none";
        else if(modalddcontent.style.display="none")
            modalddcontent.style.display="block";
    });