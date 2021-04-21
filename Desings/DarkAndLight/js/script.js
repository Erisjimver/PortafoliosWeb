const body = document.querySelector('body');
const toogle = document.getElementById('toogle');
toogle.onclick = function() {
    toogle.classList.toggle('active');
    body.classList.toggle('active');
}