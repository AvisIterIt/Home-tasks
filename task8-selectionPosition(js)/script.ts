const block = document.querySelector(".block") as HTMLElement

const blockOne = document.querySelector(".block__one") as HTMLElement
const blockOneTwo = document.querySelector(".block__one-two") as HTMLElement
const blockOneThree = document.querySelector(".block__one-three") as HTMLElement
const blockOneThreeOne = document.querySelector(".block__one-three-one") as HTMLElement
const blockOneThreeTwo = document.querySelector(".block__one-three-two") as HTMLElement

const blockTwo = document.querySelector(".block__two") as HTMLElement
const blockTwoThree = document.querySelector(".block__two-three") as HTMLElement
const blockThreeFour = document.querySelector(".block__three-four") as HTMLElement
const blockThreeFive = document.querySelector(".block__three-five") as HTMLElement
const blockFiveSix = document.querySelector(".block__five-six") as HTMLElement
const blockFiveSeven = document.querySelector(".block__five-seven") as HTMLElement

const blockTwoFour = document.querySelector(".block__two-four") as HTMLElement
const blockFourFive = document.querySelector(".block__four-five") as HTMLElement
const blockHide = document.querySelector(".block__hide") as HTMLElement
const blockFourSix = document.querySelector(".block__four-six") as HTMLElement
const blockSixSeven = document.querySelector(".block__six-seven") as HTMLElement
const blockSixEight = document.querySelector(".block__six-eight") as HTMLElement
const blockFourSixSeven = document.querySelector(".block__four-six-seven") as HTMLElement
const blockFourSixEight = document.querySelector(".block__four-six-eight") as HTMLElement
const blockEightNine = document.querySelector(".block__eight-nine") as HTMLElement
const blockFourSeven = document.querySelector(".block__four-seven") as HTMLElement

const inputHorizontal = document.querySelector(".toggle-position-horizontal") as HTMLInputElement
const inputVertical = document.querySelector(".toggle-position-vertical") as HTMLInputElement

// Перемещение элемента внутри блока

function moveBlock(slider: HTMLInputElement, direction: "left" | "top") {
    let value = parseInt(slider.value)

    const parent = blockEightNine.closest(".position-relative") as HTMLElement

    if (parent) {
        const parentSize = direction === "left" ? parent.clientWidth : parent.clientHeight
        const blockSize = direction === "left" ? blockEightNine.clientWidth : blockEightNine.clientHeight

        const maxPercent = ((parentSize - blockSize) / parentSize) * 100

        if (value > maxPercent) {
            value = maxPercent
        } else if (value < 0) {
            value = 0
        }

        blockEightNine.style[direction] = `${value}%`
    }
}

// Перемещение элемента относительно родителя, у которого есть класс position-relative

function togglePosition(parent: HTMLElement) {
    if (parent.classList.contains("position-relative")) {
        blockSixEight.classList.remove("position-relative")
    } else {
        blockSixEight.classList.add("position-relative")
    }
}

// Удаляет класс background-color если он есть и добавляет если нет

function toggleBorder(parent: HTMLElement) {
    if (parent.classList.contains("background-color")) {
        blockSixEight.classList.remove("background-color")
    } else {
        blockSixEight.classList.add("background-color")
    }
}

// Контролирует нажатие на блок

function controller(e: Event) {
    if (e.target === blockFourSix) {
        blockFourSix.classList.toggle("position-relative")
        blockFourSix.classList.toggle("background-color")
        toggleBorder(blockFourSix)
        togglePosition(blockFourSix)
    } else if (e.target === blockTwoFour) {
        blockTwoFour.classList.toggle("position-relative")
        blockTwoFour.classList.toggle("background-color")
        toggleBorder(blockTwoFour)
        togglePosition(blockTwoFour)
    } else if (e.target === blockTwo) {
        blockTwo.classList.toggle("position-relative")
        blockTwo.classList.toggle("background-color")
        toggleBorder(blockTwo)
        togglePosition(blockTwo)
    } else if (e.target === block) {
        block.classList.toggle("position-relative")
        block.classList.toggle("background-color")
        toggleBorder(block)
        togglePosition(block)
    }
}

// Обработчик событий ползунков
inputVertical.addEventListener("input", () => moveBlock(inputVertical, "top"))
inputHorizontal.addEventListener("input", () => moveBlock(inputHorizontal, "left"))

// Обработчик события контролера

block.addEventListener("click", controller)
