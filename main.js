


let submitButton = (event) => {

  let answer = "Just kidding, we don't care"

  let displayResponse = document.querySelector('.message').value = answer;

  return displayResponse;


  // return alert(answer);



}




// selects the message box where you put a message


// event listener for clicking of sumbit button
let value = document.querySelector('.submit-button').addEventListener("click",submitButton);
