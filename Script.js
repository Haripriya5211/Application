const form = document.getElementById('leave-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('roll-number').value;
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const leaveType = document.querySelector('input[name="leave-type"]:checked').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const reason = document.getElementById('reason').value;
    
    if (startDate > endDate) {
        alert("Start date cannot be less than end date.");
        return false;
    }

    // Check if reason is at least 10 characters long
    if (reason.length < 10) {
        alert("Please provide a more detailed reason for leave.");
        return false;
    }

    // If all validations pass
    alert("Application submitted successfully!");
    return true;

});
