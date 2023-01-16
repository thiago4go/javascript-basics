// document.getElementById("count-el").innerText = 5
//let myAge = 33
//let humanDogRatio = 6
//let myDogAge = myAge*humanDogRatio
//console.log(myDogAge)
// initizlize the count as 0
/* listen for clicks on the increment button.
*/

// grab the element and store it in a variable called countEl
let countEL =  document.getElementById("count-el")
let countSave = document.getElementById("count-save")
let count = 0
let previousEnt = document.getElementById("save-el")
/* this function increment the number in count by 1 after each click, and shows the new
results at the element using the sintex .innerText
*/
function increment(){
    count += 1 
    countEL.innerText = count
}


/* this funtion save number of entries and print it 
then, it set the count as zero
*/
function save(){
    countSave = count
    previousEnt.textContent +=  countSave + " - " 
    count = 0
    countEL.innerText = count
}



