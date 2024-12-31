// Predefined timetable for each day
const timetables = {
    monday: ["Math - 9:00 AM", "Science - 10:00 AM", "English - 11:00 AM"],
    tuesday: ["History - 9:00 AM", "Math - 10:00 AM", "Computer - 11:00 AM"],
    wednesday: ["Geography - 9:00 AM", "English - 10:00 AM", "Physics - 11:00 AM"],
    thursday: ["Biology - 9:00 AM", "Chemistry - 10:00 AM", "Math - 11:00 AM"],
    friday: ["Physical Education - 9:00 AM", "History - 10:00 AM", "Science - 11:00 AM"],
    saturday: ["Art - 9:00 AM", "Music - 10:00 AM", "Sports - 11:00 AM"],
    sunday: ["No Classes - Enjoy your day!"]
  };
  
  // Function to display the timetable for the selected day
  function showTimetable(day) {
    const dayNameElement = document.getElementById("day-name");
    const classScheduleElement = document.getElementById("class-schedule");
  
    // Update the day name
    dayNameElement.textContent = day.charAt(0).toUpperCase() + day.slice(1) + " Timetable";
  
    // Clear the existing schedule
    classScheduleElement.innerHTML = "";
  
    // Populate the new schedule
    timetables[day].forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      classScheduleElement.appendChild(listItem);
    });
  }
  