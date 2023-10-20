let countPassenger = document.getElementById("changeNumber");
let count = 0;
function increment() {
    count += 1;
    countPassenger.textContent = count;
}


let previous = document.getElementById("previouslySaved");
function save() {
    let countStr = count + " - ";
    previous.textContent += countStr;
    countPassenger.textContent = 0;
    count = 0;
}
