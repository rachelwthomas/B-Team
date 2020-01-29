



let submitButton = (event) => {

  let answer = "Just kidding, we don't care";

  // let displayResponse = document.querySelector('.response').innerHTML = answer;

  // return displayResponse;
  return document.querySelector('.response').textContent = answer;
  // return alert(answer);

}


// selects the message box where you put a message


// event listener for clicking of sumbit button
document.querySelector('.submit-button').addEventListener("click",submitButton);
