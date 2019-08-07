

$(function () {
	
	
	
	let timer = null;
	
    $('#start').click(display);
	
	
	
	
	function display() {
        const val = $('#width').val() + 'px';
        $('.circle').show().css({
            width: val,
            height: val,
			top:"200px",
			left:"50%"
            
        });
		var colors = ["red", "blue", "yellow", "black", "green"];
		
		let count=parseInt($('#numbercircle').val());

		for(let i=0;i<count;i++){
		var $newCircle = $('<div />').appendTo('body');
			
		$newCircle.css( "background-color", colors[Math.floor(Math.random() * colors.length)] );
		
		
		//$newCircle.css( "top", Math.floor(Math.random()*$(this).height())*i*2 );
		//$newCircle.css( "left",Math.floor(Math.random()*$(this).width())*i*2 );
		
		
		
		$newCircle.addClass("circle");
		$newCircle.click(reset);
		}
		  timer = setInterval(enlargeCircle, ($('#growthrate').val()));
  
		
    }
	
	

function enlargeCircle(evt) {
    
      
     $('.circle').css("width", parseInt( $('.circle').height())+ parseInt($('#growthamount').val()) + 'px');
	$('.circle').css("height", parseInt( $('.circle').height())+ parseInt($('#growthamount').val()) + 'px');
        
       
   
}

function reset(evt) {
    /*if (timer) {
        clearInterval(timer);
        timer = null;
        $('.circle').css("display", "none");
    } else {

    }
*/
$(this).hide();

}


});