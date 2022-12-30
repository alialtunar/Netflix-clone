$('.owl-carousel').owlCarousel({
    loop:false,
    left:true,
    margin:5,

    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});

$(window).scroll(function() {
   
    if($(this).scrollTop() > 50) { 
        $('.fixed-div').removeClass('transparent');
    } else {
        $('.fixed-div').addClass('transparent');
    }
  });


 function inputChance(){
    if(document.getElementById("searchinput").classList.contains("d-none")){
        document.getElementById("searchinput").classList.remove("d-none");
    }
    else{
        document.getElementById("searchinput").classList.add("d-none");
    }
 }