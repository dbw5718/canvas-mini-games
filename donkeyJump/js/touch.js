function touch(x1,y1,w1,h1,x2,y2,w2,h2){
	if(x1>x2+w2 || y1>y2 ||  x2>x1+w1  ||y2>y1+h1){
		return false;  //没碰到

	}else{
		return  true;   //碰到了
	}
}
