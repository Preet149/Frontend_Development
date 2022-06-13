function switchToNextPage() {
    window.location.href="mainpage.html"
}

function returnToHomePage() {
    window.location.href="homepage.html"
}

function setCross() {
     let pos = document.getElementById("position").value

     switch(pos) {
         case "top-left": document.getElementById("top-left").textContent = "X"
                          break;
         case "top": document.getElementById("top").textContent = "X"
                     break;
         case "top-right": document.getElementById("top-right").textContent = "X"
                           break;
         case "middle-left": document.getElementById("middle-left").textContent = "X"
                             break;
         case "middle": document.getElementById("middle").textContent = "X"
                        break;
         case "middle-right": document.getElementById("middle-right").textContent = "X"
                              break;
         case "bottom-left": document.getElementById("bottom-left").textContent = "X"
                             break;
         case "bottom": document.getElementById("bottom").textContent = "X"
                        break;
         case "bottom-right": document.getElementById("bottom-right").textContent = "X"
                              break;
     }
   setRandomZero()
}

function setRandomZero() {
    const indexvalue1 = JSON.stringify(Math.floor(Math.random() * 3))
    const indexvalue2 = JSON.stringify(Math.floor(Math.random() * 3))

    switch (indexvalue1 + indexvalue2) {

        case "00":
            document.getElementById("top-left").textContent = checkField(document.getElementById("top-left"))
            break;
        case "01":
            document.getElementById("top").textContent = checkField(document.getElementById("top"))
            break;
        case "02":
            document.getElementById("top-right").textContent = checkField(document.getElementById("top-right"))
            break;
        case "10":
            document.getElementById("middle-left").textContent = checkField(document.getElementById("middle-left"))
            break;
        case "11":
            document.getElementById("middle").textContent = checkField(document.getElementById("middle"))
            break;
        case "12":
            document.getElementById("middle-right").textContent = checkField(document.getElementById("middle-right"))
            break;
        case "20":
            document.getElementById("bottom-left").textContent = checkField(document.getElementById("bottom-left"))
            break;
        case "21":
            document.getElementById("bottom").textContent = checkField(document.getElementById("bottom"))
            break;
        case "22":
            document.getElementById("bottom-right").textContent = checkField(document.getElementById("bottom-right"))
            break;
    }
}

function checkField(param) {
     if(param.innerHTML === "X" || param.innerHTML === "O") {
         setRandomZero()
     } else {
         return "O"
     }
}