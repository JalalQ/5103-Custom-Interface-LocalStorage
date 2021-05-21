//LAB 10-DATA STORAGE: PRODUCTS PAGE
//alert("products");//DELETE AFTER CONFIRMING CONNECTION



window.onload = function(){
    
    var uName = localStorage.getItem("name");
    
    if (uName) {
        document.getElementById("newMsgBox").innerHTML = "Welcome " + uName + "!";
    }
    
    var uColor = localStorage.getItem("color");
    
    if (uColor) {
        document.body.style.background = uColor;
    }

}