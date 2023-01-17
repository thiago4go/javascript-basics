let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called


function print(){
    let text = document.getElementById("text-el")
    var message = greeting + " " + name
    text.textContent = message
}

print()