const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log("Buttons found:", btns.length); // Should say 3 in the console

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // This will alert you if the click is registered
        console.log("Button clicked!"); 

        if (btn.classList.contains("decrease")) count--;
        else if (btn.classList.contains("increase")) count++;
        else count = 0;

        value.textContent = count;
    });
});