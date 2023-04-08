const arrowButtons = document.querySelectorAll('.arrow-btn');

arrowButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const parentElement = this.parentElement;
    const siblingElement = parentElement.nextElementSibling;

    siblingElement.classList.toggle('show');
    this.classList.toggle('rotate');

    const heading = button.parentElement.querySelector('h3');
    heading.classList.toggle('color-change')
  });
});