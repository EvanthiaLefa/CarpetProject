const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/contacts');
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

const handleData = data => {
  const row = document.querySelector('.row');

  console.log(data);

  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'col-sm-6 mt-2';
    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${user.firstName} ${user.lastName} </h5>
             <h6 class="card-title">${user.email}</h6>
            <a id="details" class="btn btn-primary float-end" onclick="showDetails()" >View</a>
            <a href="#" class="btn btn-primary float-end">Delete</a>
          </div>
        </div>
      `;
    row.appendChild(card);

 });
}


function showDetails(){
  window.location.href="detailsForm.html";
}

const displayStates=data=>{
let selectState=document.getElementById("stateDetailsForm");
let option=document.createElement("option");

data.forEach(state =>{
  option.text=`${state.state}`;
  selectState.add(option);
});
}

function backIndex(){
  window.location.href="index.html";
}
fetchData()
    .then(displayStates)
    .catch(error => {
      console.error(error);
    });

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

  fetch('http://localhost:8080/api/contacts', {
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



formEl.addEventListener('submit', handleSubmit);

}
