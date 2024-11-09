"use strict";
const block = document.querySelector(".block");
const blockOne = document.querySelector(".block__one");
const blockOneTwo = document.querySelector(".block__one-two");
const blockOneThree = document.querySelector(".block__one-three");
const blockOneThreeOne = document.querySelector(".block__one-three-one");
const blockOneThreeTwo = document.querySelector(".block__one-three-two");
const blockTwo = document.querySelector(".block__two");
const blockTwoThree = document.querySelector(".block__two-three");
const blockThreeFour = document.querySelector(".block__three-four");
const blockThreeFive = document.querySelector(".block__three-five");
const blockFiveSix = document.querySelector(".block__five-six");
const blockFiveSeven = document.querySelector(".block__five-seven");
const blockTwoFour = document.querySelector(".block__two-four");
const blockFourFive = document.querySelector(".block__four-five");
const blockHide = document.querySelector(".block__hide");
const blockFourSix = document.querySelector(".block__four-six");
const blockSixSeven = document.querySelector(".block__six-seven");
const blockSixEight = document.querySelector(".block__six-eight");
const blockFourSixSeven = document.querySelector(".block__four-six-seven");
const blockFourSixEight = document.querySelector(".block__four-six-eight");
const blockEightNine = document.querySelector(".block__eight-nine");
const blockFourSeven = document.querySelector(".block__four-seven");
const inputHorizontal = document.querySelector(".toggle-position-horizontal");
const inputVertical = document.querySelector(".toggle-position-vertical");
// Перемещение элемента внутри блока
function moveBlock(slider, direction) {
    let value = parseInt(slider.value);
    const parent = blockEightNine.closest(".position-relative");
    if (parent) {
        const parentSize = direction === "left" ? parent.clientWidth : parent.clientHeight;
        const blockSize = direction === "left" ? blockEightNine.clientWidth : blockEightNine.clientHeight;
        const maxPercent = ((parentSize - blockSize) / parentSize) * 100;
        if (value > maxPercent) {
            value = maxPercent;
        }
        else if (value < 0) {
            value = 0;
        }
        blockEightNine.style[direction] = `${value}%`;
    }
}
// Перемещение элемента относительно родителя, у которого есть класс position-relative
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
inputVertical.addEventListener("input", () => moveBlock(inputVertical, "top"));
inputHorizontal.addEventListener("input", () => moveBlock(inputHorizontal, "left"));
// Обработчик события контролера
block.addEventListener("click", controller);
