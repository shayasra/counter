let number = document.querySelector("h1");

let count = 0;

let countBtn = document.querySelector(".count");
let resetBtn = document.querySelector(".reset");

countBtn.addEventListener("click" , (e) => {
    count++;
    number.textContent = Number(count).toLocaleString("en");
    console.log(count);
});

resetBtn.addEventListener("click", (e) => {
    count = 0;
    number.textContent = count;
    console.log(count);
})