$(document).ready(function() {
    $('.banner__home').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        prevArrow: '<div class="slick-arrow slick-prev"><i class="pe-7s-angle-left-circle" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-arrow slick-next"><i class="pe-7s-angle-right-circle" aria-hidden="true"></i></div>',
        customPaging: function (slick, index) {
            return "<span></span>";
        }
    });
//
    $('.section__product').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        // cssEase: 'ease-in-out',
        // touchThreshold: 100,
        prevArrow: '<div class="slick-arrow slick-prev"><i class="pe-7s-angle-left-circle" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-arrow slick-next"><i class="pe-7s-angle-right-circle" aria-hidden="true"></i></div>',
        customPaging: function (slick, index) {
            return "<span></span>";
        }
    });
    //scroll mouse
    $(window).scroll(function(){
        const fromTop = $(this).scrollTop();
        if(fromTop > 400){
            $('.header__top').addClass('scroll__active');
        }else{
            $('.header__top').removeClass('scroll__active');
        }
    });
    //toggle search form
    $('.pe-7s-search').click(function () {
        $('.overlay').addClass('active-search');
    })
    //close search
    $('#close-search').click(function () {
        $('.overlay').removeClass('active-search');
    })
//    toggle config
    $('.pe-7s-config').click(function () {
       $('#config').toggleClass('active-config')
    })
//    toggle cart
    $('.pe-7s-cart').click(function () {
        $('.cart__content').toggleClass('active-config')
    })
//    minus and plus quantity
    $(".qtybtn").on("click", function () {
        const button = $(this);
        var oldValue = button.closest('.product-quantity').find('input.quantity-input').val();
        if (button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            }
            else {
                newVal = 1;
            }
        }
        $('.quantity-input').attr('value',newVal)
    });
//    zoom product
    $('#ex1').zoom();
});
