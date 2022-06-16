let callfunction = false
let playerturns = 0
let computerturns = 0
let gamefield = [["","",""],["","",""],["","",""]]

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
            setSymbolOnPos("top-left","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("top","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("top-right","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("middle-left","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("middle","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("middle-right","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("bottom-left","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("bottom","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
            setSymbolOnPos("bottom-right","X")
            playerturns++
            declareWinner(playerturns, computerturns)
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
    /*setTimeout(function () {
        const indexvalue1 = JSON.stringify(Math.floor(Math.random() * 3))
        const indexvalue2 = JSON.stringify(Math.floor(Math.random() * 3))

        if(indexvalue1 + indexvalue2 === "00") {
            if (checkField(document.getElementById("top-left"))) {
                document.getElementById("top-left").style.setProperty("visibility","visible")
                document.getElementById("top-left").textContent = "0 "
                setSymbolOnPos("top-left","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("top-left")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "01") {
            if (checkField(document.getElementById("top"))) {
                document.getElementById("top").style.setProperty("visibility","visible")
                document.getElementById("top").textContent = "0 "
                setSymbolOnPos("top","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("top")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "02") {
            if (checkField(document.getElementById("top-right"))) {
                document.getElementById("top-right").style.setProperty("visibility","visible")
                document.getElementById("top-right").textContent = "0 "
                setSymbolOnPos("top-right","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("top-right")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "10") {
            if (checkField(document.getElementById("middle-left"))) {
                document.getElementById("middle-left").style.setProperty("visibility","visible")
                document.getElementById("middle-left").textContent = "0 "
                setSymbolOnPos("middle-left","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("middle-left")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "11") {
            if (checkField(document.getElementById("middle"))) {
                document.getElementById("middle").style.setProperty("visibility","visible")
                document.getElementById("middle").textContent = "0 "
                setSymbolOnPos("middle","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("middle")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "12") {
            if (checkField(document.getElementById("middle-right"))) {
                document.getElementById("middle-right").style.setProperty("visibility","visible")
                document.getElementById("middle-right").textContent = "0 "
                setSymbolOnPos("middle-right","0")
            } else {
                callError("middle-right")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "20") {
            if (checkField(document.getElementById("bottom-left"))) {
                document.getElementById("bottom-left").style.setProperty("visibility","visible")
                document.getElementById("bottom-left").textContent = "0 "
                setSymbolOnPos("bottom-left","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("bottom-left")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "21") {
            if (checkField(document.getElementById("bottom"))) {
                document.getElementById("bottom").style.setProperty("visibility","visible")
                document.getElementById("bottom").textContent = "0 "
                setSymbolOnPos("bottom","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("bottom")
                setRandomZeroOnField()
            }
        } else if(indexvalue1 + indexvalue2 === "22") {
            if (checkField(document.getElementById("bottom-right"))) {
                document.getElementById("bottom-right").style.setProperty("visibility","visible")
                document.getElementById("bottom-right").textContent = "0 "
                setSymbolOnPos("bottom-right","0")
                computerturns++
                declareWinner(playerturns, computerturns)
            } else {
                callError("bottom-right")
                setRandomZeroOnField()
            }
        }
    },5000)*/
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

function declareWinner(playerturns,computerturns) {
        let winner = " "
        let fields = []
        if (playerturns > 2 || computerturns > 2) {
            alert("True")
            //Checking vertically
            if (gamefield[0][0] === gamefield[0][1] && gamefield[0][1] === gamefield[0][2]) {
                alert("1st row")
                if (gamefield[0][0] === "X") {
                    winner = "Player"
                    fields = ["top-left","top","top-right"]
                } else {
                    winner = "Computer"
                    fields = ["top-left","top","top-right"]
                }
            } else if (gamefield[1][0] === gamefield[1][1] && gamefield[1][1] === gamefield[1][2]) {
                alert("2nd row")
                if (gamefield[1][0] === "X") {
                    winner = "Player"
                    fields = ["middle-left","middle","middle-right"]
                } else {
                    winner = "Computer"
                    fields = ["middle-left","middle","middle-right"]
                }
            } else if (gamefield[2][0] === gamefield[2][1] && gamefield[2][1] === gamefield[2][2]) {
                alert("True2")
                if (gamefield[2][0] === "X") {
                    alert("Entered")
                    winner = "Player"
                    fields = ["bottom-left","bottom","bottom-right"]
                } else {
                    winner = "Computer"
                    fields = ["bottom-left","bottom","bottom-right"]
                }
            }
            //Checking horizontally
            if (gamefield[0][0] === gamefield[1][0] && gamefield[1][0] === gamefield[2][0]) {
                if (gamefield[0][0] === "X") {
                    winner = "Player"
                    fields = ["top-left","middle-left","bottom-left"]
                } else {
                    winner = "Computer"
                    fields = ["top-left","middle-left","bottom-left"]
                }
            } else if (gamefield[0][1] === gamefield[1][1] && gamefield[1][1] === gamefield[2][1]) {
                if (gamefield[0][1] === "X") {
                    winner = "Player"
                    fields = ["top","middle","bottom"]
                } else {
                    winner = "Computer"
                    fields = ["top","middle","bottom"]
                }
            } else if (gamefield[0][2] === gamefield[1][2] && gamefield[1][2] === gamefield[2][2]) {
                if (gamefield[0][2] === "X") {
                    winner = "Player"
                    fields = ["top-right","middle-right","bottom-right"]
                } else {
                    winner = "Computer"
                    fields = ["top-right","middle-right","bottom-right"]
                }
            }
            //Checking Diagonally
            if (gamefield[0][0] === gamefield[1][1] && gamefield[1][1] === gamefield[2][2]) {
                if (gamefield[0][0] === "X") {
                    winner = "Player"
                    fields = ["top-left","middle","bottom-right"]
                } else {
                    winner = "Computer"
                    fields = ["top-left","middle","bottom-right"]
                }
            } else if (gamefield[0][2] === gamefield[1][1] && gamefield[1][1] === gamefield[0][2]) {
                if (gamefield[0][2] === "X") {
                    winner = "Player"
                    fields = ["top-right","middle","bottom-left"]
                } else {
                    winner = "Computer"
                    fields = ["top-right","middle","bottom-left"]
                }
            }
        }
        if(winner !== " ") {
            showWinnerOnPage(winner, fields)
        }
}

function showWinnerOnPage(winner, fields) {
    document.getElementById(fields[0]).style.setProperty("background-color","green")
    document.getElementById(fields[1]).style.setProperty("background-color","green")
    document.getElementById(fields[2]).style.setProperty("background-color","green")
}

function setSymbolOnPos(pos,symbol) {
    switch (pos) {
        case "top-left":
            gamefield[0][0] = symbol
            break
        case "top":
            gamefield[0][1] = symbol
            break
        case "top-right":
            gamefield[0][2] = symbol
            break
        case "middle-left":
            gamefield[1][0] = symbol
            break
        case "middle":
            gamefield[1][1] = symbol
            break
        case "middle-right":
            gamefield[1][2] = symbol
            break
        case "bottom-left":
            gamefield[2][0] = symbol
            break
        case "bottom":
            gamefield[2][1] = symbol
            break
        case "bottom-right":
            gamefield[2][2] = symbol
            break
        default :
            break
    }
}

