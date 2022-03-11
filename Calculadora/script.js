function getHistory(){
    return document.getElementById("history-value").innerText
}
function printHistory(num){
    document.getElementById("history-value").innerText_num
}
function getOutput(){
    return document.getElementById("output-value").innerText
}
function printOutput(num){
    if(num ==""){
        document.getElementById("output-value").innerText=num
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num)
    }
}
function getFormattedNumber(num){
    if(num=""){
        return "";
    }
    var n = Number(num);
    var value = n.toLocalesString("en");
    return value;
}
function reverseNumberformat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementByIdClassName("operator");
for(var i = 0, izoperator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id="backspace"){
            var output=reverseNumberformat(getOutput()).toString();
            if(output){
                
            }
        }
    })
}