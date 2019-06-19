//animated smooth scroll

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    // password login popup
    var password = "1219";
    var get_user_input = function() {
        var user_input = window.prompt("Welcome to Mark & Kirstyn's wedding website! Please enter password to continue.");
        if (user_input == password) {
            document.getElementsByClassName("hidden")[0].className = "";
        } else {
            get_user_input();
        }
    }
    get_user_input();
    
});



//highlight active link on nav bar

//var sections = $('.section');
//var nav = $('nav');
//var nav_height = nav.outerHeight();
// 
//$(window).on('scroll', function () {
//    var cur_pos = $(this).scrollTop();
////    console.log(sections);
//     $('.section').each(function() {
//        var top = $(this).offset().top - nav_height,
//        bottom = top + $(this).outerHeight();
////        console.log("we're in the each fn");
//        
//        if (cur_pos >= top && cur_pos <= bottom) {
//            nav.find('a').removeClass('active');
//            console.log("removing class from sections";
//            $('.section').removeClass('active');
//
//            $(this).addClass('active');
//            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//        }
//    });
//});

$(document).ready(function() {
    console.log("this is body" + $(body));
})