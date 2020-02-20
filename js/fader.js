btn1.onclick = function fader() {
    $('#synthesizers').fadeOut();
    $('#pianos').fadeIn();
}

btn2.onclick = function fader() {
    $('#synthesizers').fadeIn();
    $('#pianos').fadeOut();
}