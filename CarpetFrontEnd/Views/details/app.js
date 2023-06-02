function fetchDataAndDisplay() {
  //creates a new instance of the URLSearchParams object.
  const urlParams = new URLSearchParams(window.location.search); //The window.location.search property contains the query string portion of the current URL.
  const id = urlParams.get("id"); //This retrieves the value of the "id" query parameter from the urlParams object using the get() method.

  fetch(`http://localhost:8080/api/contacts/${id}`) // Fetch data using the ID
    .then((response) => response.json())
    .then((data) => {
      // Display the fetched data on the page
      const infoPageRow = document.querySelector(".infoPageRow");
      // Create HTML elements to display the data
      const ul = document.createElement("ul");
      ul.className = "list-group list-group align-items-center row";
      ul.innerHTML = `
        <li class="list-group-item d-flex justify-content-between " style="width: 35rem;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Name:</div>
            ${data.firstName}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
         <div class="ms-2 me-auto">
          <div class="fw-bold">Last Name:</div>
          ${data.lastName}
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Phone:</div>
            ${data.phoneNumber}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
          <div class="ms-2 me-auto">
           <div class="fw-bold">Email:</div>
            ${data.email}
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
          <div class="ms-2 me-auto">
           <div class="fw-bold">Address:</div>
            ${data.streetAddress}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">PostCode:</div>
             ${data.postalCode}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">City:</div>
              ${data.city.city}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between" style="width: 35rem;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">State:</div>
            ${data.state.state}
          </div>
        </li>
        <a href="../updateForm/updateForm.html?id=${id}" id="UpdateBtn" class="btn btn-primary float-end mt-3" style="width: 15rem;">Update</a>
        `;
      // Append the elements to the infoPageRow
      infoPageRow.appendChild(ul);
    })
    .catch((error) => console.log(error));
}

// Call the function after the HTML has finished loading
document.addEventListener("DOMContentLoaded", fetchDataAndDisplay);
