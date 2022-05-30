let countersec1 = 0
let countersec2 = 0
let countermin1 = 0
let countermin2 = 0
let counterhr1 = 0
let counterhr2 = 0
//Sets the timer back to 00 00 00
function settoinitialstate() {
   document.getElementById("hours").textContent = "00"
   document.getElementById("minutes").textContent = "00"
   document.getElementById("seconds").textContent = "00"
}

function settimer() {
       countersec2++

       if (countersec2 > 9) {
          countersec2 = 0
          countersec1++

          if (countersec1 + "" + countersec2 == 60) {
                countermin2++
                countersec1 = countersec2 = 0

                if (countermin2 > 9) {
                    countermin2 = 0
                    countermin1++

                    if (countermin1 + "" + countermin2 == 60) {
                        counterhr2++
                        countermin1 = countermin2 = 0
                    }
                }
            }
        }
       document.getElementById("seconds").textContent = countersec1 + "" + countersec2
       document.getElementById("minutes").textContent = countermin1 + "" + countermin2
       document.getElementById("hours").textContent = counterhr1 + "" + counterhr2
}

