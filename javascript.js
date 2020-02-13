function getNum() {
    var num = Math.random() * 6;
    num = Math.floor(num) + 1;
    return num;
}

var p1 = getNum();
var p2 = getNum();

document.querySelector('.img1').src = "images/dice" + p1 + ".png";
document.querySelector('.img2').src = "images/dice" + p2 + ".png";

if (p1 > p2) {
    document.querySelector('h1').textContent = "Player 1 wins!"
} else if (p2 > p1) {
    document.querySelector('h1').textContent = "Player 2 wins!"
} else {
    document.querySelector('h1').textContent = "It's a tie!"
}