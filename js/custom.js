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
});



//main_map :: 카카오 맵 연동 스크립트 (자바)

//맵표시
var mapContainer = document.getElementById('map');
var mapOptions = {
    center: new kakao.maps.LatLng(37.53257409719912, 126.7367517389714),
    level: 2,
};
var map = new kakao.maps.Map(mapContainer, mapOptions);

//마커표시
var markerPosition = new kakao.maps.LatLng(37.532574900, 126.736850);
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);

//마커 위 텍스트 
var mkOnText = document.querySelector('.main_map .desc')
var mkOnPosition = new kakao.maps.LatLng(37.532574900, 126.736850);
var infowindow = new kakao.maps.InfoWindow({
    position: mkOnPosition,
    content: mkOnText
});

infowindow.open(map, marker); 