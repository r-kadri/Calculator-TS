const signs: string[] = ['+', '-'];
const prioritySigns: string[] = ['*', '/'];
const cScreen = document.getElementsByClassName("screen")[0];

let clearButton = document.getElementsByClassName("clear")[0];
clearButton.addEventListener('click', () => clear())

let lastIsSign = true;

let keys = document.querySelectorAll(".keys span");
keys.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.classList.contains("operator") || key.innerHTML == '.') {
            if(lastIsSign) return;
            lastIsSign = true;
            cScreen.innerHTML += key.innerHTML;
            return;

        } else if(key.classList.contains("eval")) {
            if(!lastIsSign)
                res();

            return;
        };
        
        lastIsSign = false;
        cScreen.innerHTML += key.innerHTML
    });
})

function clear() {
    cScreen.innerHTML = "";
    lastIsSign = true;
}

function res() {
    let stop: boolean = false;
    prioritySigns.forEach((sign) => {
        if(cScreen.innerHTML.includes(sign)) {
            stop = true;
            return;
        }
    });
    if(stop) return;

    let part = "";
    let s: string | null = null;
    let finalResult: number | null = null;
    for (let i = 0; i < cScreen.innerHTML.length; i++) {
        if(signs.some( sign => sign == cScreen.innerHTML[i])) {
            if(finalResult != null) {
                if(s == '+') {
                    finalResult += +part;
                } else {
                    finalResult -= +part;
                }
                part = "";
                s = cScreen.innerHTML[i];
            } else {
                finalResult = +part;
                s = cScreen.innerHTML[i];
                part = "";
            }
        } else {
            part += cScreen.innerHTML[i];
        }
    }
    if(finalResult) {
        if(s == '+')
            finalResult += +part;
        else
            finalResult -= +part;
        cScreen.innerHTML = finalResult?.toString();
    }
}