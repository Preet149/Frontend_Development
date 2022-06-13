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
         default: break;
     }

}