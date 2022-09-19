let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let counterEl = document.getElementById("save-total")
let resetEl = document.getElementById("reset-btn")
let count = 0
let numbers = []
let total = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    let calc = count
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
    numbers.push(calc)
    console.log(numbers)
    
    
}

function counter() {    

counterEl.textContent = "Total: "
total = 0
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
}
counterEl.textContent += total
console.log(total)
}

function reset() {
    count = 0
    numbers = []
    total = 0
    counterEl.textContent = "Total: "
    saveEl.textContent = "Previous entries: "
}



