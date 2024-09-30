let timerElement = document.getElementById("timer");
let inputEnterElement = document.getElementById("defuser");
let countdown = 10;

let intervalId = setInterval(function() {
    if (countdown === 0) {
        timerElement.textContent = "BOOM";
        clearInterval(intervalId);
    }
    else {
        countdown -= 1;
        timerElement.textContent = countdown;
    }
}, 1000);

inputEnterElement.addEventListener("keydown", function(event) {
    let bombDefuserText = inputEnterElement.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
        timerElement.textContent = "You did it!";
        clearInterval(intervalId);
    }
});