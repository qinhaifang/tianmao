window.onload=function(){
var listblock=document.getElementsByClassName('listblock');
var blocka=document.getElementsByClassName('blocka');
for(var i=0;i<blocka.length;i++){
	listblock[i].index=i;
	listblock[i].onmouseover=function(){
		blocka[this.index].style.display='block';
	};
	listblock[i].onmouseout=function(){
		blocka[this.index].style.display='none';
	};
}
var list_right=document.getElementsByClassName('list_right');
var slidebar_list=document.getElementsByClassName('slidebar_list');
for(var i=0;i<list_right.length;i++){
	list_right[i].onmouseover=function(){
		slidebar_list[i].style.display='block';
	};
}
// 轮波
var hidden=document.getElementById('hidden');
var hiddens=document.getElementsByClassName('hidden');
var circles=document.getElementsByClassName('circle_item');
var banner=hiddens[0],circle=circles[0],count=0,timeID;
fn=function(){
	banner.style.display='none';
	hiddens[count].style.display='block';
	banner=hiddens[count];
	circle.style.background='black';
	circles[count].style.background='red';
	circle=circles[count];
	console.log(circle);
	count++;
	if(count==circles.length){
		count=0;
	}
};
timeID=setInterval(fn,2000);



















};