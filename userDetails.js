function Function() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
  }
  
  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
  }