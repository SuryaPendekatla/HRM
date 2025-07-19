document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const doctorSelect = document.getElementById('doctorSelect');
    const departmentSelect = document.getElementById('departmentSelect');
    const messageDiv = document.getElementById('message');

    // --- Dummy Data (In a real app, this would come from your backend API) ---
    const doctors = [
        { id: 'doc1', name: 'Dr. Alice Smith', department: 'Cardiology' },
        { id: 'doc2', name: 'Dr. Bob Johnson', department: 'Pediatrics' },
        { id: 'doc3', name: 'Dr. Carol White', department: 'Dermatology' },
    ];

    const departments = [
        'Cardiology', 'Pediatrics', 'Dermatology', 'Neurology', 'Orthopedics'
    ];
    // --- End Dummy Data ---

    // Populate Doctors Dropdown
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = `${doctor.name} (${doctor.department})`;
        doctorSelect.appendChild(option);
    });

    // Populate Departments Dropdown
    departments.forEach(department => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        departmentSelect.appendChild(option);
    });

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            patientName: document.getElementById('patientName').value,
            doctorId: doctorSelect.value,
            doctorName: doctorSelect.options[doctorSelect.selectedIndex].text,
            department: departmentSelect.value,
            appointmentDate: document.getElementById('appointmentDate').value,
            appointmentTime: document.getElementById('appointmentTime').value,
            reason: document.getElementById('reason').value,
        };

        console.log('Appointment Data:', formData);

        // In a real application, you would send this data to your backend API:
        /*
        fetch('/api/appointments/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showMessage('Appointment booked successfully!', 'success');
                appointmentForm.reset();
            } else {
                showMessage(Error: ${data.message}, 'error');
            }
        })
        .catch(error => {
            console.error('Error booking appointment:', error);
            showMessage('An error occurred. Please try again.', 'error');
        });
        */

        // For this demo, we'll just show a success message
        showMessage('Appointment request submitted! (This is a demo, no real booking occurred.)', 'success');
        appointmentForm.reset();
    });

    function showMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.className = `message ${type}`; // Add 'success' or 'error' class
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    }
});