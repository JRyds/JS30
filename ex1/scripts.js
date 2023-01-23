
//DO AN ACTION WHEN THE "A" KEY IS PRESSED
const clickChange = document.querySelector(".clap");

clickChange.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        console.log("A key pressed");
    }
});

