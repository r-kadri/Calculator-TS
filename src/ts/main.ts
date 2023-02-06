const cScreen = document.getElementsByClassName("screen")[0];

let clearButton = document.getElementsByClassName("clear")[0];
clearButton.addEventListener('click', () => clear())

let keys = document.querySelectorAll(".keys span");
keys.forEach((key) => {
    key.addEventListener('click', () => cScreen.innerHTML = key.innerHTML);
})

function clear() {
    cScreen.innerHTML = "";
}