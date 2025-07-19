document.addEventListener('DOMContentLoaded', () => {
    const hospitalsBox = document.getElementById('hospitalsBox');
    const departmentsBox = document.getElementById('departmentsBox');
    const doctorsBox = document.getElementById('doctorsBox');
    const patientsBox = document.getElementById('patientsBox');

    const hospitalsListDiv = document.getElementById('hospitalsList');
    const departmentsListDiv = document.getElementById('departmentsList');
    const doctorsListDiv = document.getElementById('doctorsList');
    const patientsListDiv = document.getElementById('patientsList');

    const hospitalsUl = document.getElementById('hospitalsUl');
    const departmentsUl = document.getElementById('departmentsUl');
    const doctorsUl = document.getElementById('doctorsUl');
    const patientsUl = document.getElementById('patientsUl');

    // --- Dummy Data (In a real app, these would come from your backend API) ---
    const hospitals = [
        { id: 'hosp1', name: 'City General Hospital', location: 'Downtown' },
        { id: 'hosp2', name: 'Community Care Center', location: 'Suburbia' },
    ];

    const departments = [
        { id: 'dep1', name: 'Cardiology', head: 'Dr. Expert' },
        { id: 'dep2', name: 'Pediatrics', head: 'Dr. Nice' },
        { id: 'dep3', name: 'Dermatology', head: 'Dr. Skin' },
    ];

    const doctors = [
        { id: 'doc1', name: 'Dr. Alice Smith', department: 'Cardiology', email: 'alice@hospital.com' },
        { id: 'doc2', name: 'Dr. Bob Johnson', department: 'Pediatrics', email: 'bob@hospital.com' },
        { id: 'doc3', name: 'Dr. Carol White', department: 'Dermatology', email: 'carol@hospital.com' },
    ];

    const patients = [
        { id: 'pat1', name: 'John Doe', email: 'john@example.com', lastVisit: '2025-06-15' },
        { id: 'pat2', name: 'Jane Smith', email: 'jane@example.com', lastVisit: '2025-07-01' },
    ];
    // --- End Dummy Data ---

    function hideAllLists() {
        hospitalsListDiv.style.display = 'none';
        departmentsListDiv.style.display = 'none';
        doctorsListDiv.style.display = 'none';
        patientsListDiv.style.display = 'none';
    }

    hospitalsBox.addEventListener('click', () => {
        hideAllLists();
        hospitalsListDiv.style.display = 'block';
        hospitalsUl.innerHTML = ''; // Clear previous list
        hospitals.forEach(hospital => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${hospital.name}</strong> - ${hospital.location}`;
            hospitalsUl.appendChild(li);
        });
    });

    departmentsBox.addEventListener('click', () => {
        hideAllLists();
        departmentsListDiv.style.display = 'block';
        departmentsUl.innerHTML = ''; // Clear previous list
        departments.forEach(department => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${department.name}</strong> - Head: ${department.head}`;
            departmentsUl.appendChild(li);
        });
    });

    doctorsBox.addEventListener('click', () => {
        hideAllLists();
        doctorsListDiv.style.display = 'block';
        doctorsUl.innerHTML = ''; // Clear previous list
        doctors.forEach(doctor => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${doctor.name}</strong> (${doctor.department}) - ${doctor.email}`;
            doctorsUl.appendChild(li);
        });
    });

    patientsBox.addEventListener('click', () => {
        hideAllLists();
        patientsListDiv.style.display = 'block';
        patientsUl.innerHTML = ''; // Clear previous list
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${patient.name}</strong> - Email: ${patient.email}, Last Visit: ${patient.lastVisit}`;
            patientsUl.appendChild(li);
        });
    });
});