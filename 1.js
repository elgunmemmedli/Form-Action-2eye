
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




function Active(){
    let x = document.getElementById("display").type;

    if (x == "password") {
        document.getElementById("display").type = 'text'
    } else {
        document.getElementById("display").type = 'password'
    }

    let z = document.getElementById("eye").className;
    if(z=="fas fa-eye-slash"){
        document.getElementById("eye").className="fas fa-eye"
    }else{
        document.getElementById("eye").className="fas fa-eye-slash"
    }
}

