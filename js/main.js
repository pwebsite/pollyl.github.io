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
    var password = "spoof";
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


$(document).ready(function() {
    console.log("this is body" + $(body));
})