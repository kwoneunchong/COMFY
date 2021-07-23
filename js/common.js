$(function() {
    $('#sub').hide();
    $('#main_nav').hover(function(){
        $(this).parent().find('#sub').slideDown();
        $(this).parent().hover(function(){

        },function() {
            $(this).parent().find('#sub').slideUp(900);
        })
    });
});

$(function(){
    $('.sub').hide();
    $('.menu li').on('mouseover',function(){
        $('.sub',this).slideDown('slow');
    }).on('mouseout',function(){
        $('.sub',this).slideUp('fast');
    });
});