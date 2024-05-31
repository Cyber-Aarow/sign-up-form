document.addEventListener("DOMContentLoaded", function(){
    let requiredList = document.querySelectorAll(".class");
    requiredList.forEach((element) =>{
        element.setAttribute("required", "true");
    });
});


//Prevent non-alphabetical input for names
window.onload = function() {
    firstName = document.querySelector("#first_name");
    //Listen for keypress in the firstname input
    firstName.addEventListener("keypress", function(e) {
      char_regex = RegExp('[A-Za-z]')
      //Prevent the key to be entered if it's not one of the alphabetic
      if(!char_regex.test(e.key)) {
        e.preventDefault();
      }
    })

    lastName = document.querySelector("#last_name");
    //Listen for keypress in the firstname input
    lastName.addEventListener("keypress", function(e) {
      char_regex = RegExp('[A-Za-z]')
      //Prevent the key to be entered if it's not one of the alphabetic
      if(!char_regex.test(e.key)) {
        e.preventDefault();
      }
    })
  }

function validatePassword(){
    let initialPass = document.querySelector("#password").value;
    let confirmPass = document.querySelector("#confirm").value;

    if(initialPass != confirmPass){
        confirmPass.setCustomValidity("Passwords don't match.");
        confirmPass.reportValidity();
    }
    else{
        confirmPass.setCustomValidity("");
    }
}

let confirmPass = document.querySelector("#confirm");
confirmPass.addEventListener("keypress", validatePassword);