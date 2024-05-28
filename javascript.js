document.addEventListener("DOMContentLoaded", function(){
    let requiredList = document.querySelectorAll(".class");
    requiredList.forEach((element) =>{
        element.setAttribute("required", "true");
    });
});