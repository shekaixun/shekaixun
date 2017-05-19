(function(){
	var cur=0;
	var imgLen=$("div.carousel-box img").length;
	var duration=500;
	var interval=2000;
	//图片轮播函数
	function carousel(cur){
		if(cur<imgLen-1){
			var next=cur+1;
		}else
			next=0;
		var imgs=$("div.carousel-box img");
		
		$("ul.choice").find("li").eq(next).addClass("active").siblings(".active").removeClass("active");
		imgs.eq(cur).animate({left:"-100%"},duration,function(){
	//		console.log(this);
			$(this).removeClass("active");
		});
		imgs.eq(next).addClass("active").css("left","100%").animate({left:"0"},duration);
	}
	//定时器
	var autoChange=setInterval(function(){
		if(cur<imgLen-1)
			cur++;
		else	
			cur=0;
		carousel(cur);
	},interval);
	//重启定时器
	function autoChangeAgain(){
		autoChange=setInterval(function(){
			if(cur<imgLen-1)
				cur++;
			else	
				cur=0;
			carousel(cur);
		},interval);
	}
	
	$("ul.choice li").hover(function(){
		clearInterval(autoChange);
	},function(){
		autoChangeAgain();
	});
	$("ul.choice").click(function(e){
		var i=$("ul.choice li").index(e.target);
		carousel(i-1);
		cur=i;
	})
	$("b.next").hover(function(){
		clearInterval(autoChange);
	},function(){
		autoChangeAgain();
	})
	$("b.next").click(function(){
		cur=(cur<imgLen-1)?(++cur):0;
		carousel(cur);
	})
	$("i.prev").hover(function(){
		clearInterval(autoChange);
	},function(){
		autoChangeAgain();
	})
	$("i.prev").click(function(){
		console.log("a:"+cur);
		cur=(cur>0)?(--cur):(imgLen-1);
		carousel(cur-1);
		console.log("b:"+cur);
	})
	$("#banner").mouseenter(function(){
		$("div.carousel-click").animate({right:"0"},500);
	})
	$("#banner").mouseleave(function(){
		$("div.carousel-click").animate({right:"-54px"},500);
	});
	//实时监控屏幕的中轮播图片的高度，实时更改
	$(window).resize(function(){
		var h=$("img.active").height();
		console.log(h);
		$("div.carousel-box").css("height",h);
	})
	$("div.details-show").mouseenter(function(){
		$(this).children("img").css("transform","scale(1.1)");
		$("div.shade").css("background","rgba(25,110,255,.7)");
	})
	$("div.details-show").mouseleave(function(){
		$(this).children("img").css("transform","scale(1)");
		$("div.shade").css("background","rgba(25,110,255,.4)");
	})
	//缤纷色彩模块中标签页功能
	$(".botanics_ul").click(function(e){
		e.stopPropagation();
		var i=$(".botanics_ul li").index(e.target);
		$($(".botanics_content img")[i]).addClass("active").siblings("img").removeClass("active");
		$(e.target).css("border-bottom","2px solid #E4393c").siblings("li").css("border-bottom","none");
		if(i===3){
			$("#color-items").css("display","block");
			$("h1.color-text").css("display","block");
		}else{
			$("#color-items").css("display","none");
			$("h1.color-text").css("display","none");
		}
	});
	//缤纷色彩中的颜色切换设计
	$("#color-items").click(function(e){
		e.stopPropagation();
		var that=$(e.target).parent("li");
		var i=$("#color-items li").index(that);
		if(i!==-1){
			var colors=["#313235","#DDDDDD","#D5D4D4","#979384","#AA480C","#680B0B"];
			var text=["磁力灰","珍珠白","典雅白","星河银","热火橙","糖果红"];
			var b=$("<b>√</b>").css("color",colors[i]);
			$("h1.color-text").html(text[i]);
			$(e.target).parent("li").append(b).siblings("li").children("b").remove();
			
			$($(".botanics_content img")[i+3]).addClass("active").siblings("img").removeClass("active");
		}
	})
})();

	//车型轮播图
(function(){
	var w=$("#motorcycle_type").width();
	var liLen=$("ul.type_choice li").length;
	var i=$("ul.type_choice li").index($("ul.type_choice li.active"));
	console.log(i);

$("#motorcycle_type").mouseenter(function(){
	$("div.type_click").animate({right:"0"},500);
});
$("#motorcycle_type").mouseleave(function(){
	$("div.type_click").animate({right:"-54px"},500);
});
function car_lunbo(i){
	$("div.motorcycle_type_box").animate({left:-(i*w)},500);
	$("ul.type_choice li").eq(i).addClass("active").siblings("li").removeClass("active");
}
$("ul.type_choice").on("click","li",function(e){
	e.preventDefault();
	var i=$("ul.type_choice li").index(this);
	car_lunbo(i);
})

$("div.type_click a.next").click(function(){
	if(i<liLen-1)
		i++;
	else
		i=0;
	car_lunbo(i);
})
$("div.type_click a.prev").click(function(){
	if(i>0)
		i--;
	else
		i=liLen-1;
	car_lunbo(i);
})
})();
//车辆视频轮播
(function(){
	var w=$("#car_view").width();
	var liLen=$("ul.view_choice li").length;
	var i=$("ul.view_choice li").index($("ul.view_choice li.active"));

$("#car_view").mouseenter(function(){
	$("div.view_click").animate({right:"0"},500);
});
$("#car_view").mouseleave(function(){
	$("div.view_click").animate({right:"-54px"},500);
});
function view_lunbo(i){
	if(i<liLen-1){
		$("div.car_view").animate({left:-(i*w)},500);
	}else{
		$("div.car_view").animate({left:-((i-0.5)*w)},500);
	}
	
	$("ul.view_choice li").eq(i).addClass("active").siblings("li").removeClass("active");
}
$("ul.view_choice").on("click","li",function(e){
	e.preventDefault();
	var i=$("ul.view_choice li").index(this);
	view_lunbo(i);
})

$("div.view_click a.next").click(function(){
	if(i<liLen-1)
		i++;
	else
		i=0;
	view_lunbo(i);
})
$("div.view_click a.prev").click(function(){
	if(i>0)
		i--;
	else
		i=liLen-1;
	view_lunbo(i);
})
})();