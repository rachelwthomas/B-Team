


let submitButton = (event) => {

  let answer = "Just kidding, we don't care"

  // selects the message box where you put a message
  let displayResponse = document.querySelector('.message').value = answer;

  return displayResponse;

}






//function to make the second contact form dissapear when second submit button is clicked
let hideContactForm = (event) => {
document.querySelector(".form2").style.display = "none";


}

// event listener for clicking of sumbit button2
let submitClick2 = document.querySelector('.button2').addEventListener("click",hideContactForm);








// ************************FizzBuzzDon'tWork***************************************

let fizzHead = document.querySelector('.fizz');

let doesNotWork = (event) => {
  fizzHead.textContent = "This doesn't even work. I'm so sorry";
}



// event listener for clicking of sumbit button and fizzbutton
let value = document.querySelector('.submit-button').addEventListener("click",submitButton);
let fizzbuzz = document.querySelector('.fizz_button').addEventListener('click',doesNotWork);
