let offset = 0;
const slider = document.querySelector('.slider');

document.querySelector('.banner__next').addEventListener('click', function(){
    offset += 586;
    if (offset > 3 * 586) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

document.querySelector('.banner__previous').addEventListener('click', function(){
    offset -= 586;
    if (offset < 0) {
        offset = 3*586;
    }
    slider.style.left = -offset + 'px';
});