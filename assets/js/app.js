

$(".slider-2").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "555px",
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "1050px",
            },
        },
        {
            breakpoint: 2800,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "890px",
            },
        },

        {
            breakpoint: 2500,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "760px",
            },
        },
        {
            breakpoint: 2300,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "680px",
            },
        },
        {
            breakpoint: 2000,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "550px",
            },
        },
        {
            breakpoint: 1700,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "370px",
            },
        },
        {
            breakpoint: 1500,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "270px",
            },
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "200px",
            },
        },
        {
            breakpoint: 850,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
});
