let countersec1 = 0
let countersec2 = 0
let countermin1 = 0
let countermin2 = 0
let counterhr1 = 0
let counterhr2 = 0
let pause = false
let changecolor = false

//Sets the timer back to 00 00 00
function settoinitialstate() {
   window.location.reload()
}

function pauseCountdown() {
    pause = (pause === false)? true : false
}

function startCountdown() {
    const stopinterval = setInterval(function(){
        if (counterhr1 + "" + counterhr2 !== "00" || countermin1 + "" + countermin2 !== "00" || countersec1 + "" + countersec2 !== "00") {
            if (!pause) {
                setCountdown()
                decrementSeconds()
            }
        } else {
            clearInterval(stopinterval)
            const music = new Audio("CycleBellRing.mp3")
            music.play().then(r => 0)
            setInterval(function () {
                if (!changecolor) {
                    document.getElementById("hours").style.setProperty("color","black")
                    document.getElementById("minutes").style.setProperty("color","black")
                    document.getElementById("seconds").style.setProperty("color","black")
                    changecolor = true
                } else {
                    document.getElementById("hours").style.setProperty("color","red")
                    document.getElementById("minutes").style.setProperty("color","red")
                    document.getElementById("seconds").style.setProperty("color","red")
                    changecolor = false
                }
            },1000)
        }
    },1000)
}

function decrementSeconds() {
    if (counterhr1 + "" + counterhr2 !== "00" || countermin1 + "" + countermin2 !== "00" || countersec1 + "" + countersec2 !== "00") {
        countersec2--
        if (countersec2 < 0) {
            if (countersec1 > 0) {
                countersec2 = 9
                countersec1--
            } else {
                countersec1 = 5
                countersec2 = 9
                decrementMinutes()
            }
        }
        setCountdown()
    }
}

function decrementMinutes() {
    if (counterhr1 + "" + counterhr2 !== "00" || countermin1 + "" + countermin2 !== "00") {
        countermin2--
        if (countermin2 < 0) {
            if (countermin1 > 0) {
                countermin2 = 9
                countermin1--
            } else {
                countermin1 = 5
                countermin2 = 9
                decrementHours()
            }
        }
    }
    setCountdown()
}

function decrementHours() {
     counterhr2--
    if (counterhr2 < 0) {
        if (counterhr1 > 0) {
            counterhr1--
            counterhr2 = 9
        } else {
            counterhr2 = 0
        }
    }
    setCountdown()
}

function incrementSeconds() {
    countersec2++
    if (countersec2 > 9) {
        countersec2 = 0
        countersec1++

        if (countersec1 + "" + countersec2 == 60) {
           incrementMinutes()
        }
    }
    setCountdown()
}

function incrementMinutes() {
    countermin2++
    if (countersec1 + "" + countersec2 == 60) {
        countersec1 = countersec2 = 0
    }
    if (countermin2 > 9) {
        countermin2 = 0
        countermin1++

        if (countermin1 + "" + countermin2 == 60) {
            incrementHours()
        }
    }
    setCountdown()
}

function incrementHours() {
    counterhr2++
    if (countermin1 + "" + countermin2 == 60) {
        countermin1 = countermin2 = 0
    }
    if (counterhr2 > 9) {
        counterhr1++
        counterhr2 = 0
    }
    setCountdown()
}

function setCountdown() {
    document.getElementById("seconds").textContent = countersec1 + "" + countersec2
    document.getElementById("minutes").textContent = countermin1 + "" + countermin2
    document.getElementById("hours").textContent = counterhr1 + "" + counterhr2
}





