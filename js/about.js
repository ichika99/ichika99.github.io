//主轮播图
mainSwiper = new Swiper('#main-window', {
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    threshold: 100,
    mousewheel: {
        releaseOnEdges: false,
    },
    speed: 600,
    //noSwipingSelector: '.swiper-aboutfirst > .swiper-wrapper > .swiper-slide:not(first-child)',
    on: {
        slideChangeTransitionEnd: function () {
            if (this.activeIndex == 3) this.params.mousewheel.releaseOnEdges = true;
            else this.params.mousewheel.releaseOnEdges = false;
        },
        slideChangeTransitionStart: function () { scrollToTop() },
    },
})

//第一页QA轮播图
QASwiper2 = new Swiper('.swiper-aboutfirst', {
    enabled: false,
})

$('.QA-more').click(function () {
    QASwiper2.enable()
    QASwiper2.slideTo(1, 500, false);
    QASwiper2.disable()
    mainSwiper.mousewheel.disable()
    mainSwiper.allowTouchMove = false
    document.body.style.overflow = 'hidden';
})
  
$('.QA-back').click(function () {
    QASwiper2.enable()
    QASwiper2.slideTo(0, 500, false);
    QASwiper2.disable()
    mainSwiper.mousewheel.enable()
    mainSwiper.allowTouchMove = true
    document.body.style.overflow = 'auto';
  })

  //第一页追求轮播图
persueSwiper = new Swiper('.swiper-persue', {
    direction: 'vertical',
    loop: true,
    autoplay: true,
    nested: true,
    height: 60,
})

//第二页审美轮播图
wifeSwiper = new Swiper('.swiper-wife', {
    effect: 'fade',
    allowTouchMove: false,
})

$('.wife-pag-item').click(function () {
    $('.wife-pag-item').removeClass('wife-pag-item-choose')
})

var paglist = document.getElementsByClassName('wife-pag-item')
for (i = 0; i < paglist.length; i++){
    let index = i
    paglist[i].addEventListener('click', (item) => {
        wifeSwiper.slideTo(index, 500, false);
        paglist[index].classList.add('wife-pag-item-choose')
    })
}

//第二页播放器
var YOASOBI = null, TUYU = null, PJSK = null
if (!YOASOBI) {
    OASOBI = new APlayer({
        container: document.getElementById('music-YOASOBI'),
        audio: [{
            url: 'https://music.163.com/song/media/outer/url?id=1417236632.mp3',
            cover: 'https://cdn.ichika.cc/about/YOASOBI.webp',
            mode: 'mini',
            preload: 'none',
        }]
    })
}

if (!TUYU) {
    TUYU = new APlayer({
        container: document.getElementById('music-TUYU'),
        audio: [{
            url: 'https://music.163.com/song/media/outer/url?id=1428278494.mp3',
            cover: 'https://cdn.ichika.cc/about/TUYU.webp',
            mode: 'mini',
            preload: 'none',
        }]
    })
}


if (!PJSK) {
    PJSK = new APlayer({
        container: document.getElementById('music-PJSK'),
        audio: [{
            url: 'https://music.163.com/song/media/outer/url?id=1914690498.mp3',
            cover: 'https://cdn.ichika.cc/about/PJSK.webp',
            mode: 'mini',
            preload: 'none',
        }]
    })
}

//第四页平台轮播图
gameSwiper = new Swiper('.swiper-game', {
    allowTouchMove: false,
    effect: 'fade'
})

var colorlist=['rgb(230, 0, 18)','#107c10','rgb(0, 112, 209)','#1a2a3e','#15c5ce','black','var(--ichika-color)']
var gamelist = document.getElementsByClassName('game-nav')

for (i = 0; i < gamelist.length; i++){
    let index = i
    gamelist[i].addEventListener('click', (item) => {
        for (j = 0; j < gamelist.length; j++){
            gamelist[j].setAttribute('style','')
        }
        gamelist[index].setAttribute('style', 'color:white;background:' + colorlist[index])
        gameSwiper.slideTo(index, 500, false);
    })
}

//第四页游戏轮播图
bestlikeSwiper = new Swiper('.swiper-bestgame', {
    effect: 'coverflow',
    loop: true,
    coverflowEffect: {
        rotate: 30,
        stretch: '15%',
        depth: 30,
        modifier: 2,
        slideShadows : false
    },
    autoplay: true,
})


if ((document.documentElement.clientHeight < 900 && document.documentElement.clientWidth < 1600) || document.documentElement.clientWidth / document.documentElement.clientHeight > 4 || document.documentElement.clientWidth / document.documentElement.clientHeight < 1) {
    alert(`您的窗口分别率为${document.documentElement.clientWidth}*${document.documentElement.clientHeight},暂不支持显示该页！建议分辨率大于1600*900，宽高比16:9`)
    window.location.href="/Article/other_AboutMe/"
}
else {}