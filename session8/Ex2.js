function loadInfor(player) {
    switch (player) {
        case 'cp':
            document.images['default'].src = "Cong-Phuong.jpg";
            document.getElementById('name').innerHTML = "Nguyễn Công Phượng";
            document.getElementById('age').innerHTML = 23;
            break;
        case 'xt':
            document.images['default'].src = "Xuan_Truong.jpg";
            document.getElementById('name').innerHTML = "Lương Xuân Trường";
            document.getElementById('age').innerHTML = 23;
            break;
        case 'qh':
            document.images['default'].src = "Quang-Hai.jpg";
            document.getElementById('name').innerHTML = "Nguyễn Quang Hải";
            document.getElementById('age').innerHTML = 21;
            break;
        case 'pvd':
            document.images['default'].src = "phan_van_duc.jpg";
            document.getElementById('name').innerHTML = "Phan Văn Đức";
            document.getElementById('age').innerHTML = 22;
            break;
    }
}
document.getElementById('result').style.display = 'none';
function voteGoal() {
    var yes = document.getElementById('yes').checked;
    var no = document.getElementById('no').checked;
    if (yes) 
        document.getElementById('result').style.display = 'block';
    if (no) 
        document.getElementById('result').style.display = 'none';
}

function show() {
    if (document.getElementById('result').style.display == 'block') {
        var ct = document.getElementById('result').value;
        document.getElementById('result2').innerHTML = "Chúc mừng bạn đã ghi bàn vào lưới " + ct;
    }
    else
        document.getElementById('result2').innerHTML = "Hãy cố gắng ghi bàn";
}