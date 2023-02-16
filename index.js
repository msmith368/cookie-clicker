let count = 0;
let money = 0;
let bakeryBought = false;
let bakeryStatus = false;

document.getElementById("cookie").onclick = function(){
    count = count+1;
    document.getElementById("counter").innerHTML = count;
    money = Math.round((money+10)*1.05);
    document.getElementById("money").innerHTML = "$" + money;
    document.getElementById("deltaCookie").style.color = "green";
    document.getElementById("deltaCookie").innerHTML = "+1"
    document.getElementById("deltaCookie").style.color = "green";
    document.getElementById("deltaCookie").innerHTML = "+1"
    document.getElementById("deltaMoney").style.color = "green";
    document.getElementById("deltaMoney").innerHTML = "+$" + (Math.round((money+10)*1.05) - money)
    setTimeout(function(){
        document.getElementById("deltaCookie").style.color = "white";
        document.getElementById("deltaMoney").style.color = "white";
    }
    , 500);
} 

document.getElementById("bakery").onclick = function(){
    if(money >= 500 && bakeryBought == false){
        bakeryBought = true;
        bakeryStatus = true;
        money-=500;
        document.getElementById("money").innerHTML = "$" + money;
        document.getElementById("bakery").innerHTML = "Bakery On";
        document.getElementById("bakery").classList.toggle("buttonOn");
        document.getElementById("deltaMoney").style.color = "red";
        document.getElementById("deltaMoney").innerHTML = "-$500";
    }
    else if(bakeryBought){
        if(bakeryStatus){
            document.getElementById("bakery").innerHTML = "Bakery Off";
            document.getElementById("bakery").classList.toggle("buttonOff");
            document.getElementById("bakery").classList.toggle("buttonOn");
            bakeryStatus = false;
        }else{
            document.getElementById("bakery").innerHTML = "Bakery On";
            document.getElementById("bakery").classList.toggle("buttonOn");
            document.getElementById("bakery").classList.toggle("buttonOff");
            bakeryStatus = true;
        }
    }
}

setInterval(function() {
    if(bakeryStatus){
        //document.getElementById("cookie").click();
        money = Math.round((money+10)*1.05);
        document.getElementById("money").innerHTML = "$" + money;   
        document.getElementById("deltaCookie").innerHTML = "+1"
        document.getElementById("deltaMoney").style.color = "green";
        document.getElementById("deltaMoney").innerHTML = "+$" + (Math.round((money+10)*1.05) - money);
    
        setTimeout(function(){
            document.getElementById("deltaMoney").style.color = "white";
        }
        , 500);
    }
}, 1000);
