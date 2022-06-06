let currentvalue = 0
let calculation = ""
let operations = []
let buttons = [0,1,2,3,4,5,6,7,8,9]
let history = []

function saveDigit(digit) {
   if (currentvalue === 0) {
        currentvalue = buttons[digit]
   } else {
        currentvalue += "" + buttons[digit]
   }
   displayDigits()
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
     history.push(currentvalue)
     currentvalue = 0
     //Mit Stack arbeiten
}

function displayDigits() {
     document.getElementById("display-resultat").textContent = currentvalue
}

function setToZero() {
     currentvalue = 0
     window.location.reload()
}