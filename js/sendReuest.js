		mui.init({
			swipeBack:true //启用右滑关闭功能
		});
		var $grid=$("#grid");
		var $li=$grid.find("li");
		var $span=$li.find('span:first')
		var mui_bg_minpin=$(".mui-bg-minpin");
		var mui_bg_fangchan=$(".mui-bg-fangchan");
		var mui_bg_qiche=$(".mui-bg-qiche");
		var mui_bg_qita=$(".mui-bg-qita");
		
		$("#sendOnline").click(function(){
			window.location.href="saleOnline.html"
		})