$("div.item img").mouseover(function(){
	$("div.a-box").css("right","0").css("transition","right .5s linear");
})
$("div.item img").mouseout(function(){
	$("div.a-box").css("right","-40px").css("transition","right .5s linear");
})
$("div.a-box").mouseover(function(){
	$(this).css("right","0").css("transition","right .5s linear");
})
$("#myCarousel1>ul>li").click(function(){
	$(this).siblings().removeClass("li");
	$(this).addClass("li");
})
$("#preference-box2").mouseover(function(){
	$("div.a-box1").css("right","-29%").css("transition","right .5s linear");
})
$("#preference-box2").mouseout(function(){
	$("div.a-box1").css("right","-35%").css("transition","right .5s linear");
})
//点击特别优惠下的图标 进行页面切换
$("#preference-box1 i").click(function(){
	$("#preference-box1").css("left","-105%").css("transition","left 1s linear");
	$("#preference-box2").css("right","0").css("transition","right 1s linear");
})

$("#preference-box2 span").click(function(){
	$("#preference-box2").css("right","-100%").css("transition","right 1s linear");
	$("#preference-box1").css("left","0").css("transition","left 1s linear");
})

$("div.index-car-details").mouseenter(function(e){
	e.preventDefault();
	$(this).children("img").css("transform","scale(1.1)");
	$(this).children("#newcar-content").css("background","rgba(10,10,10,.8)")
})
$("div.index-car-details").mouseleave(function(e){
	e.preventDefault();
	$(this).children("img").css("transform","scale(1)");
	$(this).children("#newcar-content").css("background","rgba(10,10,10,.4)")
})