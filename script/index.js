$(function(){
//nav font_color 
	$('.color_font a').hover(function(){
		$(this).css({color:'red'});
	},function(){
		$(this).css({color:'#999'});
	})
//nav block 
	$('.listblock').hover(function(){
		$(this).find('.blocka').show();
	},function(){
		$(this).find('.blocka').hide();
	})
//list marginLeft 
	$('.list_right').hover(function(){
		$(this).css({paddingLeft:'40px',background:'#c40000'});
	},function(){
		$(this).css({paddingLeft:'30px',background:'#4a4a4a'});
	})
// img margin_left
  $('.one-a,.one-b,.left-one').hover(function(){
    $(this).css({position:'relative'});
    $(this).stop();
    $(this).animate({right:3},200);
  },function(){
    $(this).stop();
    $(this).animate({left:0},200);
  });
// list block
var color=['#EFEFEF','#FFE1F1','#FFF701','#025AA2','#FFEDF1','#3675FF','#FFA800','#F3444B','#A216FB','#FF8102','#FECEDA','#FC4563','#A70007','#3C82FE','#30C4FF','#30C4FF','#DB241E']
$('.list_right').each(function(i){
	$(this).data('index',i);
});
$('.list_right').hover(function(){
	clearInterval(timeId);
	$(this).find('.blocka').show(function(){
		$(this).animate({left:190},200);
	})
	var i=$(this).data('index');
	$('.main-continerb').css('background',color[i])
	$('.hidden').hide();
	$($('.hidden')[i]).show();
	$($('.menu-right')[i]).css({position:'relative',left:0,top:0});
	$('.menu-right').hide();
	$($('.menu-right')[i]).show();
},function(){});
$('.yyy').hover(function(){
	clearInterval(timeId);
	timeId=setInterval(lunbo,2000);
});
//轮波
var index=1;
$('.lunbo').each(function(i){
	$(this).data('index',i);
});
var lb_color=['#E8E8E8','#DBDBDD','#62C7A7','#EAEAEA','#B90AF9','#5876EE']
var lunbo=function(){
	$('.main-continerb').css('background',lb_color[index]);
	$('.lunbo').hide();
	var el=$('.lunbo')[index];
	$(el).show();
	$('.circle_item').removeClass('red');
	$($('.circle_item')[index]).addClass('red');
	index +=1;
	if(index==$('.lunbo').length){
		index=0;
	}
}
	$('.circle_item').each(function(i){
		$(this).data('index',i)
	})
	$('.circle_item').hover(function(){
		clearInterval(timeId);
		$('.circle_item').removeClass('red');
		$(this).addClass('red');
		var i=$(this).data('index');
		$('.lunbo').hide();
		$($('.lunbo')[i]).show();
		index=i;
	},function(){
		clearInterval(timeId);
		timeId=setInterval(lunbo,2000);
	})
	var timeId=setInterval(lunbo,2000);
//fix导航栏
var ti;
$(window).scroll(function(){
	if($(window).scrollTop()>300){
		clearTimeout(ti);
		ti=setTimeout(function(){
			$('.tianmaosousuo').show();
		},500);
	}else{
		clearTimeout(ti);
		$('.tianmaosousuo').hide();
	}
})
//left楼层
$('.slidebar_list_x').each(function(i){
	$(this).data('index',i);
})
$('.slidebar_list_x').hover(function(){
	var i=$(this).data('index');
	$('.slidebar_list_x').click(function(){
	var newtop=$($('.ONEF')[i]).offset().top-15;
	// console.log(newtop);
	$({top:$(window).scrollTop()}).animate(
		{top:newtop},
		{
			duration:700,
			step:function(){
				$(window).scrollTop(this.top);
			}
		}
	)
	})
	$($('.slidebar-3')[i]).hide();
	$($('.slidebar_font')[i]).css({background:'#c40000'}).show();
},function(){
	var i=$(this).data('index');
	$($('.slidebar-3')[i]).show();
	$($('.slidebar_font')[i]).css({background:'#c40000'}).hide();
})
// right 
$('.slidebar-2').hover(function(){
	$('.slidebar-2').stop();
	$(this).find('.slidebar_left').fadeIn('slow');
},function(){
	$('.slidebar-2').stop();
	$(this).find('.slidebar_left').fadeOut('slow');
})
// 返回顶部
$('.slidebar-2').click(function(){
	$({top:$(window).scrollTop()}).animate(
		{top:0},
		{
			duration:700,
			step:function(){
				$(window).scrollTop(this.top);
			}
		}
	)
})
//floor 小轮波
var index1=0;
var lunboa=function(){
	$('.floor_one').hide();
	var a=$('.floor_one')[index1];
	$(a).show();
	index1 +=1;
	if(index1==$('.floor_one').length){
		index1=0;
	}
};
var timeId_1=setInterval(lunboa,1000);
$('.lunbo2-leftt').click(function(){
	clearInterval(timeId_1);
	$('.floor_one').hide();
	index1--;
	// console.log(index1);
	if(index1==-1){
		index1=2;
	}
	$($('.floor_one')[index1]).show();
})
$('.lunbo2-right').click(function(){
	clearInterval(timeId_1);
	$('.floor_one').hide();
	index1++;
	// console.log(index1);
	if(index1==3){
		index1=0;
	}
	$($('.floor_one')[index1]).show();
})
//单击箭头
// $('.lunbo2-left').click(function(){
// 	var index1=0;
// 	clearInterval(timeId_1);
// 	$($('.floor_one')[index1]).css({})
// 	index1 +=1;
// })

var index2=0;
var lunbob=function(){
	$('.floor_two').hide();
	var b=$('.floor_two')[index2];
	$(b).show();
	index2 +=1;
	if(index2==$('.floor_two').length){
		index2=0;
	}
};
var timeId_2=setInterval(lunbob,1000);
$('.lunbo2-left-2').click(function(){
	clearInterval(timeId_2);
	$('.floor_two').hide();
	index2--;
	if(index2==-1){
		index2=2;
	}
	$($('.floor_two')[index2]).show();
})
$('.lunbo2-right-2').click(function(){
	clearInterval(timeId_2);
	$('.floor_two').hide();
	index2++;
	if(index2==3){
		index2=0;
	}
	$($('.floor_two')[index2]).show();
})

var index3=0;
var lunboc=function(){
	$('.floor_three').hide();
	var b=$('.floor_three')[index3];
	$(b).show();
	index3 +=1;
	if(index3==$('.floor_three').length){
		index3=0;
	}
};
var timeId_3=setInterval(lunboc,1000);
$('.lunbo2-left-3').click(function(){
	clearInterval(timeId_3);
	$('.floor_three').hide();
	index3--;
	if(index3==-1){
		index3=2;
	}
	$($('.floor_three')[index3]).show();
})
$('.lunbo2-right-3').click(function(){
	clearInterval(timeId_3);
	$('.floor_three').hide();
	index3++;
	if(index3==3){
		index3=0;
	}
	$($('.floor_three')[index3]).show();
})

var index4=0;
var lunboc=function(){
	$('.floor_four').hide();
	var b=$('.floor_four')[index4];
	$(b).show();
	index4 +=1;
	if(index4==$('.floor_four').length){
		index4=0;
	}
};
var timeId_4=setInterval(lunboc,1000);
$('.lunbo2-left-4').click(function(){
	clearInterval(timeId_4);
	$('.floor_four').hide();
	index4--;
	if(index4==-1){
		index4=2;
	}
	$($('.floor_four')[index4]).show();
})
$('.lunbo2-right-4').click(function(){
	clearInterval(timeId_4);
	$('.floor_four').hide();
	index4++;
	if(index4==3){
		index4=0;
	}
	$($('.floor_four')[index4]).show();
})
var index5=0;
var lunbod=function(){
	$('.floor_five').hide();
	var b=$('.floor_five')[index5];
	$(b).show();
	index5 +=1;
	if(index5==$('.floor_five').length){
		index5=0;
	}
};
var timeId_5=setInterval(lunbod,1000);
$('.lunbo2-left-5').click(function(){
	clearInterval(timeId_5);
	$('.floor_five').hide();
	index5--;
	if(index5==-1){
		index5=2;
	}
	$($('.floor_five')[index5]).show();
})
$('.lunbo2-right-5').click(function(){
	clearInterval(timeId_5);
	$('.floor_five').hide();
	index5++;
	if(index5==3){
		index5=0;
	}
	$($('.floor_five')[index5]).show();
})
var index6=0;
var lunbod=function(){
	$('.floor_eight').hide();
	var b=$('.floor_eight')[index6];
	$(b).show();
	index6 +=1;
	if(index6==$('.floor_eight').length){
		index6=0;
	}
};
var timeId_6=setInterval(lunbod,1000);
$('.lunbo2-left-8').click(function(){
	clearInterval(timeId_6);
	$('.floor_eight').hide();
	index6--;
	if(index6==-1){
		index6=2;
	}
	$($('.floor_eight')[index6]).show();
})
$('.lunbo2-right-8').click(function(){
	clearInterval(timeId_6);
	$('.floor_eight').hide();
	index6++;
	if(index6==3){
		index6=0;
	}
	$($('.floor_eight')[index6]).show();
})
// 桃心
$('.hot-brand-m a').hover(function(){
	$(this).css({color:'#c40000'});
},function(){
	$(this).css({color:'#fff'})
})
// 选项卡
$('.hot_a').each(function(i){
	$(this).data('list_hot',i);
	// console.log(i);
})
$('.hot_a').click(function(){
	var i=$(this).data('list_hot');
	$('.hot-brand-b').hide();
	$($('.hot-brand-b')[i]).show();
	$('.hot_a').css({fontWeight:400,borderBottom:'none',fontSize:'12px'});
	$(this).css({fontWeight:700,borderBottom:'2px solid #000',fontSize:'16px'});
})
// 
var arr=[];
$('.one-left').each(function(i){
	
	// $(this).data('indexa',i);
	var floot_newtop=$($('.one-left')[i]).offset().top;
	console.log(floot_newtop,i);
	arr.push(floot_newtop);
	console.log(arr);
})
$(window).scroll(function(){
	if($(window).scrollTop()>1000){
		$('.slidebar-left').show();
	}else{
		$('.slidebar-left').hide();
	}
	for(var i=0;i<arr.length;i++){
		if($(window).scrollTop()>(arr[i]-130) && $(window).scrollTop()<(arr[i+1]-130)){
			$($('.slidebar-3')[i]).hide();
			$($('.slidebar_font')[i]).css({background:'#c40000'}).show();
		}else{
			$($('.slidebar-3')[i]).show();
			$($('.slidebar_font')[i]).css({background:''}).hide();
		}
	}
	
})







































// ------------------------------------------------
// var aa=$('<span>1</span>')
// console.dir(aa);
// var $=function(arg){
// 	if(typeof arg=='function'){
// 		window.onload=arg;
// 	}
// }
// --------------------------------------------
// $({aa:0}).animate(
// 	{aa:1000},
// 	{
// 		duration:700,
// 		step:function(){console.log(this.aa);}}	
// )
// $({}).animate({},{});
// 从0到1000的变化
// ----------------------------------------------








})