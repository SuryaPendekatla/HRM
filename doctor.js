document.addEventListener('DOMContentLoaded', () => {
    const doctorLoginForm = document.getElementById('doctorLoginForm');
    const doctorRegisterForm = document.getElementById('doctorRegisterForm');
    const doctorMessageDiv = document.getElementById('doctorMessage');

    doctorLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('doctorEmail').value;
        const password = document.getElementById('doctorPassword').value;

        console.log('Doctor Login Attempt:', { email, password });

        // In a real application, send to backend for authentication
        // On successful login, redirect to doctor_dashboard.html
        if (email === 'doctor@example.com' && password === 'password') { // Dummy check
            showMessage(doctorMessageDiv, 'Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'doctor_dashboard.html';
            }, 1000);
        } else {
            showMessage(doctorMessageDiv, 'Invalid credentials.', 'error');
        }
    });

    doctorRegisterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            name: document.getElementById('regDoctorName').value,
            email: document.getElementById('regDoctorEmail').value,
            password: document.getElementById('regDoctorPassword').value,
            department: document.getElementById('regDoctorDepartment').value,
        };

        console.log('Doctor Registration Data:', formData);

        // In a real application, send to backend for registration
        showMessage(doctorMessageDiv, 'Doctor registered! (Demo only)', 'success');
        doctorRegisterForm.reset();
    });

    function showMessage(element, msg, type) {
        element.textContent = msg;
        element.className = `message ${type}`;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
});