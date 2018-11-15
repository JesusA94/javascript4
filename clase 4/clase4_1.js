
function over(){
    var grande=document.getElementById("grande");
    grande.src=this.src;
}
function out(){
    var grande=document.getElementById("grande");
    grande.src="img/sinfoto.jpg"
}
var img1=document.getElementById('img1');


for (let i=1;i<=4;i++){
    var img=document.getElementById("img"+i);
    //img.onmousedown = over;
    //img.onmouseup = out;

    img.onmouseenter=over;
    img.onmouseout=out;
}