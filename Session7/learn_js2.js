var a = 5;
document.write("a = "+ a + "<br>");
/*switch(a) {
    case 1: document.write("Đây là tháng một");break;
    case 2: document.write("Đây là tháng hai");break;
    case 3: document.write("Đây là tháng ba");break;
    case 4: document.write("Đây là tháng tư");break;
    case 5: document.write("Đây là tháng năm");break;
    case 6: document.write("Đây là tháng sáu");break;
    case 7: document.write("Đây là tháng bảy");break;
    case 8: document.write("Đây là tháng tám");break;
    case 9: document.write("Đây là tháng chín");break;
    case 10: document.write("Đây là tháng mười");break;
    case 11: document.write("Đây là tháng mười một");break;
    case 12: document.write("Đây là tháng mười hai");break;
    default : document.write("Đây không phải là tháng trong năm!!");break;
}*/

if (a > 0 & a < 13) {
    document.write("Đây là tháng " + a);
}
else
    document.write("Đây không phải tháng trong năm!!");

