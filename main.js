

document.addEventListener("DOMContentLoaded", function () {

    var myButton = document.getElementById("myButton");

    if (myButton) {
        myButton.addEventListener("click", function () {
            alert("Button clicked!")
        });
    }
});
