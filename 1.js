
onkeyup = function Show() {
    let take = document.getElementById("display").value;
    if (take == "-") {
        document.getElementById("show").innerHTML = "/ + - do not use symbols";
        document.getElementById("show").style.color = "red";
    } else if (take == "/") {
        document.getElementById("show").innerHTML = "/ + - do not use symbols";
        document.getElementById("show").style.color = "red";
    } else if (take == "+") {
        document.getElementById("show").innerHTML = "/ + - do not use symbols";
        document.getElementById("show").style.color = "red";
    } else if (take.length == 0) {
        document.getElementById("show").innerHTML = "The password you enter must consist of letters and numbers";
        document.getElementById("show").style.color = "rgb(221, 212, 212)";
    } else if (take.length <= 3) {
        document.getElementById("show").innerHTML = "Very Weak &#9785"

    } else if (take.length <= 8) {
        document.getElementById("show").innerHTML = "Weak &#9785"

    } else if (take.length <= 10) {
        document.getElementById("show").innerHTML = "Standart &#9786"

    } else {
        document.getElementById("show").innerHTML = "Strong &#9786"
        document.getElementById("show").style.color = "rgb(221, 212, 212)";
    }
}



document.getElementById("slash").style.display="none";
function Active(){
    let take = document.getElementById("display");
    if(take.type ==="password" ){
        take.type = "text";
    } else{ take.type = "password"};
   document.getElementById("eye").style.display="none";
   document.getElementById("slash").style.display="inline";
}

function Hide(){
    let take1 = document.getElementById("display");
    if(take1.type === "text"){
        take1.type = "password";
    }else{take.type = "text"};
    document.getElementById("slash").style.display="none";
    document.getElementById("eye").style.display="inline";
    
}
