$(document).ready(function(){
	var image = 1;
	var imageCount = 6;
  
	function setNextImagePreview() {
	  var nextImage = (image < imageCount) ? image + 1 : 1;
	  $("#next_image_preview img").attr("src", "cara/iron" + nextImage + ".webp");
	  $("#next_image_preview img").attr("alt", "next steam iron " + nextImage);
	  $("#next_image_preview").show();
	}
  
	function setPrevImagePreview() {
	  var prevImage = (image > 1) ? image - 1 : imageCount;
	  $("#prev_image_preview img").attr("src", "cara/iron" + prevImage + ".webp");
	  $("#prev_image_preview img").attr("alt", "previous steam iron " + prevImage);
	  $("#prev_image_preview").show();
	}
  
	$("#left_button").click(function(){
	  if(image > 1){
		image--;
	  } else {
		image = imageCount;
	  }
	  $("#large_image").attr("src", "cara/iron" + image + ".webp");
	  $("#large_image").attr("alt", "steam iron " + image);
	  setNextImagePreview();
	  setPrevImagePreview();
	});
  
	$("#right_button").click(function(){
	  if(image < imageCount){
		image++;
	  } else {
		image = 1;
	  }
	  $("#large_image").attr("src", "cara/iron" + image + ".webp");
	  $("#large_image").attr("alt", "steam iron " + image);
	  setNextImagePreview();
	  setPrevImagePreview();
	});
  
	setNextImagePreview();
	setPrevImagePreview();
  });
  