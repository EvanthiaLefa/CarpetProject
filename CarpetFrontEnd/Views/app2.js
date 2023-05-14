const row = document.querySelector('.row');
row.addEventListener('click', (event) => {
  if (event.target.id === 'deleteBtn') {
    const card = event.target.closest('.card');
    const id = card.id;
    fetch(`http://localhost:3004/users/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
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