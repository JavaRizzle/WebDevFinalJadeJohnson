/*
* Page Loads
* Get form and colorInput objects
* register submit handler
*   sumbit handler stop reload
*   then set bg color with dom
*/
function domLoaded() {
    // get form and colorInput objects
    let colorForm = document.querySelector("#colorForm");
    let colorInput = document.querySelector("#colorInput");

    // register submit handler and define
    function onSubmit(event) {
        event.preventDefault();
        let mainObj = document.querySelector("main");
        mainObj.style.backgroundColor = colorInput.value;
        if (document.querySelector("#galleryBody")) {
            document.querySelector('#galleryBody').style.backgroundColor = colorInput.value;
        }
    }
    colorForm.addEventListener('submit', onSubmit);
}
document.addEventListener('DOMContentLoaded', domLoaded);