import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'sticky-kit/dist/sticky-kit';
import swipebox from 'swipebox/src/js/jquery.swipebox';
import slick from 'slick-carousel/slick/slick';

window.$ = $;
window.jQuery = $;
window.sticky = sticky;
window.swipebox = swipebox;
window.slick = slick;
window.themeSetup = themeSetup;

function themeSetup() {
    //bindme();

    $('#cart').click(function(e){
        e.preventDefault();
        $('#dashboard_aside').animate({
            right:0,
            width: "toggle"
        });
    });

    $("#close").click(function(){
        $('#dashboard_aside').slideUp();
    });

    $("#burger").click(function(){
        $( "#main_nav" ).slideToggle( "slow", function() {
            // Animation complete.
        });
    });

    $('#main_nav > ul > li > a').click(function(e){
        if($(this).attr('href') == "#"){
            e.preventDefault();
            $(this).next().slideToggle();
        }
    });

    $("#contact").click(function(){
        $( "#contact .text" ).slideToggle( "slow", function() {
            // Animation complete.
        });
    });

    /*$('.toggle h2').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(function(){
            $('.toStick').trigger("sticky_kit:recalc");
        });
    });*/

    $('#bg_2').click(function(){
        $('#modalVideo').fadeIn();
    });

    $("#modalVideo .close").click(function(){
        $('#modalVideo').fadeOut();
    });

    hBlock();

    if($('.swipebox').length > 0){
        $('.swipebox').swipebox();
    }
    if($('.colorpicker').length > 0){
        $('.colorpicker').colorpicker({popover: false}).on('change', function (e) {
            $(this).prev('span').css('background-color',$(this).val());
        });

        $('.colorpicker').each(function(){
            $(this).prev('span').css('background-color',$(this).val());
        });
    }

    sticky();

    if($('.slider-for').length> 0){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots : true,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
        });
        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: true,
            dots : false,
            prevArrow : '<a class="prev" href="#" title=""><i class="fa fa-chevron-left"></i></a>',
            nextArrow : '<a class="next" href="#" title=""><i class="fa fa-chevron-right"></i></a>'
        });
    }
}

$(window).resize(function(){
    hBlock();
    $('#main_nav > ul > li > a').next().hide().css('display','');
    sticky();
});

function hBlock(){
    $('.h_parent').each(function(){
        var $this = $(this);
        var t=0;
        var t_elem;
        $this.find('.h_child').css('min-height','');
        $this.find('.h_child').each(function(){
            if ( $(this).outerHeight() > t ) {
                t=$(this).outerHeight();
            }
        });
        $this.find('.h_child').css('min-height',t);
    });
}

/*function bindme(){
    $('.to_that').click(function(){
        let self = $(this);
        let link = self.find('a.bind_me').attr('href');
        let target = self.find('a.bind_me').attr('target');

        if (target === '_blank') {
            window.open(link);
        } else {
            window.location.href = link;
        }
    });
}*/

function sticky(){
    $(".toStick").trigger("sticky_kit:detach");
    if($('.container').width() >= 678 && $('.container').width() < 1140){
        $(".toStick").stick_in_parent({
            offset_top : 50,
            recalc_every : 1
        });
    }
    if($('.container').width() >= 1140){
        $(".toStick").stick_in_parent({
            offset_top : 100,
            recalc_every : 1
        });
    }
}