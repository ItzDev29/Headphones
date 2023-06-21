const bar = document.getElementById('bar');
const closeButton = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

window.onscroll = function() { showGoToTopButton() };

function showGoToTopButton() {
  var scrollToTopButton = document.getElementById("goToTopBtn");
  
  // Display the button when the user scrolls down 20px from the top
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function goToTop() {
  // Scroll to the top of the document
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
