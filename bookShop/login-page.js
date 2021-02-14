export function init() {
    var content = document.querySelector('#body')
	fetch('login-page.html').then(function (response) {
		return response.text();
	}).then(function (html) {
		content.innerHTML = html;
		listen();
	});    
}


function listen() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");
    const registrationBtn =  document.querySelector('.registrationBtn')

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("shemovedii")
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        localStorage.setItem('user', '')
        const xhttp = new XMLHttpRequest();
        var url='https://localhost:5001/getUser?email='+email+ '&password=' + password;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = xhttp.response
                var userInfo = JSON.parse(response);
                loginErrorMsg.style.opacity = 0;
                console.log(userInfo["id"])
                localStorage.setItem('user', userInfo["id"]);
                location.hash = '#main';
            } else {
                console.log("false")
                loginErrorMsg.style.opacity = 1;
            } 
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    })

    registrationBtn.addEventListener("click", (e)=> {
        location.hash = "#registration"
        return false;
    })



}



