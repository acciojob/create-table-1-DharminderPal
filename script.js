function insert_Row() {
    // Get the table body element
    var tableBody = document.getElementById("sampleTable").getElementsByTagName("tbody")[0];

    // Create a new row (<tr>) element
    var newRow = tableBody.insertRow(); // Insert at the end of the table body

    // Create two cells for the new row
    var cell1 = newRow.insertCell(0); // Left cell
    var cell2 = newRow.insertCell(1); // Right cell

    // Set the text content of the cells to the expected values
    cell1.textContent = "Row1 cell1";  // Set to expected value
    cell2.textContent = "Row1 cell2";  // Set to expected value
}
