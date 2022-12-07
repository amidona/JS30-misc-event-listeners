const divs = document.querySelectorAll('div');
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); 
    // Will stop the bubbling up process and tell it "hey, I clicked on the one and only one that I wanted". Capture: true/false is going to play an important role in what you're logging, however. In this example, false will give you three, while true will give you one.
}

// divs.forEach(div => div.addEventListener("click", logText));

// This goes from the top down, capturing all those events, then it starts at the bottom and starts doing what's called a bubble. So the capture goes from top down (before events fire). Then it will start to bubble up, so it triggers from bottom up.

// So your console is going to log `three` `two` `one`

// divs.forEach(div => div.addEventListener("click", logText, {
//     capture: true
// }));

// This means logText doesn't get run on the bubble up but on the capture down. So your console is going to log `one` `two` `three`.

divs.forEach(div => div.addEventListener("click", logText, {
    capture: false,
    once: true // will listen for a click and then unbind itself (i.e., turns off the event listener)
}));

// Useful for, say, check-out buttons, where you only want that to be able to trigger once
button.addEventListener("click", () => {
    console.log('click!!')
}, {
    once: true
})