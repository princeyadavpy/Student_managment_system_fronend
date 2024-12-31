// JavaScript for Campus Help Center

// Function to show the New Request section
function openNewRequest() {
    const newRequestSection = document.getElementById('new-request-section');
    newRequestSection.style.display = 'block';
}

// Function to filter services based on search input
function filterServices() {
    const searchInput = document.getElementById('service-search').value.toLowerCase();
    const servicesList = document.getElementById('services-list');
    const services = servicesList.getElementsByTagName('li');

    for (let service of services) {
        const serviceText = service.textContent.toLowerCase();
        if (serviceText.includes(searchInput)) {
            service.style.display = '';
        } else {
            service.style.display = 'none';
        }
    }
}

// Function to handle service selection
function selectService(serviceName) {
    alert(`You selected the service: ${serviceName}`);
    const newRequestSection = document.getElementById('new-request-section');
    newRequestSection.style.display = 'none';
}
