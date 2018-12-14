var m = [2,5,15,7];
function Max(m) {
    var max = m[0];
    for (i = 1;i < m.length; i++){
        if (m[i] > max)
            max = m[i];
    }
    document.write(max + " là số lớn nhất<br>");
}
function Min(m) {
    var min = m[0];
    for (i = 1;i < m.length; i++){
        if (m[i] < min)
            min = m[i];
    }
    document.write(min + " là số bé nhất<br>");
}
Max(m);
Min(m);



