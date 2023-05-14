/**
 *  This code sets up an event listener on the .row element for a click event. When the deleteBtn is clicked within a card element,
 *  the corresponding card is deleted from the DOM and from the server using a DELETE request.
 */

const row = document.querySelector('.row');
row.addEventListener('click', (event) => {
  if (event.target.id === 'deleteBtn') { // checks if the clicked element has an id of deleteBtn.
    const card = event.target.closest('.card'); // selects the closest ancestor element of the clicked element that has a class of card and assigns it to the card constant.
    const id = card.id;    //This assigns the id attribute of the card to the id variable
    fetch(`http://localhost:3004/users/${id}`, {
      method: 'DELETE'   // This makes a DELETE request to the server with the corresponding id`.
    })
    .then(response => {
      if (response.ok) { // Checks if the response status is OK (2xx).
        card.remove(); // Remove the card element from the DOM
      } else {
        throw new Error('Failed to delete user.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
});
