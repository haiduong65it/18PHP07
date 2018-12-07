// for (var i = 1; i <= 100; i++){
//     if (i % 15 == 0)
//         document.write("Số " + i + " chia het cho 15<br>");
//     else if (i % 5 == 0) {
//         document.write("Số " + i + " chia het cho 5<br>");
//     }
//     else if (i % 3 == 0) {
//         document.write("Số " + i + " chia het cho 3<br>");
//     }
//     else {
//         document.write("Số " + i + " khong chia het cho 3, 5, 15<br>")
//     }
// }
// var i = 1;
// while (i <= 100){
//     if (i % 15 == 0)
//         document.write("Số " + i + " chia het cho 15<br>");
//     else if (i % 5 == 0) {
//         document.write("Số " + i + " chia het cho 5<br>");
//     }
//     else if (i % 3 == 0) {
//         document.write("Số " + i + " chia het cho 3<br>");
//     }
//     else {
//         document.write("Số " + i + " khong chia het cho 3, 5, 15<br>")
//     }
//     i++;
// }
var i = 1;
do {
    if (i % 15 == 0)
        document.write("Số " + i + " chia het cho 15<br>");
    else if (i % 5 == 0) {
        document.write("Số " + i + " chia het cho 5<br>");
    }
    else if (i % 3 == 0) {
        document.write("Số " + i + " chia het cho 3<br>");
    }
    else {
        document.write("Số " + i + " khong chia het cho 3, 5, 15<br>")
    }
    i++;
}while (i <= 100);