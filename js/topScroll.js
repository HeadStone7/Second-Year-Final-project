// 控制顶部的隐藏与现实搜索框
window.onscroll=function(){

    var top =document.documentElement.scrollTop;

    var nav=document.getElementsByClassName('searchBar')[0];

    if(top>=150){
           nav.style.position="fixed";
           nav.style.top="0";

           nav.style.display="block";
           nav.style.zIndex=1000;
           nav.style.background="#fff"
           nav.style.height="34px"
       }else{
       	nav.style.width="550px";
       	nav.style.height="35px";
		nav.style.position="absolute";
		nav.style.top="25px";
		nav.style.left="278px";
       }

}

// // 大图轮播js