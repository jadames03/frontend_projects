const container = document.getElementById('container');
const text = document.getElementById('text');
// declaring and initializing two constant variables with element ids

const totalTime = 7500;             
// 7.5 seconds
const breatheTime = (totalTime / 5) *2;
// 3 seconds
const holdTime = totalTime / 5;
// 1.5 seconds
breatheAnimation();

function breatheAnimation() {
    // creating a func called breatheAnimation
    text.innerText = 'Breathe In!';
    //  initialzing text context of HTMLElement 'text' with 'Breathe In!'
    container.className = 'container grow';
    // initializing class name of HTMLElement 'container' with 'container grow'
    setTimeout(() => {
        text.innerText = 'Hold';
          //  initialzing text context of HTMLElement 'text' with 'Hold'
        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            // initializing text context of HTMLElement 'text' with 'Breathe Out!'
            container.className = 'container shrink';
            // initializing class name of HTMLElement 'container' with 'container shrink'
        }, holdTime);
        // setTimeout() executes function after holdTime(1.5 secs)
    }, breatheTime);
    // once the inner setTimeout() method executes...breatheTime initiates.
}
setInterval(breatheAnimation, totalTime);
// setting interval time for breatheAnimation function