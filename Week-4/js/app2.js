// addEventListener 

let counter = 0;

let btn = document.getElementById('add-item');
btn.addEventListener("click", (evt) => {
    let text = document.getElementById('item-add').value;
    
    //create li item 
    let li = document.createElement('li'); 
    li.setAttribute('id', `li${counter}`);
    let button = document.createElement('button');
    button.innerText = 'remove item';

    // were adding the 'delete' event listener on the fly as the button is created
    button.addEventListener("click", (evt) => { // the 'click' has to happen before this code runs
        let liToDelete = evt.target.parentNode;
        let ul = document.getElementById('main-list');
        ul.removeChild(liToDelete);
    })
    li.innerHTML = text;
    li.appendChild(button);

    
    // grab the ul element
    let ul = document.getElementById('main-list');
    ul.appendChild(li);

    // empties the input box after everything has been added
    document.getElementById('item-add').value = "";
    counter++;
})