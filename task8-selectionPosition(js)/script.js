var block = document.querySelector(".block");
var blockOne = document.querySelector(".block__one");
var blockOneTwo = document.querySelector(".block__one-two");
var blockOneThree = document.querySelector(".block__one-three");
var blockOneThreeOne = document.querySelector(".block__one-three-one");
var blockOneThreeTwo = document.querySelector(".block__one-three-two");
var blockTwo = document.querySelector(".block__two");
var blockTwoThree = document.querySelector(".block__two-three");
var blockThreeFour = document.querySelector(".block__three-four");
var blockThreeFive = document.querySelector(".block__three-five");
var blockFiveSix = document.querySelector(".block__five-six");
var blockFiveSeven = document.querySelector(".block__five-seven");
var blockTwoFour = document.querySelector(".block__two-four");
var blockFourFive = document.querySelector(".block__four-five");
var blockHide = document.querySelector(".block__hide");
var blockFourSix = document.querySelector(".block__four-six");
var blockSixSeven = document.querySelector(".block__six-seven");
var blockSixEight = document.querySelector(".block__six-eight");
var blockFourSixSeven = document.querySelector(".block__four-six-seven");
var blockFourSixEight = document.querySelector(".block__four-six-eight");
var blockEightNine = document.querySelector(".block__eight-nine");
var blockFourSeven = document.querySelector(".block__four-seven");
var inputHorizontal = document.querySelector(".toggle-position-horizontal");
var inputVertical = document.querySelector(".toggle-position-vertical");
// Перемещение элемента внутри блока
function moveBlock(slider, direction) {
    var value = parseInt(slider.value);
    var parent = blockEightNine.closest(".position-relative");
    if (parent) {
        var parentSize = direction === "left" ? parent.clientWidth : parent.clientHeight;
        var blockSize = direction === "left"
            ? blockEightNine.clientWidth
            : blockEightNine.clientHeight;
        var maxPercent = ((parentSize - blockSize) / parentSize) * 100;
        if (value > maxPercent) {
            value = maxPercent;
        }
        else if (value < 0) {
            value = 0;
        }
        blockEightNine.style[direction] = "".concat(value, "%");
    }
}
// Перемещение элемента относительно родителя, у которого усть класс position-relative
function togglePosition(parent) {
    if (parent.classList.contains("position-relative")) {
        blockSixEight.classList.remove("position-relative");
    }
    else {
        blockSixEight.classList.add("position-relative");
    }
}
// Удаляет класс background-color если он есть и добавляет если нет
function toggleBorder(parent) {
    if (parent.classList.contains("background-color")) {
        blockSixEight.classList.remove("background-color");
    }
    else {
        blockSixEight.classList.add("background-color");
    }
}
// Контролирует нажатие на блок
function controller(e) {
    if (e.target === blockFourSix) {
        blockFourSix.classList.toggle("position-relative");
        blockFourSix.classList.toggle("background-color");
        toggleBorder(blockFourSix);
        togglePosition(blockFourSix);
    }
    else if (e.target === blockTwoFour) {
        blockTwoFour.classList.toggle("position-relative");
        blockTwoFour.classList.toggle("background-color");
        toggleBorder(blockTwoFour);
        togglePosition(blockTwoFour);
    }
    else if (e.target === blockTwo) {
        blockTwo.classList.toggle("position-relative");
        blockTwo.classList.toggle("background-color");
        toggleBorder(blockTwo);
        togglePosition(blockTwo);
    }
    else if (e.target === block) {
        block.classList.toggle("position-relative");
        block.classList.toggle("background-color");
        toggleBorder(block);
        togglePosition(block);
    }
}
// Обработчик событий ползунков
inputVertical.addEventListener("input", function () { return moveBlock(inputVertical, "top"); });
inputHorizontal.addEventListener("input", function () {
    return moveBlock(inputHorizontal, "left");
});
// Обработчик события контролера
block.addEventListener("click", controller);
