const subs = document.getElementsByClassName("pick")

subs.addEventListener("click", function() {
    if(subs.innerText === '♡') {
        subs.innerText = '♥';
    } else subs.innerText ='♡';
});