document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminMessageDiv = document.getElementById('adminMessage');

    adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;

        console.log('Admin Login Attempt:', { email, password });

        // In a real application, send to backend for authentication
        // On successful login, redirect to admin_dashboard.html
        if (email === 'admin@hospital.com' && password === 'adminpass') { // Dummy check
            showMessage(adminMessageDiv, 'Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'admin_dashboard.html';
            }, 1000);
        } else {
            showMessage(adminMessageDiv, 'Invalid admin credentials.', 'error');
        }
    });

    function showMessage(element, msg, type) {
        element.textContent = msg;
        element.className =` message ${type}`;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
});