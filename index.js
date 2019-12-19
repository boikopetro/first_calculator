let x, y, result;
function sum() {
    x=document.getElementById("numberone").value;
    x=parseInt(x);
    y=document.getElementById("numbertwo").value;
    y=parseInt(y);
    result=x+y;
    document.getElementById("out").innerHTML=result;
};
function subtract() {
    x=document.getElementById("numberone").value;
    x=parseInt(x);
    y=document.getElementById("numbertwo").value;
    y=parseInt(y);
    result=x-y;
    document.getElementById("out").innerHTML=result;
};
function multiply() {
    x=document.getElementById("numberone").value;
    x=parseInt(x);
    y=document.getElementById("numbertwo").value;
    y=parseInt(y);
    result=x*y;
    document.getElementById("out").innerHTML=result;
};
function devide() {
    if(y==0){
        alert("error(y=0)")
    }
    else {
    x=document.getElementById("numberone").value;
    x=parseInt(x);
    y=document.getElementById("numbertwo").value;
    y=parseInt(y);
    result=x/y;
    document.getElementById("out").innerHTML=result;
    }
};