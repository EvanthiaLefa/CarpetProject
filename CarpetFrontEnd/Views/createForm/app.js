
const form = document.querySelector('form');

fetch('http://localhost:8080/api/city') // Fetch city data
.then(response => response.json())
.then(cityData => {
  const citySelect = document.querySelector('.city');
  cityData.forEach(city => {
    const option = document.createElement('option');
    option.value = city.id;
    option.textContent = city.city;
    citySelect.appendChild(option);
  });
})
.catch(error => {
  console.error(error);
  // Handle errors
});

fetch('http://localhost:8080/api/state') // Fetch city data
.then(response => response.json())
.then(stateData => {
  const stateSelect = document.querySelector('.state');
  stateData.forEach(state => {
    const option = document.createElement('option');
    option.value = state.id;
    option.textContent = state.state;
    stateSelect.appendChild(option);
  });
})
.catch(error => {
  console.error(error);
  // Handle errors
});

//Retrieves the values from form input fields / Uses the fetch API to send a POST request 
//at http://localhost:8080/api/contacts, containing the values of the input fields in JSON format. 
function handleSubmit(event) {
  event.preventDefault();  //prevent the page from refresh.
  const firstName = form.querySelector("#floatingFirstName").value;
  const email = form.querySelector("#floatingInputEmail").value;
  const lastName = form.querySelector("#floatingLastName").value;
  const phoneNumber = form.querySelector("#floatingPhone").value;
  const streetAddress = form.querySelector("#floatingAddress").value;
  const postalCode = form.querySelector("#floatingZipCode").value;

  const cityId = form.querySelector(".city").value;
  const citySelect = form.querySelector(".city");
  const selectedOption = citySelect.querySelector(`option[value="${cityId}"]`);
  const cityName = selectedOption.textContent;

  const stateId = form.querySelector(".state").value;
  const stateSelect = form.querySelector(".state");
  const stateSelectedOption = stateSelect.querySelector(`option[value="${stateId}"]`);
  const stateName = stateSelectedOption.textContent;

  fetch('http://localhost:8080/api/contacts', {
    method: 'POST',
    headers: { //specify that the server should expect and send JSON data.
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      streetAddress: streetAddress,
      postalCode: postalCode,
      city: {
          id: cityId,
          city: cityName
      },
      state: {
          id: stateId,
          state: stateName
      },
    })
  })
}
//an event listener on a form element that is triggered when the form is submitted
form.addEventListener('submit', handleSubmit);


