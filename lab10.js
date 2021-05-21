//LAB 10-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION



window.onload = function(){
    
    var button = document.getElementById("buttonBox");
    var buttondel = document.getElementById("btnDel");
    
    function refreshPage(){
        
        var userName = document.getElementById("inName").value;
        localStorage.setItem("name", userName);
        
        var backgroundColor = document.getElementById("inColor").value;
        localStorage.setItem("color", backgroundColor);
        
        window.location.reload();

    }
    
    function deleteInfo() {
        localStorage.clear();
        window.location.reload();
    }
    
    button.onclick = refreshPage;
    buttondel.onclick = deleteInfo;
    
    var uName = localStorage.getItem("name");
    if (uName) {
        document.getElementById("newMsgBox").innerHTML = "Welcome " + uName + "!";
    }
    
    var uColor = localStorage.getItem("color");
    if (uColor) {
        document.body.style.background = uColor;
    }

    
}