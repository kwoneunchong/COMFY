$(function() {
    $('#sub').hide();
    $('#main_nav').hover(function(){
        $(this).parent().find('#sub').slideDown();
        