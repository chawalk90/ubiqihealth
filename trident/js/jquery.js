jQuery(function($){
				$.supersized({
					// Functionality
					slide_interval          :   7000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1000,		// Speed of transition
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
													{image : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/Pavement_Boylston%201096.jpg', title : 'Background Image', thumb : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/Pavement_Boylston%201096.jpg', url : ''},{image : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/Pavement_Boylston_45_0.jpg', title : 'Background Image', thumb : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/Pavement_Boylston_45_0.jpg', url : ''},{image : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/bagel.jpg', title : 'Background Image', thumb : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/bagel.jpg', url : ''},{image : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/Pavement_662_0.jpg', title : 'Background Image', thumb : 'http://www.pavementcoffeehouse.com/sites/default/files/styles/custom_background_image/public/custom_background_image/Pavement_662_0.jpg', url : ''}												]
				});
		    });