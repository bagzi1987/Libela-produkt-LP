// SHOW / HIDE LOZINKU
let seePassword = () => {
    let eye = document.getElementById("eye");
    let inputPassword = document.getElementById("password");

    if(inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
}


// VALIDATE FORM
let validateForm = () =>  {
    let btn = document.getElementById("submit");
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value = "stojan" && password.value === "stojan123") {
        window.location.href = "home.html";
    } else {
        alert("Pogresan korisnik ili lozinka");
        username = document.getElementById("username") = "";
        password = document.getElementById("username") = "";
    }
}



// DATUM
const datum = new Date();

let dan = datum.getDate();
let mesec = datum.getMonth() + 1;
let godina = datum.getFullYear();

if(dan < 10) {
    dan = "0" + dan;
} 

if(mesec < 10) {
    mesec = "0" + mesec;
}
let danasnjiDatum = `${dan}.${mesec}.${godina}`;
document.getElementById("displayDate").innerHTML = danasnjiDatum;



// LOGED IN USER NAME
let username = document.getElementById("username").value;
let greeting = document.getElementById("greeting");
document.getElementById("greeting").innerHTML =  username;



// LOG OUT
function logOut() {
    let izlaz = document.getElementById("log");
    window.location.href = "index.html";
}
