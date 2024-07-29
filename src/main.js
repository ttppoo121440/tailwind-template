import '@/assets/styles/tailwind.css';

document.addEventListener('DOMContentLoaded', () => {
  const countButton = document.getElementById('countButton');
  const countSpan = document.getElementById('count');
  let count = 0;

  countButton.addEventListener('click', () => {
    count += 1;
    countSpan.textContent = count;
  });
});
