
// Placeholder functions for PDF and Excel export
document.getElementById('export-pdf').addEventListener('click', function () {
    alert('PDF export functionality will be implemented here.');
});

document.getElementById('export-excel').addEventListener('click', function () {
    alert('Excel export functionality will be implemented here.');
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all rows from the attendance table
    const rows = document.querySelectorAll('.attendance-table tbody tr');
    let totalClasses = 0;
    let totalAttended = 0;

    // Loop through each row to calculate attendance and set status
    rows.forEach(row => {
        const totalClassesCell = parseInt(row.cells[1].textContent);
        const attendedClassesCell = parseInt(row.cells[2].textContent);
        const attendancePercentage = (attendedClassesCell / totalClassesCell) * 100;

        // Update total classes and attended counts
        totalClasses += totalClassesCell;
        totalAttended += attendedClassesCell;

        // Classify subject attendance
        if (attendancePercentage >= 75) {
            row.classList.add('status-good');
            row.classList.remove('status-average', 'status-poor');
        } else if (attendancePercentage >= 50 && attendancePercentage < 75) {
            row.classList.add('status-average');
            row.classList.remove('status-good', 'status-poor');
        } else {
            row.classList.add('status-poor');
            row.classList.remove('status-good', 'status-average');
        }

        // Update the attendance percentage in the table
        row.cells[3].textContent = `${attendancePercentage.toFixed(2)}%`;
    });

    // Calculate the overall attendance percentage
    const overallAttendancePercentage = (totalAttended / totalClasses) * 100;
    const summaryElement = document.querySelector('.summary');
    
    // Update the overall attendance summary with the calculated value
    let summaryStatus;
    if (overallAttendancePercentage >= 75) {
        summaryStatus = 'Good';
        summaryElement.innerHTML = `Overall Attendance: ${overallAttendancePercentage.toFixed(2)}% - <span style="color: green;">Good</span>`;
    } else if (overallAttendancePercentage >= 50 && overallAttendancePercentage < 75) {
        summaryStatus = 'Needs Improvement';
        summaryElement.innerHTML = `Overall Attendance: ${overallAttendancePercentage.toFixed(2)}% - <span style="color: orange;">Needs Improvement</span>`;
    } else {
        summaryStatus = 'Poor';
        summaryElement.innerHTML = `Overall Attendance: ${overallAttendancePercentage.toFixed(2)}% - <span style="color: red;">Poor</span>`;
    }
});
