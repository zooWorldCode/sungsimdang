//


//슬라이드 배너 어사이드 1


//
$(function () {

    var visual = $('#brandVisual>ul>li'); //슬라이드 배너 이미지
    var leftBtn = $('.btnImg .prev');
    var rightBtn = $('.btnImg .next');
    var button = $('#buttonList>li'); //동그라미 버튼
    var current = 0;//현재 보이는 이미지의 초기 순번
    var setIntervalId; //clearInterval을 쓰기위한 변수


    timer(); //함수호출

    function timer(){
        setIntervalId = setInterval(function(){
            var prev = visual.eq(current)
            var pn=button.eq(current)

            move(prev, 0, '-100%')
            pn.removeClass('on')

            current++

            if(current == visual.size()) {current=0}

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0)
            pnn.addClass('on')
        },2500)
    }




    //버튼을 클릭했을 때
    button.on({
        click: function () {
            var tg = $(this);
            var i = tg.index(); //선택한 버튼의 인덱스 번호

            button.removeClass('on'); //현재 활성화된 버튼 위치 초기화
            tg.addClass('on'); //선택한 버튼에 on 활성화

            //함수호출
            move1(i)
        }
    });

    /* 동그라미 버튼에 해당하는 함수 */
    function move1(i){
        if (current == i) return //현재 보이는 이미지가 i와 같다면 종료

        var currentEl = visual.eq(current); //현재 보여지는 순번을 currentEl에 담아
        var nextEl = visual.eq(i); //다음에 보여질 이미지는  nextEl에 담아

        currentEl.css({left:0}).stop().animate({left:'-100%'},500);
        nextEl.css({left:'100%'}).stop().animate({left:0},500);

        current = i
    }


    /* 이전,다음버튼에 해당하는 함수 */
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, {duration:500, ease:'easeOutCubic'} )
    }


    //왼쪽 버튼을 클릭했을 때
    leftBtn.click(function() {
        var prev = visual.eq(current)
        var pn = button.eq(current)

        move(prev, 0, '100%')
        pn.removeClass('on')

        current--;

        if(current == -visual.size()) {current=0}

        var next = visual.eq(current);
        var pnn = button.eq(current);

        move(next, '-100%', 0)
        pnn.addClass('on')

         return; //함수 실행 종료

    })

    //오른쪽 버튼을 클릭했을 때(배너 이미지 오른쪽에서 왼쪽으로)
    rightBtn.click(function() {
        var prev = visual.eq(current)
        var pn = button.eq(current)

        move(prev, 0, '-100%')
        pn.removeClass('on')

        current++;

        if(current == visual.size()) {current=0}

        var next = visual.eq(current);
        var pnn = button.eq(current);

        move(next, '100%', 0)
        pnn.addClass('on')

         return; //함수 실행 종료

    })    


    //호버시 멈추게하는 기능
    $('#wrap').on({
        mouseover:function(){
            clearInterval(setIntervalId)
        }, mouseout:function(){
            timer();
        }
    })

});

//


//슬라이드 업다운 어사이드 2


//

$(function(){

var menu=$('.img_asd2 ul li')
    menu.find('.hover').hide()

    menu.hover(function(){
        var tg = $(this)
        var ti = tg.find('.hover')

        ti.stop().fadeIn(300)

    }, function(){
        var tg = $(this)
        var ti = tg.find('.hover')

        ti.stop().fadeOut(300)

    })

    //더보기 버튼을 클릭하면 감춰진 썸네일 보이게 하고, 더보기 버튼은 닫기버튼으로 변경
    $('.loadmore').on('click', function(){
        $('.hide').stop().slideDown(500)

        $('.arrow').css('transform','translate(-50%, -50%) rotate(-90deg)')
        $('.loadmore').css('display','none')
        $('.close').css('display','block')
    })

    $('.close').on('click', function(){
        $('.hide').stop().slideUp(500)

        $('.arrow').css('transform','translate(-50%, -50%) rotate(90deg)')
        $('.loadmore').css('display','block')
        $('.close').css('display','none')
    })

})

//

