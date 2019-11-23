// website loader
$(document).ready(function () {
  // listen for load of window
  setTimeout(function () {
    $(".loader-wrapper").addClass('zero-opacity')
  }, 3000);
  setTimeout(function () {
    $(".loader-wrapper").addClass('hidden');
  }, 4000);
});

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById('mySidebar');

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = 'none';
}