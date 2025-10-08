// Simple helper: show scroll tip only if links can scroll further
const links = document.querySelector('.links');
const tip = document.getElementById('scrollTip');

function updateTip(){
  const canScroll = links.scrollHeight - links.clientHeight - links.scrollTop > 4;
  tip.style.display = canScroll ? 'block' : 'none';
}

links.addEventListener('scroll', updateTip);
window.addEventListener('resize', updateTip);
document.addEventListener('DOMContentLoaded', updateTip);

tip.addEventListener('click', () => {
  links.scrollBy({ top: links.clientHeight * 0.8, behavior: 'smooth' });
});
