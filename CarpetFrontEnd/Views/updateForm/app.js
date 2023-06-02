const form = document.querySelector("#updateForm");
const urlParams = new URLSearchParams(window.location.search); //The window.location.search property contains the query string portion of the current URL.
const id = urlParams.get("id");
fetch(`http://localhost:8080/api/contacts/${id}`)
.then(response => response.json())
.then(data => {
  form.innerHTML =  `
  <h1 class="h3 mb-3 fw-normal">Please create a new contact</h1>
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingFirstName" placeholder="FirstName" value= ${data.firstName}>
    <label for="floatingFirstName">First Name</label>
  </div>
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingLastName" placeholder="LastName" value="${data.lastName}">
    <label for="floatingLastName">Last Name</label>
  </div>
  <div class="form-floating">
    <input type="tel" class="form-control" id="floatingPhone" placeholder="Phone" value=${data.phoneNumber}>
    <label for="floatingInputEmail">Phone</label>
  </div>
  <div class="form-floating">
    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" value="${data.email}">
    <label for="floatingPhone">Email</label>
  </div>
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingAddress" placeholder="Address" value="${data.streetAddress}">
    <label for="floatingPhone">Address</label>
  </div>
  <div class="form-floating">
    <input type="number" class="form-control" id="floatingZipCode" placeholder="ZipCode" value="${data.postalCode}">
    <label for="floatingZipCode">ZipCode</label>
  </div>
  <select class="form-select city"  aria-label="Default select example">
  <option value="${data.city.id}" selected>${data.city.city}</option>
  </select>
  <select class="form-select state" aria-label="Default select example">
    <option value="${data.state.id}" selected>${data.state.state}</option>
  </select>
  <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">update contact</button>
  `;
})
 //this isn't working yet
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


//Retrieves the values from form input fields / Uses the fetch API to send a PUT request
function handleUpdate(event) {
  const urlParams = new URLSearchParams(window.location.search); //The window.location.search property contains the query string portion of the current URL.
  const id = urlParams.get("id"); //This retrieves the value of the "id" query parameter from the urlParams object using the get() method.

  event.preventDefault(); //prevent the page from refresh.
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
 


  fetch(`http://localhost:8080/api/contacts/${id}`, {
    method: "PUT",
    headers: {
      //specify that the server should expect and send JSON data.
      Accept: "application/json",
      "Content-Type": "application/json",
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
    }),
  })
  
}
//an event listener on a form element that is triggered when the form is submitted
form.addEventListener("submit", handleUpdate);
