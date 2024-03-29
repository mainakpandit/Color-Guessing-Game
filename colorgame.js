var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function () {
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //new Random colors
    pickedColor = pickColor();
    //change display color
    colorDisplay.textContent = pickedColor;
    //Recolor the square
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    //click Listeners to Squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all square to change the color to the given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make and array
    var arr = [];
    //Add random color to an array
    for (var i = 0; i < num; i++) {
        //random colors
        arr.push(randomColor());
    }
    //Return the array
    return arr;
}

function randomColor() {
    //pick red 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick green 0 - 255
    var g = Math.floor(Math.random() * 265);
    //pick blue 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}