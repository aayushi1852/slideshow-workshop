let index = 0;

const img = document.querySelector("img");
const next = document.getElementById("next-button");
const back = document.getElementById("back-button");

const imgArray = [
    "Images/image-1.jpg",
    "Images/image-2.jpg",
    "Images/image-3.jpg",
    "Images/image-4.jpg",
    "Images/image-5.jpg",
];

/* IMAGE CLICK EVENT */

img.addEventListener("click", imageNext);

/* BUTTON CLICK EVENT */
next.addEventListener("click", imageNext);
back.addEventListener("click", imageBack);

/* KEYBOARD BUTTON EVENT */
img.addEventListener("keydown", (event) => {
    if(event.key === " " || event.key === "Enter") {
        imageNext();

    }
});

function imageNext() {
    index++;
    img.src = imgArray[index % imgArray.length];
}

function imageBack() {
    index--;
    if (index > 0) {
    img.src = imgArray[index % imgArray.length];
    } 
    img.src = imgArray[index % imgArray.length];
}