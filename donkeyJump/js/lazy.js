var arr=["floor.png","hill.png","hillnear.png","sky.jpg","daiji.png","icon.png","stairs.png"];
//懒加载
function lazyload(fun){
	var  load=0;
	var images={};
	for(var i=0;i<arr.length;i++){
		var img=new Image();
		img.onload=function(){
			load++;
			if(load==arr.length){
				fun(images);
			}
		}
		img.src=arr[i];
		var name=arr[i].split(".")[0];
		images[name]=img;	
	}
}