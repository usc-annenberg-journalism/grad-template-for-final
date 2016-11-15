// trigger for audio player
$( function() { 	
	//for FastClick -- this removes delays in touch events on mobile, makes menus and other clicking faster. Don't remove this.
	FastClick.attach(document.body);
});

$(document).ready(function(){
    // FitVids trigger
    $(".grid-whole").fitVids();
    $(".container").fitVids();
    $(".grid-4").fitVids();
    $(".grid-3").fitVids();
    $(".grid-6").fitVids();
        
    //for mobile menu toggle
    $('#navtoggle').click(function(){
	    $('header nav').slideToggle('slow');
    });
    
    //put all your other code here
    
    
    
}); // end document ready