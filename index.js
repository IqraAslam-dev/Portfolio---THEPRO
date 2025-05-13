const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";
});

const contactBtn = document.getElementById("contactBtn");
const toggleImage = document.getElementById("toggleImage");

let imgToggle = false;

contactBtn.addEventListener("click", () => {
    if (!imgToggle) {
        toggleImage.src = "./images/beatiful hair.png"; // alternate image
    } else {
        toggleImage.src = "./images/download.jpg"; // original image
    }
    imgToggle = !imgToggle;
});


// Toggle profile image on click
