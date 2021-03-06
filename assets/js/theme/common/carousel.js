import 'slick-carousel';

export default function () {
    const $carousel = $('[data-slick]');
    const $catalog = $('[data-slick-catalog]');
    const $productViewCarou = $('[data-pruduct-view-slick]');

    $productViewCarou.slick({
        "infinite": false,
        "mobileFirst": true,
        "slidesToShow": 5,
        "slidesToScroll": 1

    });


    if (document.documentElement.clientWidth < 551) {
        $catalog.slick({
            dots: false,
            variableWidth: true,
            arrows:false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchMove:true,
            touchThreshold:20,
            swipeToSlide:true,
            responsive: [
                {
                    arrows:false,
                    breakpoint: 551,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            ]
        });
        const $shopSlider = $('[data-slick-shop]');
        $shopSlider.slick({
            dots: false,
            variableWidth: true,
            arrows:false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            touchMove:true,
            touchThreshold:20,
            swipeToSlide:true,
        });

        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true
        });
        const $nav_slider = $('[data-slick-nav]');
        $nav_slider.slick({
            dots: false,
            variableWidth: true,
            centerMode: true,
            arrows:false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            touchMove:true,
            touchThreshold:20,
            swipeToSlide:true,
        });

        let activeLink =  $('.activeLink').parent().attr("data-slick-index");
        $nav_slider.slick('slickGoTo',activeLink);
    }




    if ($carousel.length) {
        const multipleSlides = $carousel[0].childElementCount > 1;
        // console.log(multipleSlides);
        $carousel.slick({
            dots: false,
            variableWidth: true,
            arrows:true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            touchMove:true,
            touchThreshold:20,
            swipeToSlide:true,
            responsive: [
                {
                    arrows:false,
                    breakpoint: 551,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }

            ]
        });
    }











    // Alternative image styling for IE, which doesn't support objectfit
    if (typeof document.documentElement.style.objectFit === 'undefined') {
        $('.heroCarousel-slide').each((index, element) => {
            const $container = $(element);
            const imgUrl = $container.find('img').data('lazy');

            if (imgUrl) {
                $container.css('backgroundImage', `url(${imgUrl})`).addClass('compat-object-fit');
            }
        });
    }
}
