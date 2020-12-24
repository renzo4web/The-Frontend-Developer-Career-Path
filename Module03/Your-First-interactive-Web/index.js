var myButton = document.getElementById("btn")
var myTitle = document.getElementById("title")
var counter = 5

myButton.addEventListener("click", function(){

    counter += 5

    myButton.textContent = counter
})