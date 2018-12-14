var month;
var year;
function MonthChecking (month, year){
    document.write("Tháng "+ month + " năm "+ year)
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: document.write(" có 31 ngày");break;
        case 2: 
        if ((year % 4 == 0) & (year % 100 !=0)) {
            document.write(" có 29 ngày");
        }
        else {
            document.write(" có 28 ngày");
        }
        break;
        case 4:
        case 6:
        case 9:
        case 11: document.write(" có 30 ngày");
        default: document.write("<br>Đây không phải là tháng trong năm!!");break;
    }
}
MonthChecking(2, 2004)
