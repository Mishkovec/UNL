$('.single-item').slick(
    {
    infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        draggable : false,
	      }
        }
    ]
}   
);