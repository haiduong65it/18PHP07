document.getElementById('avatar').style.display = "none";
function getInfo() {
    var e = document.getElementById("year");
    var year = e.options[e.selectedIndex].value;
    year = parseInt(year);
    document.getElementById('re_birth').innerHTML = year;
    if (year > 1998)
        document.body.style.background = 'green';
    else
        document.body.style.background = 'yellow';
    var name = document.getElementById('name').value;
    document.getElementById('re_name').innerHTML = name;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    document.getElementById('avatar').style.display = "block";
    if (male) {
        document.images['avatar'].src = "default.jpg";
    }
    if (female) {
        document.images['avatar'].src = "female.png";
    }
}