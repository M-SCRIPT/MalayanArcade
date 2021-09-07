const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
});

// Glowing text
const glowText = document.querySelector('.glow');

glowText.addEventListener('mouseover', () => {
  glowText.classList.add('enter-glow');
  setTimeout(() => {
    glowText.classList.remove('enter-glow');
    glowText.classList.add('glowing');
  }, 550);
});

glowText.addEventListener('mouseout', () => {
  glowText.classList.remove('glowing');
  glowText.classList.add('leave-glow');
  setTimeout(() => {
    glowText.classList.remove('leave-glow');
  }, 500);
});