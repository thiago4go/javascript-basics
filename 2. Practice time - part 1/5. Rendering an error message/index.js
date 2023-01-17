// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let text = document.getElementById("error")

function buy(){
    text.textContent = "Something went wrong, please try again"
}
