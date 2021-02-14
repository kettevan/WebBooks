export function init() {
  var content = document.querySelector('#body')
	fetch('registration-page.html').then(function (response) {
		return response.text();
	}).then(function (html) {
    content.innerHTML = html;
    listen()
	});    
}

function listen() {


  const registerForm = document.getElementById("registration-form");
  const registerButton = document.getElementById("regisrtation-form-submit");

  var modal = document.getElementById("myModal");

  var span = document.getElementsByClassName("close")[0];


  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  registerButton.addEventListener("click", (e) => {
      e.preventDefault();
      const firstName = registerForm.firstName.value;
      const lastName  = registerForm.lastName.value;
      const email = registerForm.email.value;
      const password = registerForm.password.value;
      localStorage.setItem('user', '')
      const xhttp = new XMLHttpRequest();
      var url='https://localhost:5001/newUser?firstname='+firstName+ '&lastname=' + lastName + '&email=' + email + "&password=" +password;
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText)
            if (xhttp.responseText === 'true') {
                  localStorage.setItem('user', userInfo["id"]);
                  location.hash = "#main"
            } else {
                  modal.style.display = "block";
            }
          } 
      }
      xhttp.open("POST", url, true);
      xhttp.send();
  })
}