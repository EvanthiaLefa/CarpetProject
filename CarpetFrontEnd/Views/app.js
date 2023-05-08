const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3004/users');
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

const handleData = data => {
  const row = document.querySelector('.row');
  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'col-sm-6 mt-2';
    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
             <h6 class="card-title">${user.email}</h6>
            <a href="#" class="btn btn-primary float-end">View</a>
            <a href="#" class="btn btn-primary float-end">Delete</a>
          </div>
        </div>
      `;
    row.appendChild(card);
  });
}
fetchData()
  .then(handleData)
  .catch(error => {
    console.error(error);
  });

//d-flex align-items-center flex-column 
// <ul class="list-group list-group-flush">
// <li class="list-group-item">email: ${user.email}</li>
// </ul>
// ul -> 


// NA GRAPSO SXOLIA




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