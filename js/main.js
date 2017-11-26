jQuery(document).ready(function($){
	
	$('#style_1').click(function(){
	    $('body').addClass('style_1');
		$('body').removeClass('style_2 style_3');  
	});
	$('#style_2').click(function(){
	    $('body').addClass('style_2');  
		$('body').removeClass('style_1 style_3');  
	});
	$('#style_3').click(function(){
	    $('body').addClass('style_3');  
		$('body').removeClass('style_1 style_2');
	});
	$('#default').click(function(){
	    $('body').removeClass('style_1 style_2 style_3');  
	});
	$('#color_box').click(function(){
		$('.color_change').toggleClass('color_box');
	});
	
    $('.skill').knob();
    
    
    $('.carousel_service_content').owlCarousel({
		margin:40,
        loop: true,
		responsive:{
			300:{
				items:2,
			},
			480:{
			    items:3,
		    },
			768:{
				items:4,
			},
		    992:{
			    items:6,
		    }
		}
    });
    $('.carousel_trigger i.fa-chevron-left').click(function (){
        $('.carousel_service_item').trigger('prev.owl.carousel', [2000]);
    });
    $('.carousel_trigger i.fa-chevron-right').click(function (){
        $('.carousel_service_item').trigger('next.owl.carousel', [3000]);
    });
	$('.main_menu').slicknav();
	
    $('.slicknav_parent').click(function(){
        $('.slicknav_parent ul').removeClass('sub_menu');
    });
	
	$('.mixitup_content').mixItUp();
	var myCenter=new google.maps.LatLng(24.859734, 89.372496);

	function initialize()
		{
		var mapProp = {
          center:myCenter,
		  zoom:18,
		  scrollwheel:false,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		};
    var map=new google.maps.Map(document.getElementById("google_map"),mapProp);

	var marker=new google.maps.Marker({
	  position:myCenter,
	  icon:'img/pin.png',
	});
    marker.setMap(map);
	}
    google.maps.event.addDomListener(window, 'load', initialize);
	
    $('.photo').venobox({
        framewidth: '1280px',     
        frameheight: '720px', 
        border: '10px',            
        bgcolor: '#fff',        
        titleattr: 'Lightbox',   
        numeratio: true,           
        infinigall: true,
    });
	
	new WOW().init();
	
	$('.final_countdown').countdown('2016/05/07', function(event) {
    $(this).html(event.strftime('<span class="days">%d Days</span>   <span class="hour">%H Hour</span> <span class="minute">%M Min<span> <span class="second">%S Second<span>'));
    });
});