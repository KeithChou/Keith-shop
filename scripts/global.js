$(document).ready(function() {
	// 搜索框文字效果
	$("#inputSearch").focus(function() {
		$(this).addClass("focus")
		if ($(this).val() == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		$(this).removeClass("focus")
		if ($(this).val() == '') {
			$(this).val(this.defaultValue);
		}
	}).keyup(function(event) {
		if (event.which == 13) {
			alert("回车提交表单！")
		}
	});

	// 网页换肤
	function switchSkin(skinName) {
		$("#" + skinName).addClass("selected").siblings().removeClass("selected");
		$("#cssfile").attr("href", "styles/skin/" + skinName + ".css");
		$.cookie("MyCssSkin", skinName, {
			path: '/',
			expires: 10
		})
	}

	$("#skin li").click(function(){
		switchSkin($(this).attr("id"));
	})
	var $css_skin=$.cookie("MyCssSkin");
	if($css_skin){
		switchSkin($css_skin);
	}

});