document.addEventListener('DOMContentLoaded', () => {
    const totalAppointmentsEl = document.getElementById('totalAppointments');
    const todayAppointmentsEl = document.getElementById('todayAppointments');
    const estimatedRevenueEl = document.getElementById('estimatedRevenue');
    const appointmentsTableBody = document.querySelector('#appointmentsTable tbody');

    // --- Dummy Data (In a real app, this would come from your backend API for the logged-in doctor) ---
    const doctorAppointments = [
        { patientName: 'John Doe', date: '2025-07-20', time: '10:00 AM', reason: 'Flu symptoms', status: 'Scheduled' },
        { patientName: 'Jane Smith', date: '2025-07-20', time: '11:30 AM', reason: 'Routine checkup', status: 'Scheduled' },
        { patientName: 'Peter Jones', date: '2025-07-21', time: '02:00 PM', reason: 'Follow-up', status: 'Scheduled' },
        { patientName: 'Alice Brown', date: '2025-07-19', time: '09:00 AM', reason: 'Rash', status: 'Completed' },
    ];
    // --- End Dummy Data ---

    // Calculate Dashboard Metrics
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const totalAppointments = doctorAppointments.length;
    const todayAppointments = doctorAppointments.filter(app => app.date === today && app.status === 'Scheduled').length;
    const estimatedRevenue = doctorAppointments.length * 50; // Assuming $50 per appointment

    totalAppointmentsEl.textContent = totalAppointments;
    todayAppointmentsEl.textContent = todayAppointments;
    estimatedRevenueEl.textContent = `$${estimatedRevenue.toFixed(2)}`;

    // Populate Appointments Table
    doctorAppointments.forEach(appointment => {
        const row = appointmentsTableBody.insertRow();
        row.insertCell().textContent = appointment.patientName;
        row.insertCell().textContent = appointment.date;
        row.insertCell().textContent = appointment.time;
        row.insertCell().textContent = appointment.reason;
        row.insertCell().textContent = appointment.status;
    });
});