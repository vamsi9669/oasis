// Validate the form input before submitting it
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departureDate').value;
  
    if (from === '') {
      alert('Please enter your departure city');
      return;
    }
  
    if (to === '') {
      alert('Please enter your destination city');
      return;
    }
  
    if (departureDate === '') {
      alert('Please enter your departure date');
      return;
    }
  
    // Submit the form using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/book-ticket');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Your bus ticket has been booked');
      } else {
        alert('There was an error booking your ticket');
      }
    };
    xhr.send('from=' + from + '&to=' + to + '&departureDate=' + departureDate);
  });
  