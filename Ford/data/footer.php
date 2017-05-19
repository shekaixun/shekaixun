<?php

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="../css/bootstrap.css"/>
		<link rel="stylesheet" href="../css/footer.css" />
		<link rel="stylesheet" href="../css/footer_reactive.css" />
	</head>
	<body>
		<footer id="footer">
			<div class="container-fluid footer-box">
				<div class="row">
					<div class="col-xs-12 footer-first"></div>
				</div>
				<div class="row footer-content">
					<div class="col-sm-3 col-xs-12">
						<h3>车型展示<b></b></h3>
						<ul>
							<li>轿车</li>
							<li>SUV</li>
							<li>MPV</li>
							<li>性能车</li>
							<li>商务车</li>
						</ul>
					</div>
					<div class="col-sm-2 col-xs-12">
						<h3>购车专区<b></b></h3>
						<ul>
							<li>福特金融</li>
							<li>批售业务</li>
							<li>二手车</li>
							<li>定制车辆</li>
						</ul>
					</div>
					<div class="col-sm-2 col-xs-12">
						<h3>客户服务<b></b></h3>
						<ul>
							<li>长沙福特客户服务</li>
							<li>福特中国客户服务</li>
							<li>江铃汽车客户服务</li>
							<li>用车指南</li>
							<li>SYNC支持</li>
							<li>联系我们</li>
							<li>长沙福特车主俱乐部</li>
						</ul>
					</div>
					<div class="col-sm-2 col-xs-12">
						<h3>福特科技<b></b></h3>
						<ul>
							<li>智能科技</li>
							<li>EcoBoost</li>
							<li>SYNC</li>
							<li>福特派</li>
						</ul>
					</div>
					<div class="col-sm-3 col-xs-12">
						<h3>福特科技<b></b></h3>
						<ul>
							<li>新闻中心</li>
							<li>诚聘英才</li>
							<li>关于福特</li>
							<li>品牌体验</li>
						</ul>
					</div>
				</div>
				<div class="row footer-third">
					<div class="col-xs-12"></div>
				</div>
				<div class="row footer-copyright">
					<div class="col-xs-12">©2016福特汽车（中国）有限公司 沪ICP备05031283号 隐私权保护声明 版权保护 网站地图 联系我们 福特全球 24小时客服热线</div>
				</div>
			</div>
		</footer>
	</body>
	<script src="../js/jquery-1.11.3.js"></script>
	<script type="text/javascript">
		$(window).resize(function(){
//		$(function(){
				var w=$(window).width();

				console.log(w);
				if(w<768){
					$("#footer div.footer-content ul").slideUp(300);
					$("h3").click(function(){
			console.log($(this).siblings("ul").height());
//						if($(this).siblings("ul").slideDown())
							$(this).siblings("ul").slideDown(500);
							$(this).parent().siblings().children("ul").slideUp(500);
//						else
//							$(this).siblings("ul").slideDown(300);
					})
					
				}else{
					$("#footer div.footer-content ul").slideDown(300);
				}
		})
		
	</script>
	</script>
</html>
