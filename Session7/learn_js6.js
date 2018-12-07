var a;
var b;
var c;
var d;
function Max(a, b, c, d) {
    (a > b & a > c & a > d)?document.write(a + " là số lớn nhất<br>"):
        (b>c & b > d)?document.write(b + " là số lớn nhất<br>"):
            (c > d)?document.write(c + " là số lớn nhất<br>"): 
                document.write(d + " là số lớn nhất<br>"); 
}
function Min(a, b, c, d) {
    (a < b & a < c & a < d)?document.write(a + " là số nhỏ nhất<br>"):
        (b < c & b < d)?document.write(b + " là số nhỏ nhất<br>"):
            (c < d)?document.write(c + " là số nhỏ nhất<br>"): 
                document.write(d + " là số nhỏ nhất<br>"); 
}
Max(2, 5, 15, 7);
Min(2, 5, 15, 7);
