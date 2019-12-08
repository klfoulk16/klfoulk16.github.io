// Making the show more/show less buttons at the bottom of the travel and education columns

const showmore1 = document.getElementById('showmore1');
const listDiv1 = document.getElementById('more1');
const showmore2 = document.getElementById('showmore2');
const listDiv2 = document.getElementById('more2');

showmore1.addEventListener('click', () => {
  if ( listDiv1.style.display == 'none') {
    listDiv1.style.display = 'block';
    showmore1.textContent = 'Show less'
  } else {
      listDiv1.style.display = 'none';
      showmore1.textContent = 'Show more'
  }
});

showmore2.addEventListener('click', () => {
  if ( listDiv2.style.display == 'none') {
    listDiv2.style.display = 'block';
    showmore2.textContent = 'Show less'
  } else {
      listDiv2.style.display = 'none';
      showmore2.textContent = 'Show more'
  }
});
