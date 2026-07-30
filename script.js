// Welcome Message
console.log("Welcome To Rishi Matka");

// Live Clock
function updateClock() {
    const now = new Date();

    let h = now.getHours().toString().padStart(2, "0");
    let m = now.getMinutes().toString().padStart(2, "0");
    let s = now.getSeconds().toString().padStart(2, "0");

    document.title = `🟢 ${h}:${m}:${s} | Aditya Matka`;
}

setInterval(updateClock, 1000);

// Lucky Number Animation
const lucky = document.querySelector(".number");

let numbers = ["01","12","25","39","47","58","66","78","89","99","XX"];

setInterval(() => {
    lucky.innerHTML =
    numbers[Math.floor(Math.random()*numbers.length)];
},2000);

// Game Card Animation
const cards = document.querySelectorAll(".game-card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
card.style.borderColor="#FFD700";
card.style.boxShadow="0 0 20px gold";

setTimeout(()=>{
card.style.borderColor="#444";
card.style.boxShadow="none";
},800);

});
});
