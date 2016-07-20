var num1 = "", num2 = "";
var num = false;
var op;

function addNumber(n) {
    if (num) {
        num2 += n; // num2 = num2 + n;
        showNumber(num2);
    } else {
        num1 += n;
        showNumber(num1);
    }
}
function operator(o) {
    op = o;
    num = true;
    showNumber(0);
}
function operate() {
    var result = 0;
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    switch(op){
        case 0: 
            result = n1+n2;
        break;
        case 1: 
            result = n1-n2;
        break;
        case 2: 
            result = n1*n2;
        break;
        case 3: 
            result = n1 / n2;
        break;
    }
    showNumber(result);
    num1 = "";
    num2 = "";
    num = false;
}
function showNumber(value) {
    var campo = document.getElementById("campo");
    campo.value = value;
}