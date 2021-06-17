$(document).ready(function(){

//헤더 마우스오버 효과 
$('#gnb').each(function(){
    $(this)
    .on('mouseenter focusin', function(){
        $('#header').addClass('sticky')
    })
    .on('mouseleave focusout', function(){
        $('#header').removeClass('sticky')
    })

})

// 스크롤 시 헤더 효과
$('#header').each(function(){
  $(window).scroll(function(){

    // 변수
    let $winScroll = $(window).scrollTop(),
    $headeroHeight = $('#header').outerHeight() 

     if($winScroll > $headeroHeight){
         $('#header').addClass('sticky')
        }else{
         $('#header').removeClass('sticky')  
         } 
  })
  .trigger('scroll')  
});

// 스크롤 시 오브젝트 애니메이션
$(window).scroll(function(){
    $('.ani-scroll').each(function(){

        // 변수
        let $postion = $(this).offset().top,
            $winScroll = $(window).scrollTop()

        if($winScroll +500> $postion){
            $(this).addClass('ani-top')
        }          
    })
})


});