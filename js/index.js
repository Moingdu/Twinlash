$(function(){
    var win_width=$(window).width();
    if(win_width>=1025){
        //헤더 nav 클릭시 그 위치로 이동
    $('.nav1').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:940
        })
    })
    $('.nav2').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:1880
        })
    })
    $('.nav3').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:4570
        })
    })
    $('.nav4').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:5510
        })
    })
    $('.nav5').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:7365
        })
    })
    //비쥬얼 오른쪽 상자 & 비쥬얼 사진 좌우 슬라이드
    var sw=0;
    $('.slide').click(function(){
        if(sw==0){
            sw=1;
            $('.visual_box ul').animate({
                left:-1920
            })
            $('.pc .sub').hide()
            $('.slide').animate({
                width: '1000%'
            })
            $('.slide').animate({
                width: '250px'
            },10)
            $('.pc .sub_2').fadeIn(1500)
        }else{
            sw=0;
            $('.visual_box ul').animate({
                left:0
            })
            $('.pc .sub_2').hide()
            $('.slide').animate({
                width: '1000%'
            })
            $('.slide').animate({
                width: '250px'
            },10)
            $('.pc .sub').fadeIn(1500)
        }
    })
    //후기 이미지들 자동 슬라이드
    var li_width=$('.top ul li').width();
    function movefn(){
        $('.top ul').animate({
            left:'-='+li_width
        },500,function(){
            $('.top ul li:first').appendTo('.top ul');
            $('.top ul').css('left',0);
        });
    }
    setInterval(movefn,3000);
    //후기 이미지 하단 바
    var bar_width=$('.colorbar').width();
    function movebar(){
        $('.colorbar').animate({
            width:'+='+bar_width
        });
    }
    setInterval(movebar,3000);
    function movebar2(){
        $('.colorbar').stop().animate({
            width: '20%'
        });
    }
    setInterval(movebar2,15000);
    //양쪽 글씨가 일정높이가 되면 달라붙는다
    $(window).scroll(function(){
        var sTop=$(this).scrollTop();
        if(sTop>=1900){
            $('.time').addClass('active');
            $('.float_menu').addClass('active');
            $('.first_phone').css('margin-left','640px')
            $('.second_phone').css('margin-left','850px')
            $('.third_phone').css('margin-left','760px')
        }else{
            $('.time').removeClass('active');
            $('.float_menu').removeClass('active');
        }
        if(sTop>=4400){
            $('.time').removeClass('active');
            $('.float_menu').removeClass('active');
        }
    })
    //일정 높이되면 오늘쪽 서브메뉴들이 바뀜
    $('.text_group').hide();
    $('.t1').show();
    $(window).scroll(function(){
        var T1=$(this).scrollTop();
        if(T1>=1900){
            $('.text_group').hide();
            $('.t1').show();
        if(T1>=2540){
            $('.text_group').hide();
            $('.t2').show();
        }
        if(T1>=3480){
            $('.text_group').hide();
            $('.t3').show();
        }
        }
    })
    //이미지들이 스크롤 내릴때 올라오는 애니메이션
    $(window).scroll(function(){
        var F1=$(this).scrollTop();
        var F2=$(this).scrollTop();
        var F3=$(this).scrollTop();
        var F4=$(this).scrollTop();
        var F5=$(this).scrollTop();
        var F6=$(this).scrollTop();
        var F7=$(this).scrollTop();
        var F8=$(this).scrollTop();
        var F9=$(this).scrollTop();
        var F10=$(this).scrollTop();
        var F11=$(this).scrollTop();
        var F12=$(this).scrollTop();
        var F13=$(this).scrollTop();
        var F14=$(this).scrollTop();
        var F15=$(this).scrollTop();
        var F16=$(this).scrollTop();
        var F17=$(this).scrollTop();
        var F18=$(this).scrollTop();
        var F19=$(this).scrollTop();
        var F20=$(this).scrollTop();
        var F21=$(this).scrollTop();
        var F22=$(this).scrollTop();
        if(F1>=900){
            $('.time').css('margin-top','120px').fadeOut();
            $('.float_menu').css('margin-top','100px').fadeOut()
            $('.fp1').css('margin-top','100px').fadeOut()
        }
        if(F2>=1150){
            $('.time').stop(F1).fadeIn().css('margin-top','20px')
            $('.float_menu').stop(F1).fadeIn().css('margin-top','0')
            $('.fp1').stop(F1).fadeIn().css('margin-top','0')
        }
        if(F3>=900){
            $('.fp2').css('margin-top','240px').fadeOut()
        }
        if(F4>=1250){
            $('.fp2').stop(F3).fadeIn().css('margin-top','140px')
        }
        if(F5>=900){
            $('.fm2').css('margin-top','140px').fadeOut()
        }
        if(F6>=1450){
            $('.fm2').stop(F5).fadeIn().css('margin-top','25px')
        }
        if(F7>=900){
            $('.fm3').css('margin-top','140px').fadeOut()
        }
        if(F8>=1500){
            $('.fm3').stop(F7).fadeIn().css('margin-top','25px')
        }
        if(F9>=900){
            $('.second_phone > img').css('margin-top','140px').fadeOut()
        }
        if(F10>=2300){
            $('.second_phone > img').stop(F9).fadeIn().css('margin-top','0')
        }
        if(F11>=900){
            $('.fp3').css('margin-top','150px').fadeOut()
            $('.fp4').css('margin-top','150px').fadeOut()
        }
        if(F12>=3000){
            $('.fp3').stop(F11).fadeIn().css('margin-top','50px')
            $('.fp4').stop(F11).fadeIn().css('margin-top','0')
        }
        if(F13>=900){
            $('.backimg').css('margin-top','150px').fadeOut()
        }
        if(F14>=3700){
            $('.backimg').stop(F13).fadeIn().css('margin-top','0')
        }
        if(F15>=900){
            $('.title').css('margin-top','350px').fadeOut()
        }
        if(F16>=4800){
            $('.title').stop(F15).fadeIn().css('margin-top','150px')
        }
        if(F17>=900){
            $('.best_box').css('margin-top','350px').fadeOut()
        }
        if(F18>=4900){
            $('.best_box').stop(F17).fadeIn().css('margin-top','0')
        }
        if(F19>=900){
            $('.f_title').css('margin-top','150px').fadeOut()
        }
        if(F20>=6650){
            $('.f_title').stop(F19).fadeIn().css('margin-top','0')
        }
        if(F21>=900){
            $('.faq_box').css('margin-top','150px').fadeOut()
        }
        if(F22>=6750){
            $('.faq_box').stop(F21).fadeIn().css('margin-top','0')
        }
    })
    // 일정 높이가 되면 숫자가 0에서 순차적으로 올라감
    se_manager = {};
    function setScrollEvent(name, height, end, callback, callback2){
        if (!(name in se_manager)) se_manager[name] = false;

        $(window).scroll(function(){
            if ($(window).scrollTop() >= height && !se_manager[name] && $(window).scrollTop() < end){
                se_manager[name] = true;
                callback();
            } else if ($(window).scrollTop()>= end && se_manager[name]){
                se_manager[name] = false;
                callback2();
            }
        })
    }
    setScrollEvent('number', 3700, 3800, function () {
        var cnt1 = Number($('.f_number').text());
        var cnt2 = Number($('.s_number').text());
        var cnt3 = Number($('.t_number').text());
        counterFn0();
        function counterFn0() {
            id1 = setInterval(count1Fn, 50);
            id2 = setInterval(count1Fn, 50);
            id3 = setInterval(count1Fn, 50);
            function count1Fn() {
                cnt1--;
                cnt2--;
                cnt3--;
                if (cnt1 < 0) {
                    clearInterval(id1);
                } else {
                    $('.f_number').text(cnt1);
                }
                if (cnt2 < 0) {
                    clearInterval(id2);
                } else {
                    $('.f_number').text(cnt2);
                }
                if (cnt3 < 0) {
                    clearInterval(id3);
                } else {
                    $('.f_number').text(cnt3);
                }
            }
        }
        var N2 = $(document).height() - $(window).height() - $(window).scrollTop();
        if (N2 >= 1600) {
            $('.f_number').text(0)
            $('.s_number').text(0)
            $('.t_number').text(0)
        }
    }, function () {
        var cnt4 = Number($('.f_number').text());
        var cnt5 = Number($('.s_number').text());
        var cnt6 = Number($('.t_number').text());
        counterFn0();
        function counterFn0() {
            id3 = setInterval(count0Fn, 50);
            id4 = setInterval(count0Fn, 50);
            id5 = setInterval(count0Fn, 50);
            function count0Fn() {
                cnt4++;
                cnt5++;
                cnt6++;
                if (cnt4 > 53) {
                    clearInterval(id3);
                } else {
                    $('.f_number').text(cnt4);
                }
                if (cnt5 > 90) {
                    clearInterval(id4);
                } else {
                    $('.s_number').text(cnt5);
                }
                if (cnt6 > 100) {
                    clearInterval(id5);
                } else {
                    $('.t_number').text(cnt6);
                }
            }
        }
        var N2 = $(document).height() - $(window).height() - $(window).scrollTop();
        if (N2 >= 1600) {
            $('.f_number').text(0)
            $('.s_number').text(0)
            $('.t_number').text(0)
        }
    });
    //SNS 사진에 hover했을때 사진 보이기
    $('.sub_hover').css('margin-top','150px')
    $('.f_best').hover(function(){
        $('.f_hover').stop().fadeIn(300);
        $('.sub_f').css('margin-top','0')
    },function(){
        $('.f_hover').stop().fadeOut(0);
        $('.sub_f').css('margin-top','150px')
    })
    $('.s_best').hover(function(){
        $('.s_hover').stop().fadeIn(300);
        $('.sub_s').css('margin-top','0')
    },function(){
        $('.s_hover').stop().fadeOut(0);
        $('.sub_s').css('margin-top','150px')
    })
    $('.t_best').hover(function(){
        $('.t_hover').stop().fadeIn(300);
        $('.sub_t').css('margin-top','0')
    },function(){
        $('.t_hover').stop().fadeOut(0);
        $('.sub_t').css('margin-top','150px')
    })
    $('.ff_best').hover(function(){
        $('.ff_hover').stop().fadeIn(300);
        $('.sub_ff').css('margin-top','0')
    },function(){
        $('.ff_hover').stop().fadeOut(0);
        $('.sub_ff').css('margin-top','150px')
    })
    //FAQ question을 누르면 answear이 나오고 한번 더누르면 들어간다
    var acd = document.getElementsByClassName("question")
    var i;
    for (i=0; i < acd.length; i++){
        acd[i].addEventListener('click',function(){
            this.classList.toggle('active');
            var answear = this.nextElementSibling;
            if (answear.style.height == 'auto'){
                answear.style.height = 0;
                $(this).children('.arrow').removeClass('active')
            }else {
                answear.style.height = 'auto';
                $(this).children('.arrow').addClass('active')
            }
        })
    }
    //footer에 이용약관등을 hover하면 살짝 어두워지게 & a태그 눌렀을때 위로 올라가는 거 없애기
    $('.ftl_top li a').hover(function(e){
        e.preventDefault();
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    })
    //모바일
    }else{
        //햄버거 메뉴 나오게 하기
        $('.hamberger').hide();
        
        $('.menu_img').click(function(){
            $('.hamberger').show();
            $('.body, html').css('overflow-y','hidden')
        })
        $('.nagative').click(function(){
            $('.hamberger').hide();
            $('.body, html').css('overflow-y','visible')
        })
        //헤더 nav 클릭시 그 위치로 이동
        $('.nav1').click(function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:1024
            })
            $('.hamberger').hide();
            $('.body, html').css('overflow-y','visible')
        })
        $('.nav2').click(function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:1880
            })
            $('.hamberger').hide();
            $('.body, html').css('overflow-y','visible')
        })
        $('.nav3').click(function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:4570
            })
            $('.hamberger').hide();
            $('.body, html').css('overflow-y','visible')
        })
        $('.nav4').click(function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:5510
            })
            $('.hamberger').hide();
            $('.body, html').css('overflow-y','visible')
        })
        $('.nav5').click(function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:7365
            })
            $('.hamberger').hide();
            $('.body, html').css('overflow-y','visible')
        })
    //비쥬얼 slide 클릭시 화면 바뀜
    var sw=0;
    $('.slide').css('top','924px')
    $('.slide').css('height','100px')
    $('.slide').click(function(){
        if(sw==0){
            sw=1;
            $('.visual_box ul').animate({
                left:-1920
            })
            $('.mobile .sub').hide()
            $('.slide').animate({
                top: '0',
                height: '100vh'
            },50)
            $('.slide').delay(800).animate({
                top: '924px',
                height: '100px'
            },1)
            $('.mobile .sub_2').fadeIn(1500)
        }else{
            sw=0;
            $('.visual_box ul').animate({
                left:0
            })
            $('.mobile .sub_2').hide()
            $('.slide').animate({
                top: '0',
                height: '100vh'
                
            },50)
            $('.slide').delay(800).animate({
                top: '924px',
                height: '100px'
            },1)
            $('.mobile .sub').fadeIn(1500)
        }
    })

    }
});