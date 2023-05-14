//uses the fetch API to retrieve data from a local server running at http://localhost:3004/users 
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3004/users');
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}
//hat takes the retrieved JSON data as input and generates a Bootstrap card for each contact in the data.
const handleData = jsonData => {
  const row = document.querySelector('.row');
  jsonData.forEach(contact => {
    const card = document.createElement('div');
    card.className = 'col-sm-6 mt-2';
    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${contact.name}</h5>
             <h6 class="card-title">${contact.email}</h6>
            <a href="#" class="btn btn-primary float-end">View</a>
            <a href="#" class="btn btn-primary float-end">Delete</a>
          </div>
        </div>
      `;
    row.appendChild(card);
  });
}
//The fetchData function is invoked and the Promise it returns is chained with .then and .catch methods.
// If the Promise resolves successfully, the handleData function is called otherwise the error is logged to the console.
fetchData()
  .then(handleData)
  .catch(error => {
    console.error(error);
  });

const formEl = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  const firstName = formEl.querySelector('#floatingFirstName');
  const valueName = firstName.value;
  console.log(valueName);
  const email = formEl.querySelector('#floatingInputEmail');
  const valueEmail = email.value;
  console.log(valueEmail);

  fetch('http://localhost:3004/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": valueName,
      "email": valueEmail
    })
  })
}
formEl.addEventListener('submit', handleSubmit);
