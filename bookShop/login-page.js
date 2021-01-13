const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
 
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/isUser?email='+email+ '&password=' + password;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log(xhttp.responseText)
           if (xhttp.responseText === 'true') {
                loginErrorMsg.style.opacity = 0;
                alert("You have successfully logged in.");
           } else {
                console.log("false")
                loginErrorMsg.style.opacity = 1;
           }
        } 
    }
    xhttp.open("GET", url, true);
    xhttp.send();

})
