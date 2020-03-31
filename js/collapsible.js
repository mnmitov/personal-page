var btn = document.getElementById('btn');
var content = document.getElementById('content');
btn.addEventListener('click', collapse, true);
function collapse() {
    if (String(content.classList) == 'content-active') {
        content.classList.replace('content-active', 'content');
    }
    else {
        content.classList.replace('content', 'content-active');
    }
}