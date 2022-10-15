function rollimg(divid,imgsrc,varname){
	this.sdiv=t=document.getElementById(divid);
	this.imgsrc=imgsrc;
	var img1=document.createElement("img");
	img1.width=160;
	img1.height=180;
	this.sdiv.appendChild(img1);
	this.img=img1;
	var div1=document.createElement("div");
	div1.className="boxtext";
	this.sdiv.appendChild(div1);
	this.xlink=new Array(3);
	for(var i=0;i<3;i++){
		var newlink=document.createElement("a");
		newlink.href="javascript:show("+varname+","+i+")";
		newlink.innerHTML=i+1;
		div1.appendChild(newlink);
		this.xlink[i]=newlink;
	}
	this.dispid=0;
	this.disp=function(){
		this.xlink[this.dispid].className="disp";
		this.img.src=this.imgsrc[this.dispid];
	}
	this.next=function(){
		this.xlink[this.dispid].className="";
		this.dispid=this.dispid+1;
		if(this.dispid>2)this.dispid=0;
		this.disp();
	}
	this.show=function(x){
		this.xlink[this.dispid].className="";
		this.dispid=x;
		this.disp();
	}
}
var newroll,newroll2;
var aa="images/G1.png,images/G2.png,images/G3.png".split(",");
var bb="images/iphone.png,images/G4.png,images/G5.png".split(",");
next=function(x){
	x.next();
}
show=function(x,y){
	x.show(y);
}
window.onload=function(){
	newroll=new rollimg("demo1",aa,"newroll");
	newroll.disp();
	setInterval("next(newroll)",2000);
	newroll2=new rollimg("demo2",bb,"newroll2");
	newroll2.disp();
	setInterval("next(newroll2)",2200);
}
