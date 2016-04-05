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


	// 右侧上部产品广告效果
	var index = 0;
	var len = $("#jnImageroll div a").length;
	var $keith = null;
	$("#jnImageroll div a").mouseover(function() {
		index = $("#jnImageroll div a").index(this);
		showImg(index);
	}).eq(0).mouseover();


	$("#jnImageroll").hover(function() {
		if ($keith) {
			clearInterval($keith);
		}
	}, function() {
		$keith = setInterval(function() {
			showImg(index)
			index++;
			if (index == len) {
				index = 0
			}
		}, 3000)
	}).trigger('mouseleave');

	function showImg(index) {
		var $link = $("#jnImageroll div a");
		var $href = $link.eq(index).attr("href");
		$("#JS_imgWrap").attr("href", $href)
			.find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$link.removeClass('chos').css("opacity", 0.5)
			.eq(index).addClass('chos').css("opacity", 1)
	}
	// 右侧最新模块内容添加超链接提示
	var x=15;
	var y=20
	$("#jnNoticeInfo li a").mouseover(function(event) {
		this.myTitle=this.title
		var $page='<div id="tooltip">'+this.myTitle+'</div>';
		$("body").append($page)
		this.title=''
		$("#tooltip").css({
			"top":(event.pageY+y)+"px",
			"left":(event.pageX+x)+"px"
		}).show("fast")
	}).mouseout(function() {
		$("#tooltip").remove()
		this.title=this.myTitle
	}).mousemove(function(event) {
		$("#tooltip").css({
			"top":(event.pageY+y)+"px",
			"left":(event.pageX+x)+"px"
		})
	});
	// 右侧下部光标滑过产品列表效果
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass('chos').siblings().removeClass('chos')
		var $index=$("#jnBrandTab li a").index($(this))
		showPic($index);
		return false;
	}).eq(0).click();


	function showPic(index){
		var $show=$("#jnBrandList");
		var len=4;
		var speed="slow";
		var $width=($("#jnBrandList li").outerWidth())*len;
		if(!$show.is(":animated")){
			$show.animate({"left": -$width*index}, speed)
		}
	}

	$("#jnBrandList li").each(function(index) {
		var $img=$(this).find("img");
		var $width=$img.width();
		var $height=$img.height();
		var $page="<span style='position:absolute;top:0;left:5px;width:"+$width+"px;height:"+$height+"px;' class='imageMask'></span>";
		$($page).appendTo($(this))
	});

	$("#jnBrandList").find(".imageMask").live('hover', function() {
		$(this).toggleClass("imageOver")
	});







});