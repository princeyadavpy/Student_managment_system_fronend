// Update time dynamically
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = timeString;
}

// Update date dynamically
function updateDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    document.getElementById('date').textContent = dateString;
}

// Create dashboard cards dynamically
function createDashboardCards() {
    const dashboard = document.getElementById('dashboard');

    const cardsData = [
        { icon: 'fas fa-user', title: 'Student Admission', link: 'Admission.html' },
        { icon: 'fas fa-users', title: 'Teaching Staff', link: 'teaching-staff.html' },
        { icon: 'fas fa-users', title: 'Non Teaching Staff', link: 'non-teaching-staff.html' },
        { icon: 'fas fa-file', title: 'Marks', link: 'marks.html' },
        { icon: 'fas fa-check-circle', title: 'Student Daily Attendance', link: 'attendance.html' },
        { icon: 'fas fa-check-circle', title: 'Staff Daily Attendance', link: 'staff-attendance.html' },
        { icon: 'fas fa-money-bill-wave', title: 'Payment', link: 'payment.html' },
        { icon: 'fas fa-user-friends', title: 'Human Resources', link: 'human-resources.html' },
        { icon: 'fas fa-book', title: 'Library', link: 'library.html' },
        { icon: 'fas fa-calendar-alt', title: 'Class Routine', link: 'class-routine.html' },
        { icon: 'fas fa-question-circle', title: 'Previous Question Papers', link: 'question-papers.html' },
        { icon: 'fas fa-globe', title: 'Online Test', link: 'online-test.html' },
        { icon: 'fas fa-envelope', title: 'Mail / SMS', link: 'mail-sms.html' },
        { icon: 'fas fa-file', title: 'Noticeboard', link: 'noticeboard.html' },
        { icon: 'fas fa-edit', title: 'Frontdesk Enquiry', link: 'frontdesk-enquiry.html' },
        { icon: 'fas fa-flag', title: 'Things To Do', link: 'things-to-do.html' },
        { icon: 'fas fa-building', title: 'Dormitory', link: 'dormitory.html' },
        { icon: 'fas fa-bus', title: 'Transport', link: 'transport.html' },
    ];

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Create the link dynamically
        const cardLink = document.createElement('a');
        cardLink.href = card.link;
        cardLink.innerHTML = `
            <i class="${card.icon}"></i>
            <h3>${card.title}</h3>
        `;

        // Append the link to the card
        cardElement.appendChild(cardLink);

        // Append the card to the dashboard
        dashboard.appendChild(cardElement);
    });
}

// Update time and date on page load
updateTime();
updateDate();

// Create dashboard cards
createDashboardCards();

// Update time every second
setInterval(updateTime, 1000);