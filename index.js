const chameleonBtn = document.getElementById("chameleonBtn");
const hideBtn = document.getElementById("hideBtn");
const readBtn = document.getElementById("readBtn");
const themeBtn = document.getElementById("themeBtn");
const messageBtn = document.getElementById("messageBtn");
const growBtn = document.getElementById("growBtn");
const greenBtn = document.getElementById("greenBtn");
const animalBtn = document.getElementById("animalBtn");
const trickBtn = document.getElementById("trickBtn");
const showBorderBtn = document.getElementById("showBorderBtn");
const hideBorderBtn = document.getElementById("hideBorderBtn");

const square = document.getElementById("square");
const text = document.getElementById("text");
const secret = document.getElementById("secret");
const circle = document.getElementById("circle");
const lamp = document.getElementById("lamp");
const animal = document.getElementById("animal");
const photo = document.getElementById("photo");

chameleonBtn.onclick = function () {
    chameleonBtn.style.backgroundColor = "red";
    chameleonBtn.style.color = "white";
};

hideBtn.onclick = function () {
    square.style.display = "none";
};

readBtn.onclick = function () {
    text.style.fontSize = "24px";
};

themeBtn.onclick = function () {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
};

messageBtn.onclick = function () {
    secret.style.display = "block";
};

growBtn.onclick = function () {
    circle.style.width = "200px";
    circle.style.height = "200px";
};

greenBtn.onclick = function () {
    lamp.style.backgroundColor = "green";
};

animalBtn.onclick = function () {
    animal.src = "https://suret.pics/uploads/posts/2023-09/1695299111_2-4.jpg";
};

trickBtn.onclick = function () {
    trickBtn.innerText = "Voy, endi sen geysan -------------------------------------------------------------------------------------------- (hazil !)";
};

showBorderBtn.onclick = function () {
    photo.style.border = "5px solid blue";
};

hideBorderBtn.onclick = function () {
    photo.style.border = "none";
};