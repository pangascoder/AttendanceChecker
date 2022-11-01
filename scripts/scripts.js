function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
     fn();
  }
}

domReady(() => setup());


function setup() {
    const collection = document.querySelectorAll(".seat:not(.empty)")
    
    for(var i = 0; i < collection.length; i++) {
        var seat = collection[i]
        seat.onclick = function() {
            // Check status
            // Change color of seat by adding the 'present' class
            this.classList.toggle("present")
            // Remove the name from the remaining students box
            updateRemainingStudents()
            updateStatistics()
        }
    }
    
    // Show all the names of the students in the remaining students box
    updateRemainingStudents()
    updateStatistics()
}

function updateRemainingStudents() {
    const remainingStudentsBox = document.getElementById("RemainingStudentsBox")
    
    // Clear the names
    remainingStudentsBox.innerHTML = ""
    
    // Search for all the seats and display the assigned student
    
    const collection = document.querySelectorAll(".seat:not(.present):not(.empty)")
    
    for(var i = 0; i < collection.length; i++) {
        var seat = collection[i]
        remainingStudentsBox.innerHTML += "<span>" + seat.textContent + "</span>"
    }
    
}

function updateStatistics() {
    const numStudentPresentText = document.getElementById("NumStudentPresent")
    numStudentPresent = document.querySelectorAll(".seat.present:not(.empty)").length
    numStudentPresentText.innerHTML = numStudentPresent
    
    const numStudentAbsentText = document.getElementById("NumStudentAbsent")
    numStudentAbsent = document.querySelectorAll(".seat:not(.present):not(.empty)").length
    numStudentAbsentText.innerHTML = numStudentAbsent
    
}