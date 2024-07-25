const cards = document.querySelectorAll(".team-card");

console.log(cards);

for( let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", (e)=>{
        e.preventDefault();
            sessionStorage.setItem("team",cards[i].getElementsByTagName("p")[0].innerHTML);
            window.location.href = "team-overview.html";
    })
}