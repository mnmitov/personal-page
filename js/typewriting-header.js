var i = 0;
var txt = 'of Miroslav Mitov';
var speed = 200;

(function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriting-header").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})()