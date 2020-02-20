menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === 'nav') {
        $('#topnav').addClass(' responsive')
        $('#menu').html('&#215;');
        $('.welcome').addClass(' hidden');
    } else {
        x.className = 'nav';
        $('.welcome').removeClass(' hidden');
        $('#menu').html('&#9776;');
    }
}