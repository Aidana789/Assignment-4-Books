function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const user = {
        username: username,
        email: email,
        password: password
    }
}

function checkPassword() {
    let x = document.getElementById("password").value;
    if (x.length >= 0 && x.length < 7) {
        document.getElementById("password").style.backgroundColor = "red";
    } else {
        document.getElementById("password").style.backgroundColor = "lightgreen";
    }
}

function checkPasswordConfirm() {
    let x = document.getElementById("passwordConfirm").value;

    if (x.length >= 0 && x.length < 7) {
        document.getElementById("passwordConfirm").style.backgroundColor = "red";
    } else {
        document.getElementById("passwordConfirm").style.backgroundColor = "lightgreen";
    }
}

function dimUp(x) {
    x.style.backgroundColor = "lightgrey"
}

function dimOut(x) {
    x.style.backgroundColor = "white"
}

