"use strict";

$(function(){
    $(".slider1>.img1").hide();
    $(".slider1>.img2").hide();
    $(".slider1>.img3").hide();
    
    $(".slider2>.img1").hide();
    $(".slider2>.img2").hide();
    $(".slider2>.img3").hide();
});
let counter = 0;
let slider = function() {
    counter += 0.5;
    if (counter < 50 && counter > 0) {
        $(function(){
            $(".slider1>.img1").fadeIn(100);
            $(".slider1>.img2").hide();
            $(".slider1>.img3").hide();
        });
    }
    if (counter < 100 && counter > 50) {
        $(function(){
            $(".slider1>.img1").hide();
            $(".slider1>.img2").fadeIn(100);
            $(".slider1>.img3").hide();
        });
    }
    if (counter < 150 && counter > 100) {
        $(function(){
            $(".slider1>.img1").hide();
            $(".slider1>.img2").hide();
            $(".slider1>.img3").fadeIn(100);
        });
    }
    if (counter >= 150) {
        counter = 0;
    }
    requestAnimationFrame(slider);
};
slider();
let counterSlider2 = 1;
if (counterSlider2 == 1) {
    $(function(){
        $(".slider2>.img1").fadeIn(300);
        $(".slider2>.img2").hide();
        $(".slider2>.img3").hide();
    });
}
if (counterSlider2 == 2) {
    $(function(){
        $(".slider2>.img1").hide();
        $(".slider2>.img2").fadeIn(300);
        $(".slider2>.img3").hide();
    });
}
if (counterSlider2 == 3) {
    $(function(){
        $(".slider2>.img1").hide();
        $(".slider2>.img2").hide();
        $(".slider2>.img3").fadeIn(300);
    });
}
function leftBtn(btn) {
    counterSlider2 -= 1;
    if (counterSlider2 == 0) {
        counterSlider2 = 3;
        $(function(){
            $(".slider2>.img1").hide();
            $(".slider2>.img2").hide();
            $(".slider2>.img3").fadeIn(300);
        });
    }
    if (counterSlider2 == 2) {
        $(function(){
            $(".slider2>.img1").hide();
            $(".slider2>.img2").fadeIn(300);
            $(".slider2>.img3").hide();
        });
    }
    if (counterSlider2 == 1) {
        $(function(){
            $(".slider2>.img1").fadeIn(300);
            $(".slider2>.img2").hide();
            $(".slider2>.img3").hide();
        });
    }
}
function rightBtn(btn) {
    counterSlider2 += 1;
    if (counterSlider2 == 1) {
        $(function(){
            $(".slider2>.img1").fadeIn(300);
            $(".slider2>.img2").hide();
            $(".slider2>.img3").hide();
        });
    }
    if (counterSlider2 == 2) {
        $(function(){
            $(".slider2>.img1").hide();
            $(".slider2>.img2").fadeIn(300);
            $(".slider2>.img3").hide();
        });
    }
    if (counterSlider2 == 3) {
        $(function(){
            $(".slider2>.img1").hide();
            $(".slider2>.img2").hide();
            $(".slider2>.img3").fadeIn(300);
        });
    }
    if (counterSlider2 >= 4) {
        counterSlider2 = 1;
        $(function(){
            $(".slider2>.img1").fadeIn(300);
            $(".slider2>.img2").hide();
            $(".slider2>.img3").hide();
        });
    }
}