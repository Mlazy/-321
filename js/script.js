// var swiper = new Swiper('.swiper-container', {
//      pagination: '.swiper-pagination',
//      direction: 'vertical',
//      slidesPerView: 1,
//      paginationClickable: true,
//      spaceBetween: 30,
//      mousewheelControl: true
//  });

var swiper = new Swiper('.swiper-container', {
   direction: 'vertical',
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   on:{
      init: function(){
         swiperAnimateCache(this); //隐藏动画元素
         swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function(){
         swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      }
   }
});
var music =document.getElementById("music");
var musicIg =document.querySelectorAll(".musicIg")[0];
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio= document.querySelector("audio");
var flag=1;
music.onclick=function(){
   if(flag == 1){
      musicIg.style.display="none";
      musicImg.style.animation="none";
      audio.pause();
      flag=0;
   }else{
      musicIg.style.display="block";
      musicImg.style.animation=" turn 6s infinite linear";
      audio.play();
      flag=1;
   }
};

// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.577695,38.082731);
var marker = new BMap.Marker(point);
map.addOverlay(marker);
enableMessage:true,//设置允许信息窗发送短息
    map.centerAndZoom(point,11);
var opts = {
   width : 200,     // 信息窗口宽度
   height: 100,     // 信息窗口高度
   title : "泊头师范欢迎您的到来" , // 信息窗口标题
   enableMessage:true,//设置允许信息窗发送短息
   message:"这里有你所要的人才"
};
var infoWindow = new BMap.InfoWindow("地址：泊头师范学院", opts);  //

function theLocation(){
   var city = document.getElementById("cityName").value;
   if(city != ""){
      map.centerAndZoom(city,11);      // 用城市名设置地图中心点
   }
}
marker.addEventListener("click", function(){
   map.openInfoWindow(infoWindow,point); //开启信息窗口
});