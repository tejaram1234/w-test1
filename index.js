var table = document.getElementById("myTable");
var rows = table.getElementsByTagName("tr");

for (var i = 0; i < rows.length; i++) {
  if (i % 2 === 0) {
    rows[i].style.backgroundColor = "red";
  } else {
    rows[i].style.backgroundColor = "green";
  }
}