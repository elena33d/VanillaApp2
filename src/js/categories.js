const categoryCards = document.querySelectorAll('.categoryCard');

categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Category clicked');

  });
});
