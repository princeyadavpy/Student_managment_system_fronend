// Sample timetable data (this can be modified or fetched from a database)
const timetable = {
    "2024-12-29": [
      { class: "Math", time: "9:00 AM - 10:00 AM" },
      { class: "Science", time: "10:15 AM - 11:15 AM" },
      { class: "History", time: "11:30 AM - 12:30 PM" }
    ],
    "2024-12-30": [
      { class: "English", time: "9:00 AM - 10:00 AM" },
      { class: "Chemistry", time: "10:15 AM - 11:15 AM" },
      { class: "Geography", time: "11:30 AM - 12:30 PM" }
    ]
  };
  
  // Predefined student names
  const students = [
    "Student 1", "Student 2", "Student 3"
  ];
  
  // Dynamically generate timetable for the selected date
  document.getElementById('classDate').addEventListener('change', function() {
    const selectedDate = this.value;
    const timetableContainer = document.getElementById('timetable');
    timetableContainer.innerHTML = ''; // Clear previous timetable
  
    if (timetable[selectedDate]) {
      const classes = timetable[selectedDate];
      const timetableList = document.createElement('ul');
  
      classes.forEach((classItem, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${classItem.class} (${classItem.time})`;
        
        const classButton = document.createElement('button');
        classButton.textContent = "Take Attendance";
        classButton.addEventListener('click', function() {
          showAttendance(classItem.class);
        });
        listItem.appendChild(classButton);
        timetableList.appendChild(listItem);
      });
  
      timetableContainer.appendChild(timetableList);
    } else {
      timetableContainer.innerHTML = 'No timetable available for this date.';
    }
  });
  
  // Show the attendance section for a selected class
  function showAttendance(className) {
    const attendanceSection = document.getElementById('attendanceSection');
    const attendanceTableBody = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    attendanceTableBody.innerHTML = ''; // Clear previous rows
  
    students.forEach(student => {
      const row = attendanceTableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      
      cell1.textContent = student;
      cell2.innerHTML = `<input type="checkbox" class="present" data-student="${student}">`;
      cell3.innerHTML = `<input type="checkbox" class="absent" data-student="${student}">`;
    });
  
    attendanceSection.style.display = 'block'; // Show the attendance section
  }
  
  // Handle submit attendance and show attendance summary with counts
  document.getElementById('submitAttendance').addEventListener('click', function() {
    const attendanceSummary = document.getElementById('attendanceSummary');
    attendanceSummary.innerHTML = ''; // Clear previous summary
  
    let presentCount = 0;
    let absentCount = 0;
  
    const studentsRows = document.querySelectorAll('#attendanceTable tbody tr');
    studentsRows.forEach(row => {
      const studentName = row.cells[0].textContent.trim();
      const presentCheckbox = row.querySelector('.present');
      const absentCheckbox = row.querySelector('.absent');
  
      let attendanceStatus = '';
      if (presentCheckbox.checked && !absentCheckbox.checked) {
        attendanceStatus = 'Present';
        presentCount++;
      } else if (!presentCheckbox.checked && absentCheckbox.checked) {
        attendanceStatus = 'Absent';
        absentCount++;
      } else {
        attendanceStatus = 'No Attendance Marked';
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = `${studentName}: ${attendanceStatus}`;
      attendanceSummary.appendChild(listItem);
    });
  
    // Show the sum of present and absent students
    const summaryMessage = document.createElement('li');
    summaryMessage.textContent = `Total Present: ${presentCount}, Total Absent: ${absentCount}`;
    attendanceSummary.appendChild(summaryMessage);
  });
  