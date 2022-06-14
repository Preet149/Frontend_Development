let callfunction = false

function switchToNextPage() {
    window.location.href="mainpage.html"
}

function returnToHomePage() {
    window.location.href="homepage.html"
}

function setCrossOnField() {
    let pos = document.getElementById("position").value

    if(pos === "top-left") {
        if (checkField(document.getElementById("top-left"))) {
            document.getElementById("top-left").style.setProperty("visibility","visible")
            document.getElementById("top-left").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "top") {
        if (checkField(document.getElementById("top"))) {
            document.getElementById("top").style.setProperty("visibility","visible")
            document.getElementById("top").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "top-right") {
        if (checkField(document.getElementById("top-right"))) {
            document.getElementById("top-right").style.setProperty("visibility","visible")
            document.getElementById("top-right").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "middle-left") {
        if (checkField(document.getElementById("middle-left"))) {
            document.getElementById("middle-left").style.setProperty("visibility","visible")
            document.getElementById("middle-left").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "middle") {
        if (checkField(document.getElementById("middle"))) {
            document.getElementById("middle").style.setProperty("visibility","visible")
            document.getElementById("middle").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "middle-right") {
        if (checkField(document.getElementById("middle-right"))) {
            document.getElementById("middle-right").style.setProperty("visibility","visible")
            document.getElementById("middle-right").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "bottom-left") {
        if (checkField(document.getElementById("bottom-left"))) {
            document.getElementById("bottom-left").style.setProperty("visibility","visible")
            document.getElementById("bottom-left").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "bottom") {
        if (checkField(document.getElementById("bottom"))) {
            document.getElementById("bottom").style.setProperty("visibility","visible")
            document.getElementById("bottom").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    } else if(pos === "bottom-right") {
        if (checkField(document.getElementById("bottom-right"))) {
            document.getElementById("bottom-right").style.setProperty("visibility","visible")
            document.getElementById("bottom-right").textContent = "X "
            document.getElementById("error").textContent = ""
            callfunction = true
        } else {
            document.getElementById("error").textContent = "The field " + pos + " is already occupied!"
            callError(pos)
            callfunction = false
        }
    }

    if(callfunction) {
        setRandomZeroOnField()
    }
}

function setRandomZeroOnField() {
    setTimeout(function () {
        const indexvalue1 = JSON.stringify(Math.floor(Math.random() * 3))
        const indexvalue2 = JSON.stringify(Math.floor(Math.random() * 3))

        if(indexvalue1 + indexvalue2 === "00") {
            if (checkField(document.getElementById("top-left"))) {
                document.getElementById("top-left").style.setProperty("visibility","visible")
                document.getElementById("top-left").textContent = "0 "
            } else {
                callError("top-left")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "01") {
            if (checkField(document.getElementById("top"))) {
                document.getElementById("top").style.setProperty("visibility","visible")
                document.getElementById("top").textContent = "0 "
            } else {
                callError("top")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "02") {
            if (checkField(document.getElementById("top-right"))) {
                document.getElementById("top-right").style.setProperty("visibility","visible")
                document.getElementById("top-right").textContent = "0 "
            } else {
                callError("top-right")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "10") {
            if (checkField(document.getElementById("middle-left"))) {
                document.getElementById("middle-left").style.setProperty("visibility","visible")
                document.getElementById("middle-left").textContent = "0 "
            } else {
                callError("middle-left")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "11") {
            if (checkField(document.getElementById("middle"))) {
                document.getElementById("middle").style.setProperty("visibility","visible")
                document.getElementById("middle").textContent = "0 "
            } else {
                callError("middle")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "12") {
            if (checkField(document.getElementById("middle-right"))) {
                document.getElementById("middle-right").style.setProperty("visibility","visible")
                document.getElementById("middle-right").textContent = "0 "
            } else {
                callError("middle-right")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "20") {
            if (checkField(document.getElementById("bottom-left"))) {
                document.getElementById("bottom-left").style.setProperty("visibility","visible")
                document.getElementById("bottom-left").textContent = "0 "
            } else {
                callError("bottom-left")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "21") {
            if (checkField(document.getElementById("bottom"))) {
                document.getElementById("bottom").style.setProperty("visibility","visible")
                document.getElementById("bottom").textContent = "0 "
            } else {
                callError("bottom")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "22") {
            if (checkField(document.getElementById("bottom-right"))) {
                document.getElementById("bottom-right").style.setProperty("visibility","visible")
                document.getElementById("bottom-right").textContent = "0 "
            } else {
                callError("bottom-right")
                setRandomZeroOnField()
            }
        }
    },5000)
}

function checkField(param) {
     return param.textContent === "00"
}

function callError(pos) {
    let changecolor = true
    setInterval(function () {
        if(changecolor) {
            document.getElementById(pos).style.setProperty("background-color","red")
            changecolor = false
        } else {
            document.getElementById(pos).style.setProperty("background-color","burlywood")
            changecolor = false
        }
    },1000)
}