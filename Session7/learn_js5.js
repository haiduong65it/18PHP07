var a;
function checkParity(a) {
    if (a % 2 == 0) 
        document.write(a + " là số chẵn<br>");
    else
    document.write(a + " là số lẽ<br>");
}
function checkfibo(a) {
    var i = 1;
    var j = 1;
    var fb = i + j; 
    if (a == 1 || a == 2)
        document.write(a + " nằm trong dãy fibonaci từ 1-100<br>");
    else {
        while (fb < a) {
            i = j;
            j = fb;
            fb = (i + j);
        }
        if (fb == a) 
            document.write(a + " nằm trong dãy fibonaci từ 1-100<br>");
        else
            document.write(a + " không nằm trong dãy fibonaci từ 1-100<br>");
    }
}
function checkCP(a) {
    var i = 1;
    while (i * i < a) {
        i++;
    }
    if (i * i == a) 
        document.write(a + " là số chính phương<br>");
    else
    document.write(a + " không phải là số chính phương<br>");
}
checkParity(9);
checkfibo(13);
checkCP(9);
