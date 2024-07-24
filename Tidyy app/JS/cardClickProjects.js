const cards = document.querySelectorAll(".card");

for( let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", (e)=>{
        e.preventDefault();
            sessionStorage.setItem("proj",cards[i].getElementsByTagName("h3")[0].innerHTML);
            window.location.href = "projects-screen.html";
    })
}