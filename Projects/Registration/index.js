const mailEl = document.getElementById("mail-field")
const passwEl = document.getElementById("passw-field")
const confirm = document.getElementById("passw-field2")
const nameEl = document.getElementById("name-field")
const surnameEl = document.getElementById("surname-field")
const dateEl = document.getElementById("date-field")
let count = 1




function check() {
    if (nameEl.value === "") {
        document.getElementById("name").textContent = "*"
        messageError()
    } else {
        document.getElementById("name").textContent = " "
    }

    if (surnameEl.value === "")  {
        document.getElementById("surname").textContent = "*"
        messageError()
    } else {
        document.getElementById("surname").textContent = " "
    }

    if (dateEl.value === "") {
        document.getElementById("date").textContent = "*"
        messageError()
    } else {
        document.getElementById("date").textContent = " "
    }

    if (mailEl.value === "") {
        document.getElementById("mail").textContent = "*"
        messageError()
    }
    else if (!/^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mailEl.value)) {
        document.getElementById("mail").textContent = "Invalid Email!"
    } else {
        document.getElementById("mail").textContent = " "
    }

    if (passwEl.value === "") {
        document.getElementById("passw").textContent = "*"
        messageError()
    }
    else if (!/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(passwEl.value)) {
       document.getElementById("passw").textContent = "The password must be minimum 8 in length and contain atleast one uppercase letter, one lowercase letter, one number and one special character!"
    } else {
        document.getElementById("passw").textContent = " "
    }

    if (confirm.value === "") {
       document.getElementById("passw2").textContent = "*"
       messageError()
    }
    else if (passwEl.value === confirm.value) { // Es gibt ein Problem mit dieser Selection.
        document.getElementById("passw2").textContent = " "
    } else {
        document.getElementById("passw2").textContent = "The password doesn't match with your given password!"
    }
}

function messageError() {
        document.getElementById("error").textContent = "All the fields (*) must be filled!"
}
