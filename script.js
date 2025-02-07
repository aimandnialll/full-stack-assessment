document.getElementById('mobileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobileNumber').value;
    if (mobileNumber === "+60173527250") {
        window.location.href = 'registration.html';
    } else {
        alert('Invalid mobile number. Please enter +60173527250.');
    }
});
