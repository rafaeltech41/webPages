let num1;
let num2;
let sum;
let calculate;
document.getElementById("calculate").onclick = function(){
    num1 =Number(document.getElementById("num1").value);
    num2 =Number(document.getElementById("num2").value);
    sum = document.getElementById("operator").value;
    
    switch(sum){
        case "+":
            return window.alert(num1+num2);
            case"-":
            return window.alert(num1-num2);
            case "*":
                return window.alert(num1*num2);
                case "/":
                            return num2!==0||num1!==0 ? window.alert(num1/num2): window.alert("error division 0");
                    default: return "operador errado";
    }   
}