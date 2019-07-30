(function () {
    let animation = null;

    let buttonStart;
    let buttonStop;
    let selectFont;
    let selectAnimation;
    let textshowAnimation;
    let checkSpeed;

    let currentAminationText;

    let delay = 250;

    let timer = null;

    let index = 0;

    window.onload = function () {
        textshowAnimation = document.getElementById("text-area");

        buttonStart = document.getElementById("start");
        buttonStart.onclick = startAnimation;

        buttonStop = document.getElementById("stop");
        buttonStop.onclick = stopAnimation;

        selectAnimation = document.getElementById("animation");
        selectAnimation.onchange = changeAnimationText;
        selectAnimation.selectedIndex = 0;

        selectFont = document.getElementById("fontsize");
        selectFont.onchange = changeFontSize;
        selectFont.selectedIndex = 2;

        checkSpeed = document.getElementById("turbo");
        checkSpeed.onchange = changeDelay;
    };

    function startAnimation() {
        toogleControl('start');
        currentAminationText = textshowAnimation.value;
        if (timer === null) {
            timer = setInterval(changeFrame, delay);
        }

    }

    function stopAnimation() {
        toogleControl('stop');

        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        index =0;
        restoreOrininalText();
    }

    function changeAnimationText() {
        let selected = selectAnimation.options[selectAnimation.selectedIndex].value;
        animation = ANIMATIONS[selected];


        textshowAnimation.value = animation;
    }

    function changeFontSize() {
        textshowAnimation.style.fontSize = selectFont.options[selectFont.selectedIndex].value;
    }

    function changeDelay() {
        if (checkSpeed.checked) {
            delay = 50;
            clearInterval(timer);
            timer = setInterval(changeFrame, delay);
        }
        else {
            delay = 250;
            clearInterval(timer);
            timer = setInterval(changeFrame, delay);
        }
    }

    function toogleControl(state) {
        if (state === 'start') {
            buttonStart.disabled = true;
            buttonStop.disabled = false;

            selectAnimation.disabled = true;
        } else if (state === 'stop') {
            buttonStart.disabled = false;
            buttonStop.disabled = true;

            selectAnimation.disabled = false;
        }
    }

    function changeFrame() {

        let frames = currentAminationText.split("=====\n");
        textshowAnimation.value = frames[index];
        index++;

        if (index === frames.length)
            index = 0;
    }

    function restoreOrininalText(){
        textshowAnimation.value = currentAminationText;

    }
})();
