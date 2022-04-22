$( function() { // jQuery that replaced document.ready()
    
    let breweries = [];
    let hasRan = false;

    

    if ( hasRan != true ) {
        $.get('https://api.openbrewerydb.org/breweries?per_page=25', (data) => { //AJAX call
            for (let i = 0; i < data.length; i++ ) { // brew is an object and you can access all the properties 
                breweries.push(data[i])

            }
            buildTable(breweries)
        })
        hasRan = true;
    }

    function buildTable(data) {
        let tBody = document.getElementById('t-body');
        tBody.innerHTML = ""
        for ( let i = 0; i < data.length; i++ ) {
            let row = tBody.insertRow(0);
            let name = row.insertCell(0);
            let address = row.insertCell(1);
            let cityState = row.insertCell(2);
            let phone = row.insertCell(3);
            let updateDelete = row.insertCell(4);
    
            row.setAttribute('id', i);
    
           
    
            name.innerHTML = data[i].name;
            address.innerHTML = data[i].street;
            cityState.innerHTML = `${data[i].city}, ${data[i].state}`;
            phone.innerHTML = data[i].phone;
    
            updateDelete.innerHTML = `
                <button type="button" class="btn btn-danger">Delete Row</button>
                <button type="button" class="btn btn-warning">Update Row</button>
            `
    
            let deleteButton = document.querySelector('.btn-danger');
            deleteButton.addEventListener('click', (evt) => {
                let id = evt.target.parentElement.parentElement.getAttribute('id');
                breweries.splice(id, 1);
                console.log(breweries);
                buildTable(breweries);
            });
        }
    }

    let addButton = document.getElementById('add-brewery');
    addButton.addEventListener('click', (evt) => {
        let breweryName = document.getElementById('brewery_name').value;
        let tBody = document.getElementById('t-body');
        let row = tBody.insertRow(0);
        let name = row.insertCell(0);
        let address = row.insertCell(1);
        let cityState = row.insertCell(2);
        let phone = row.insertCell(3);
        let updateDelete = row.insertCell(4);

        row.setAttribute('id', breweries.length);

        

        name.innerHTML = breweryName;
        // address.innerHTML = data[i].street;
        // cityState.innerHTML = `${data[i].city}, ${data[i].state}`;
        // phone.innerHTML = data[i].phone;

        updateDelete.innerHTML = `
            <button type="button" class="btn btn-danger">Delete Row</button>
            <button type="button" class="btn btn-warning">Update Row</button>
        `
        breweries.push(row);
        console.log(breweries)
        let deleteButton = document.querySelector('.btn-danger');
        deleteButton.addEventListener('click', (evt) => {
            let id = evt.target.parentElement.parentElement.getAttribute('id');
            breweries.splice(id, 1);
            console.log(breweries);
            buildTable(breweries);
        });
    })


    // $.ajax(
    //     {url: 'https://randomuser.me/api/'}
    // ).done( (data) => console.log(data));
    console.log(breweries);
    
  


})