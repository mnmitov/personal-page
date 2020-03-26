const btn = document.getElementById('btn');
const content = document.getElementById('content')

btn.addEventListener('click', collapse, true);

function collapse() {
  if (content.classList == 'content-active') {
    content.classList.replace('content-active', 'content');
  } else {
    content.classList.replace('content', 'content-active');
  }
}