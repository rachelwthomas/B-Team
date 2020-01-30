


let submitButton = (event) => {

  let answer = "Just kidding, we don't care"

  let displayResponse = document.querySelector('.message').value = answer;

  return displayResponse;


  // return alert(answer);



}

// ************************FizzBuzzDon'tWork***************************************

let fizzHead = document.querySelector('.fizz');

let doesNotWork = (event) => {
  fizzHead.textContent = "This doesn't even work. I'm so sorry";
}




// selects the message box where you put a message


// event listener for clicking of sumbit button and fizzbutton
let value = document.querySelector('.submit-button').addEventListener("click",submitButton);
let fizzbuzz = document.querySelector('.fizz_button').addEventListener('click',doesNotWork);
