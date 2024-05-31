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
    let initialPass = document.querySelector("#password");
    let confirmPass = document.querySelector("#confirm");
    let msgPass = document.querySelector("#password_message");
    let submitButton = document.querySelector("#submit");

    if(initialPass.value != confirmPass.value){        
        msgPass.style.color = "red";
        msgPass.textContent = "*Passwords do not match.";
        msgPass.style.fontSize = "small";
        initialPass.setCustomValidity("Invalid");
        confirmPass.setCustomValidity("Invalid");

        submitButton.disabled = true;
        submitButton.style.opacity = 0.4;
    }
    else{
        msgPass.style.color = "green";
        msgPass.textContent = "*Passwords match.";
        msgPass.style.fontSize = "small";
        initialPass.setCustomValidity("");
        confirmPass.setCustomValidity("");

        submitButton.disabled = false;
        submitButton.style.opacity = 1;
    }
}