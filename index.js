let creTable;
creTable = "<table border='1' width='300' cellspacing='1' cellpadding='5'>";
for (let i = 1; i <= 10; i++) {
  creTable = creTable + "<tr>";
  for (let j = 1; j <= 10; j++) {
    creTable = creTable + "<td>" + i * j + "</td>";
  }
  creTable = creTable + "</tr>";
}
creTable = creTable + "</table>";
document.write(creTable);
