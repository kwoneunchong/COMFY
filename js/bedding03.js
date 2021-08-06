// const subs = document.getElementById("pickbtn");
// const subs = document.getElementById('slideIn').getElementsByClassName('pick');

// subs.addEventListener("click", function() {
//     if(subs.innerText === '♡') {
//         subs.innerText = '♥';
//     } else subs.innerText ='♡';
// });



$(".pick").click(function(){ 
    var like = $(this).text();

    if (like === '♡') {
        $(this).text('♥');
    } else {
        $(this).text('♡');
    }
    // if(subs.innerText === '♡') {
    //     subs.innerText = '♥';
    // } else subs.innerText ='♡';
});


$(".pick_s").click(function(){ 
    var like = $(this).text();

    if (like === '♡') {
        $(this).text('♥');
    } else {
        $(this).text('♡');
    }
    // if(subs.innerText === '♡') {
    //     subs.innerText = '♥';
    // } else subs.innerText ='♡';
});