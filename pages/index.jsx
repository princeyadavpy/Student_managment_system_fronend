import Head from 'next/head';
import React, { useEffect } from 'react';
import '../public/style.css'

const Index = () => {

  // Function to update time dynamically
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = timeString;
  };

  // Function to update date dynamically
  const updateDate = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    document.getElementById('date').textContent = dateString;
  };

  // Function to create dashboard cards dynamically
  const createDashboardCards = () => {
    const dashboard = document.getElementById('dashboard');

    const cardsData = [
      { icon: 'fas fa-user', title: 'Student Admission', link: '/admission.html' },
      { icon: 'fas fa-users', title: 'Teaching Staff', link: '/teacher.html' },
      { icon: 'fas fa-users', title: 'Non Teaching Staff', link: '/non-teaching-staff' },
      { icon: 'fas fa-file', title: 'Marks', link: '/marks' },
      { icon: 'fas fa-check-circle', title: 'Student Daily Attendance', link: '/daily_attendance.html' },
      { icon: 'fas fa-check-circle', title: 'Staff Daily Attendance', link: '/daily_attendance.html' },
      { icon: 'fas fa-money-bill-wave', title: 'Payment', link: '/payments.html' },
      // { icon: 'fas fa-user-friends', title: 'Human Resources', link: '/human-resources' },
      { icon: 'fas fa-book', title: 'Library', link: 'https://ndl.iitkgp.ac.in/' },
      { icon: 'fas fa-calendar-alt', title: 'Class Routine', link: '/time_table.html' },
      { icon: 'fas fa-question-circle', title: 'Previous Question Papers', link: '/previousexam.html' },
      { icon: 'fas fa-globe', title: 'Online Test', link: '/quiz.html' },
      { icon: 'fas fa-envelope', title: 'Mail / SMS', link: "mailto:princeyadav3033@gmail.com.com" },
      { icon: 'fas fa-file', title: 'Noticeboard', link: '/noticeboard' },
      { icon: 'fas fa-edit', title: 'Help Desk', link: 'help_desk.html' },
      { icon: 'fas fa-flag', title: 'Things To Do', link: '/things-to-do' },
      // { icon: 'fas fa-building', title: 'Dormitory', link: '/dormitory' },
      // { icon: 'fas fa-bus', title: 'Transport', link: '/transport' },
    ];

    cardsData.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      const iconElement = document.createElement('i');
      iconElement.className = card.icon;

      const titleElement = document.createElement('h3');
      titleElement.textContent = card.title;

      // Add the anchor link for the card
      const cardLink = document.createElement('a');
      cardLink.href = card.link;
      cardLink.appendChild(iconElement);
      cardLink.appendChild(titleElement);

      cardElement.appendChild(cardLink);
      dashboard.appendChild(cardElement);
    });
  };

  useEffect(() => {
    updateTime();
    updateDate();
    createDashboardCards();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          // integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>XYZ Academy</title>
      </Head>

        <div id="nav-bar">
  <input id="nav-toggle" type="checkbox" />
  <div id="nav-header"><a id="nav-title"  target="_blank">Menu</a>
    <label htmlFor="nav-toggle"><span id="nav-toggle-burger" /></label>
    <hr />
  </div>
  <div id="nav-content">
    <div className="nav-button" ><a href= "index.html"><i className="fas fa-palette" /><span>Dashboard</span></a></div>
    <div className="nav-button"><a href='admission.html'><i className="fas fa-school" /><span>Admission</span></a></div>
    <div className="nav-button"><a href='time_table.html'><i className="fas fa-clock" /><span>Time Table</span></a></div>
    <hr />
    <div className="nav-button"><a href='attendance.html'><i className="fas fa-clipboard" /><span>Attendance</span></a></div>
    <div className="nav-button"><a href='payments.html'><i className="fas fa-inr" /><span>Payment</span></a></div>
    <div className="nav-button"><a href='library.html'><i className="fas fa-book" /><span>Library</span></a></div>
    <div className="nav-button"><a href='setting.html'><i className="fas fa-gear" /><span>Settings</span></a></div>
    <hr />
    <div className="nav-button"><a href='office.html'><i className="fas fa-briefcase" /><span>Fees Info</span></a></div>
    <div id="nav-content-highlight" />
  </div>
  <input id="nav-footer-toggle" type="checkbox" />
  <div id="nav-footer">
    <div id="nav-footer-heading">
      <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>
      <div id="nav-footer-titlebox"><a id="nav-footer-title" target="_blank">St_Prince</a><span id="nav-footer-subtitle">Admin</span></div>
      <label htmlFor="nav-footer-toggle"><i className="fas fa-caret-up" /></label>
    </div>
    <div id="nav-footer-content">
      <lorem>write your bio......</lorem>
    </div>
  </div>
</div><div>
        <div className="content">
          <div className="header">
            <h1>Dashboard</h1>
            <div className="time" id="time"></div>
            <div className="user">
              <img src="https://via.placeholder.com/30" alt="User Avatar" />
              <span>Hi, Admin</span>
            </div>
          </div>

          <div className="dashboard" id="dashboard"></div>
          <footer>
          <div className="noticeboard">
            <h2>Noticeboard</h2>
            <p><i className="fas fa-bullhorn"></i> Holiday Notice</p>
            <p>Dear Parent,</p>
            <p>Today (24/10/2024) is a holiday for I-V classes.</p>
            <p>Due to Raksha Bandhan</p>
            <p>Thanks,</p>
            <p>Principal</p>
            <div className="date" id="date"></div>
          </div>
          <div className="calendar">
            <h2>Calendar</h2>
            <input type="text" placeholder="Select a date..." />
          </div>
          </footer>
        </div>
      </div>
    </div>
    
  );
};

export default Index;