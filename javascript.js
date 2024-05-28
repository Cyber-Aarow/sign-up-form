document.addEventListener("DOMContentLoaded", function(){
    let requiredList = document.querySelectorAll(".class");
    requiredList.forEach((element) =>{
        element.setAttribute("required", "true");
    });
});

let names = querySelectorAll(".name")
names.forEach((element) =>{
    element.addEventListener('input', function(){
        let lettersOnly = element.value.replace(/[^a-zA-Z]/g, '');
        element.value = lettersOnly;
    });
});