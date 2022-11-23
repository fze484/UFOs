// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Creating a function to build a table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    
    });
};
// function that handles user clicks and filters table based on date selected
function handleClick() {
    //select element with datetime id and store its value in date variable
    let date = d3.select("#datetime").property("value");
    
    //set a default filter and save it to a new variable.
    //If no date has been entered as a filter, then all of the data 
    //will be returned instead.
    let filteredData = tableData;

    //JavaScript is to check for a date. If one is present, we want it to return only the 
    //data with that date. 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
    // Attach an event to listen for the form button 
};
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);
