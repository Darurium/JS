'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');


box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.cssText = 'border: 1px solid red; background-color: blue';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
};
