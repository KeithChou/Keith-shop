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
		$.cookie("keith", skinName, {
			expires: 7,
			path: "/"
		})
	}
	$("#skin li").click(function() {
		switchSkin(this.id);
	})
	var $keith = $.cookie("keith");
	if ($keith) {
		switchSkin($keith);
	}

	// 导航效果
	$("#nav li").hover(function() {
			$(this).find(".jnNav").show();
		},
		function() {
			$(this).find(".jnNav").hide()
		})

	// 左侧商品分类热销效果
	$(".jnCatainfo .promoted").append('<i class="hot"></i>')















});