$(document).ready(function() { // this jQuery code won't run until the webpage is completely loaded
    // grab html elements in jQuery 
    const person1 = {
        first: "Jeff",
        last: "Haupt",
        email: "jhaupt@southbendin.gov"
    }
    let tableBody = $("table"); 
    console.log(tableBody.hasClass('table-border'))
    
    let tableIdGrab = $("#main-table");
    let classTable = $(".first-name");
    console.log(classTable);

    tableBody.append('<tr id="last-row"></tr>');
    let tableRows = $("tr");
    let lastRow = $("#last-row");
    lastRow.append(`
        <td>4</td>
        <td>${person1.first}</td>
        <td>${person1.last}</td>
        <td>${person1.email}</td>`
    )
    console.log(tableRows);
    tableBody.removeClass('table-border');
})