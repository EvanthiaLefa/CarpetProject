
const form = document.querySelector('form');

//Retrieves the values from form input fields / Uses the fetch API to send a POST request 
//to local server running at http://localhost:3004/users, containing the values of the two input fields in JSON format. 
function handleSubmit(event) {
  event.preventDefault();  //prevent the page from refresh.
  const firstName = form.querySelector('#floatingFirstName');
  const valueName = firstName.value;
  console.log(valueName);
  const email = form.querySelector('#floatingInputEmail');
  const valueEmail = email.value;
  console.log(valueEmail);

  fetch('http://localhost:3004/users', {
    method: 'POST',
    headers: { //specify that the server should expect and send JSON data.
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": valueName,
      "email": valueEmail
    })
  })
}
//an event listener on a form element that is triggered when the form is submitted
form.addEventListener('submit', handleSubmit);


