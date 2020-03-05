menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === 'nav') {
        $('#topnav').addClass(' responsive')
        $('#menu').html('&#215;');
        $('.logo-pult').css("opacity",".2");
    } else {
        x.className = 'nav';
        $('.logo-pult').css("opacity","1");
        $('#menu').html('&#9776;');
    }
}