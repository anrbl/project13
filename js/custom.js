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


    $('.doc_title li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();
        $('.doc_title li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.doc_center>li').eq(idx).addClass('on').siblings().removeClass();
    });


    var mapContainer = $('#map')[0]
    var mapOption = {
        center: new kakao.maps.LatLng(37.53257409719912, 126.7367517389714),
        level: 3,
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    $(function () {
        kakaoMap();
    })
});