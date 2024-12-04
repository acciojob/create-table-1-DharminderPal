 function insert_Row() {
            // Get the table element by its ID
            var table = document.getElementById("sampleTable");

            // Create a new row (<tr>) element
            var newRow = table.insertRow(1); // Insert at index 1 (below the header row)

            // Create two cells for the new row
            var cell1 = newRow.insertCell(0); // Left cell
            var cell2 = newRow.insertCell(1); // Right cell

            // Set the text content of the cells
            cell1.textContent = "New Cell1";
            cell2.textContent = "New Cell2";
        }