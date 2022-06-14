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
    setTimeout(function () {
        const indexvalue1 = JSON.stringify(Math.floor(Math.random() * 3))
        const indexvalue2 = JSON.stringify(Math.floor(Math.random() * 3))

        document.getElementById("index").textContent = indexvalue1 + indexvalue2

        if(indexvalue1 + indexvalue2 === "00") {
            if (checkField(document.getElementById("top-left"))) {
                document.getElementById("top-left").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "01") {
            if (checkField(document.getElementById("top"))) {
                document.getElementById("top").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "02") {
            if (checkField(document.getElementById("top-right"))) {
                document.getElementById("top-right").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "10") {
            if (checkField(document.getElementById("middle-left"))) {
                document.getElementById("middle-left").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "11") {
            if (checkField(document.getElementById("middle"))) {
                document.getElementById("middle").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "12") {
            if (checkField(document.getElementById("middle-right"))) {
                document.getElementById("middle-right").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "20") {
            if (checkField(document.getElementById("bottom-left"))) {
                document.getElementById("bottom-left").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "21") {
            if (checkField(document.getElementById("bottom"))) {
                document.getElementById("bottom").textContent = "0"
            } else {
                setRandomZero()
            }
        } else if(indexvalue1 + indexvalue2 === "22") {
            if (checkField(document.getElementById("bottom-right"))) {
                document.getElementById("bottom-right").textContent = "0"
            } else {
                setRandomZero()
            }
        }
    },5000)
}

function checkField(param) {
     if(param.innerHTML === "X" || param.innerHTML === "O") {
         return false
     }
     return true
}