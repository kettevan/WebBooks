const registerForm = document.getElementById("registration-form");
const registerButton = document.getElementById("regisrtation-form-submit");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
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
 
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/newUser?firstname='+firstName+ '&lastname=' + lastName + '&email=' + email + "&password=" +password;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log(xhttp.responseText)
           if (xhttp.responseText === 'true') {
                alert("New Account Saved, Please Login again.");
           } else {
                modal.style.display = "block";
           }
        } 
    }
    xhttp.open("POST", url, true);
    xhttp.send();


})