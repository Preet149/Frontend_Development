let tmp = ""
let calculation = ""
let actualresult = 0
let operations = []
let buttons = [0,1,2,3,4,5,6,7,8,9]
let history = []

function saveDigit(digit) {
   if (tmp === " ") {
        tmp = buttons[digit]
   } else {
        tmp += "" + buttons[digit]
   }
   calculation += buttons[digit]
   history.push(tmp)
   displayCalculation()
}

function saveOperation(operation) {
     switch(operation) {
          case '%' : operations.push(operation)
                     break
          case 'x' : operations.push(operation)
                     break
          case '-' : operations.push(operation)
                     break
          case '+' : operations.push(operation)
                     break
          default:
     }
     saveCurrentValue()
}

function saveCurrentValue() {
     if (history.length === 2) {
         if (operations[0] === '+') {
             actualresult = Number(history[0]) + Number(history[1])
             operations.shift()
             calculation = actualresult + " " + operations[0] + " "
             history.push(actualresult)
             history.shift()
             history.shift()
         } else if (operations[0] === '-') {
             actualresult = Number(history[0]) - Number(history[1])
             operations.shift()
             calculation = actualresult + " " + operations[0] + " "
             history.push(actualresult)
             history.shift()
             history.shift()
         } else if (operations[0] === 'x') {
             actualresult = Number(history[0]) * Number(history[1])
             operations.shift()
             calculation = actualresult + " " + operations[0] + " "
             history.push(actualresult)
             history.shift()
             history.shift()
         }
     } else {
         calculation += " " + operations[0] + " "
     }
    tmp = ""
    displayCalculation()
    displayResult()
}

function changeSign() {
    tmp = Number(tmp) * -1
    calculation = tmp
    displayCalculation()
}

function equalTo() {
    actualresult = Number(history[0]) + Number(history[1])
    calculation += " = " + actualresult
    displayCalculation()
    displayResult()
}

function displayResult() {
    document.getElementById("display-result").textContent = JSON.stringify(actualresult)
}

function displayCalculation() {
     document.getElementById("display-calculation").textContent = calculation
}

function setToZero() {
    window.location.reload()
}