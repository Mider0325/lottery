// 计算
;(function (){
	$("#calc").click(function(){
		var need=$("#need").val();
		var unneed=$("#unneed").val();
		if(/^[\d][\d,]*$/.test(need) && /^[\d][\d,]*$/.test(unneed)){
			$('body').on('click', '.scroll-btn', function(e){
				e.preventDefault();
				$('html, body').animate({
					scrollTop:  $("#calc").offset().top
				}, 1000, 'easeInOutExpo');
			});
			//   必选数字数组 例：[1,35]
			var needNumArr=need.split(",");
			//   必不选数字数组 例：[1,35]
			var unNeedNumArr=unneed.split(",");
			// 计算规则。。。
			alert("计算中")




		}else {
			alert("请输入正确的值 例:32,1");
			return;
		};
	})
	
}())