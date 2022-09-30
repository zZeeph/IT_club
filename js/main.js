'use strict';

document.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;
  console.log(scrollY);

  if (scrollY > 0) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
});