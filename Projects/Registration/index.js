let mail = document.getElementById("mail-field")
let passwEl = document.getElementById("passw-field")

function check() {
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwEl.value)) {
        document.getElementById("passw").textContent = "Week password!"
    }
    
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(passwEl.value)) {
        document.getElementById("mail").textContent = "Invalid mail"
    }

} 


