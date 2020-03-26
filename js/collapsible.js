const btn = document.getElementById('btn');
const content = document.getElementById('content')

btn.addEventListener('click', collapse, true);

function collapse() {
  if (content.classList == 'content-active') {
    console.log('first line')
    content.classList.replace('content-active', 'content');
  } else {
    console.log('second line')
    content.classList.replace('content', 'content-active');
  }
}