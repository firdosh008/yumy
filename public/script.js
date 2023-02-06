$('img[data-enlargable]').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.2) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
}); 



const targetDiv = document.getElementById("login-div");
const profilediv=document.getElementById("profile");
const btn = document.getElementById("toggle");
btn.onclick = function () {
    if(btn.innerHTML!=="profile"){
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
            $('.main').css('opacity', '1');
            
          } else {
            targetDiv.style.display = "block";
            $('.main').css('opacity', '0.2');
          }
    }
    else{
        if (profilediv.style.display !== "none") {
            profilediv.style.display = "none";
            $('.main').css('opacity', '1');
            
          } else {
            profilediv.style.display = "block";
            $('.main').css('opacity', '0.2');
          }
    }
 
};


if(btn.innerHTML==="false"){
    btn.innerHTML="login/Signup";
    alert("Wrong password");
}


let add=document.getElementById("addtocart");

add.onclick=function(){
    console.log("f");
}  









