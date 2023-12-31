const toggleDropdown = () => {
    let dropdown = document.getElementById('myDropdown');
    
    // Toggle the display property using 'block' and 'none'
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    // Hide the dropdown menu on page load
    let dropdown = document.getElementById('myDropdown');
    dropdown.style.display = "none";
  });
  
  document.getElementById('menuButton').addEventListener('click', function (event) {
    // Prevent the click on the button from reaching the window.onclick event
    event.stopPropagation();
    
    // Toggle the dropdown visibility
    toggleDropdown();
  });
  
  window.addEventListener('click', function (event) {
    let dropdown = document.getElementById('myDropdown');
  
    // Check if the click is outside the dropdown
    if (!event.target.matches('.dropdown-content') && !event.target.matches('.dropdown-btn')) {
      // Check if the dropdown is currently visible before hiding it
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  });
  