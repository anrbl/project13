$(function () {
    //헤더
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });
    $('.head_customer .nav_menu').on('click', function () {
        $('.gnb').toggleClass('open');
        $('.head_customer .nav_menu').toggleClass('open');
    })

    //메인 비주얼 슬라이드 - 페이드 모드 (main>seciton.main_visual>.main_slide)
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4500,
        dots: true,
    });


    // 공지사항 슬라이드 - 버티컬 모드 (main>section.main_visual>.notice_slide)
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


    //진료과 소개 탭메뉴(main>section.main_doctor.doctor_right>.doctor_title)
    $('.doc_title li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();
        $('.doc_title li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.doc_center>li').eq(idx).addClass('on').siblings().removeClass();
    });

    //패밀리사이트(footer>ft>foot_family)
    $('.foot_family span').on('click', function () {
        $('.foot_family ul').toggleClass('on');
    })



    //maxwidth 768px
    $('.mobile').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.head_customer').toggleClass('on');
    })
    $('.gnb>ul>li>a').on('click', function (e) {
        let find = $(this).parent().siblings().find('.sub');
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            find.stop().slideUp();
            $('.sub').toggleClass('on');
        }
    })
    $('.sub>li>a').on('click', function (e) {
        let pin = $(this).parent().siblings().find('.sub_list').stop().slideUp();
        if ($('.sub').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub_list').stop().slideUp();
            $('.sub>li').addClass('on').siblings().removeClass('on');
            // $('.sub>li').toggleClass('on');
        }
    })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    })
    $('.gnb').on('wheel', function (e) {
        if ($(this).hasClass('open')) {
            e.preventDefault();
        } else if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });
    $('.head_customer').on('wheel', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });
});



//main_map :: 카카오 맵 연동 스크립트 (자바)

//맵표시
var mapContainer = document.getElementById('map');
var mapOptions = {
    center: new kakao.maps.LatLng(37.532574900, 126.736850),
    draggable: false,
    level: 2,
};
var map = new kakao.maps.Map(mapContainer, mapOptions);
function setZoomable(zoomable) {
    map.setZoomable(zoomable);
}

//마커표시
var markerPosition = new kakao.maps.LatLng(37.532574900, 126.736850);
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);

//마커 위 텍스트 
var mkOnText = document.querySelector('.main_map .desc')
//var mkOnPosition = new kakao.maps.LatLng(37.532574900, 126.736850);
var infowindow = new kakao.maps.InfoWindow({
    //position: mkOnPosition,
    content: mkOnText
});

infowindow.open(map, marker);

