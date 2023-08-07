$(function () {
    $('.main_slide').slick({
        arrows: false,
    });

    $('.notice_slide').slick({
        arrows: false,
        vertical: true,
    });
    $('.notice_arrow .prev').on('click', function () {
        $('.notice_slide').slick('slickPrev');
    })
    $('.notice_arrow .next').on('click', function () {
        $('.notice_slide').slick('slickNext');
    })
});