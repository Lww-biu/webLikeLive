$(function(){
    $(".publish").on("click",function(event){
		var title = $('input[name="title"]').val();
		var context = $(".editor").text();
		var card = '<div class="material-card material-shadow-1 material-hover" style="margin-top:50px">'+
				   '<div class="material-ripple red-ripple">'+
				   '<h1 class="card_title">'+
					'<img src="/assets/img/topic.png" width="40px" style="margin-left:10px;margin-top:5px">'+
					'<a href="">'+title+'</a>'+
					'</h1>'+
					'<p>'+context+'</p>'+
				   '</div>'+
				   '</div>';
		$(".target").append(card);
		$('input[name="title"]').val("");
        $(".editor").text("");
	})
})