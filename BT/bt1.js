var a=5;
var b=6;
function cong(a, b){
    document.writeln(a +" + " +b+ " = "+(a+b));
    document.write("<br>");
}
function tru(a, b){
    document.writeln(a +" - " +b+ " = "+(a-b));
    document.write("<br>");
}
function nhan(a, b){
    document.writeln(a +" * " +b+ " = "+(a*b));
    document.write("<br>");
}
function chia(a, b){
    document.writeln(a +" / " +b+ " = "+(a/b));
    document.write("<br>");
}
console.log(cong(a, b));
console.log(tru(a, b));
console.log(nhan(a, b));
console.log(chia(a, b));