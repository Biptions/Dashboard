/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menuFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Enable/Disable Table
$(document).ready(function () {
  $('#dtBasicExample').DataTable({
  "searching": false // false to disable search (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');
  });