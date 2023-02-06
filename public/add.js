let a=0;

document.querySelectorAll('#addtocart').forEach(item => {
    item.addEventListener('click', event => {
        console.log("fuck");
        document.getElementById("empty").style.display="none";
        document.getElementById("cartiteam").innerHTML += "<div class=row id=row1><div class=col-lg-5> <img src=img/b6.png class=card-img-top></div><div class=col-lg-7><h5 class=card-title>Card title</h5></div></div><div class= row><div class=col-lg-6> <form><div class= value-button  id= decrease  onclick= decreaseValue()  value= Decrease Value >-</div><input type= number  id= number  value= 0  /><div class= value-button  id= increase  onclick= increaseValue()  value= Increase Value >+</div></form></div><div class=col-lg-6><h5 class=price>$123 <span class=sub>.32</span></h5></div></div><hr><br>  "  
       if(a==0)
        document.getElementById("cartiteam").innerHTML +="<div id=CHECKOUT><div class=row><div class=col-lg-8><h2>SUBTOTAL</h2></div><div class=col-lg-4><h5>$123 <span class=to>.32</span></h5></div></div><div class=row><button  class=btn ><a href=/checkout>CHECKOUT</a></button > </div></div>"
      a++;
    })
    })