const cards = document.getElementsByClassName("card");

console.log(cards);

for( let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", (e)=>{
        e.preventDefault();
        alert("click");
        sessionStorage.setItem("subtask",cards[i].getElementsByTagName("h3")[0].innerHTML);
        window.location.href = "subtask-overview.html";
    })
}