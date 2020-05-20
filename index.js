const modal = document.getElementById("modal");
const colorArray = ["rgb(31, 63, 38)", "rgb(44, 62, 80)", "rgb(81, 59, 56)"];
function changeBackground() {
    const mainDiv = document.getElementById("table");
    const oldBackground = window.getComputedStyle(document.querySelector('#table')).backgroundColor;
    switch (oldBackground) {
        case colorArray[0]:
            mainDiv.style.background = colorArray[1];
            break;
        case colorArray[1]:
            mainDiv.style.background = colorArray[2];
            break;
        case colorArray[2]:
            mainDiv.style.background = colorArray[0];
            break;
    }
}

function togglePicture() {
    const label = document.getElementById("label");
    const image = document.getElementById("logo");
    if (label.textContent === 'Audi') {
        label.innerHTML = "Bmw";
        image.src = "resource/bmw.png"
    } else {
        label.innerHTML = "Audi";
        image.src = "resource/audi.png"
    }
}

function changeButtonText() {
    const buttonText = document.getElementById("changeText");
    const textElement = document.getElementById("text")
    if (buttonText.textContent === 'Button') {
        buttonText.innerHTML = "Changed"
        textElement.innerText =
            "Жизнь коротка и быстротечна,\n" +
            "И лишь литература вечна.\n" +
            "Поэзия душа и вдохновенье,\n" +
            "Для сердца сладкое томленье."
    } else {
        buttonText.innerHTML = "Button"
        textElement.innerText =
            "И труд нелеп, и бестолкова праздность,\n" +
            "И с плеч долой всё та же голова,\n" +
            "Когда приходит бешеная ясность,\n" +
            "Насилуя притихшие слова."
    }
}

function showDialogBox() {
    modal.style.display = "block";
}

function closeDialogBox() {
    modal.style.display = "none";
}

function submitDialogBox() {
    const inputText = document.getElementById("input").value;
    document.getElementById("welcome-text").innerText = `Hello, ${inputText}! How are you?`;
    closeDialogBox();
}


