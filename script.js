let bottomScreen = document.getElementById('bottomScreen')
let topScreen = document.getElementById('topScreen')
const button = document.getElementsByClassName('num')
const operator = document.getElementsByClassName('operator')
//loop for when you click the numbers they are added to bottom screen
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        if (bottomScreen.innerHTML.length > 20) return//can't enter a number with a length more than 20

        bottomScreen.innerHTML = bottomScreen.innerHTML + button[i].id
    })
}
//loop for when you click operators
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        if (bottomScreen.innerHTML == "" && topScreen.innerHTML == "") return
        if (bottomScreen.innerHTML == "" && topScreen.innerHTML !== "") {
            topScreen.innerHTML = topScreen.innerHTML.slice(0, topScreen.innerHTML.length - 1)
            topScreen.innerHTML = topScreen.innerHTML + operator[i].id
            return
        }
        if (bottomScreen.innerHTML !== "" && topScreen.innerHTML !== "") {
            topScreen.innerHTML = operation(bottomScreen.innerHTML, topScreen.innerHTML) + " " + operator[i].id
            bottomScreen.innerHTML = ""
            return
        }
        topScreen.innerHTML = bottomScreen.innerHTML + ' ' + operator[i].id
        bottomScreen.innerHTML = ""
    })
}
//equals
const equals = document.getElementById('equals')
equals.addEventListener('click', () => {
    if (bottomScreen.innerHTML != "" && topScreen.innerHTML != "") {
        bottomScreen.innerHTML = operation(bottomScreen.innerHTML, topScreen.innerHTML)
        topScreen.innerHTML = ""
    }
})

//all clear (ac)
const ac = document.getElementById('ac')
ac.addEventListener('click', () => {
    topScreen.innerHTML = ""
    bottomScreen.innerHTML = ""
})
//delete last number in bottom screen
const del = document.getElementById('del')
del.addEventListener('click', () =>
    bottomScreen.innerHTML = bottomScreen.innerHTML.slice(0, bottomScreen.innerHTML.length - 1))

const dot = document.getElementById('dot')
dot.addEventListener('click', () => {
    if (!haveDot(bottomScreen.innerHTML)) {
        bottomScreen.innerHTML = bottomScreen.innerHTML + "."
    }



})
function haveDot(str) {
    let haveDot = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ".") haveDot = true

    }
    return haveDot
}

//operation function 
function operation(botNum, topNum) {
    let op = topNum.charAt(topNum.length - 1)
    topNum = topNum.slice(0, topNum.length - 1)
    if (op == "+") return Number(topNum) + Number(botNum);
    else if (op == "*") return Number(topNum) * Number(botNum);
    else if (op == "-") return Number(topNum) - Number(botNum);
    else if (op == "/") return Number(topNum) / Number(botNum);
    else if (op == "%") return Number(topNum) % Number(botNum);
}




