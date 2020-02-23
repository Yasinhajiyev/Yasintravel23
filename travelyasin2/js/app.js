




// $(".filter-price").click(function(){
//     $(".active-filter").slideDown(function(){
//         $(".open").stop().hide()
//     })

// })

// $(".filter-price").click(function(){
//     $(".active-filter").stop().slideUp(function(){
//         $(".open").css("display","block"),
//         $(".close").css("display","none")
//     })
// })

// $(".filter-price").click(function(){
//     $(".active-filter").slideToggle(function(){
//         $(".open").css("display","none"),
//         $(".close").css("display","block")
//     })
// })

$(".drop-menu").click(function(){
    $(".dropped-menu").slideToggle()
})




$(".filter-price .row").click(
    function(){
        $(".active-filter").stop().slideUp(function(){$(".close").css("display","block"),$(".open").css("display","none")})
        $(".active-filter").stop().slideToggle(function(){$(".close").css("display","none"),$(".open").css("display","none")})
    }
)

$(".review-score .row").click(
    function(){
        $(".active-review").slideUp()
        $(".active-review").stop().slideToggle()
    }
)


$(".hotel-star .row").click(
    function(){
        $(".star").slideUp()
        $(".star").stop().slideToggle()
    }
)


$(".facilities .row").click(
    function(){
        $(".active-facilities").slideUp()
        $(".active-facilities").stop().slideToggle()
    }
)



$(".hotel-theme .row").click(
    function(){
        $(".active-hotel").slideUp()
        $(".active-hotel").stop().slideToggle()
    }
)





































































