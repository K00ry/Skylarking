import 'slick-carousel';

export default function () {
    const $carousel = $('[data-slick]');
    const $catalog = $('[data-slick-catalog]');


    if (document.documentElement.clientWidth < 551) {
        /* the viewport is less than 768 pixels wide */
        const $nav_slider = $('[data-slick-nav]');
        $nav_slider.slick({
            dots: false,
            variableWidth: true,
            centerMode: true,
            arrows:false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            touchMove:false,
            touchThreshold:5,
            swipeToSlide:false,
        });
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
          //  multipleSlides
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
    $catalog.slick({
        dots: false,
        variableWidth: true,
        arrows:false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                arrows:false,
                breakpoint: 551,
                slidesToShow: 2,
                slidesToScroll: 1,
            }

        ]
    });










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
