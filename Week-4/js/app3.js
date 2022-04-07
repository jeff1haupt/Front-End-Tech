let liArray = document.querySelectorAll('#second-ul li');

for (let i = 0; i < liArray.length; i++ ) {
    liArray[i].addEventListener("mouseout", (evt) => {
        console.log(evt);
        if (evt.target.innerText == "Red") {
            evt.target.classList.add('red');
        } else if (evt.target.innerText == "Orange") {
            evt.target.classList.add('orange');
        } else {
            evt.target.classList.add('green');
        }
    })
}