document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('#star-container .star');
    const ratingCount = document.getElementById('count');
    let currentRating = 0;
  
    stars.forEach(star => {
      star.addEventListener('mouseover', () => {
        fillStars(star.dataset.index);
      });
  
      star.addEventListener('click', () => {
        currentRating = star.dataset.index;
        ratingCount.innerText = currentRating;
        fillStars(currentRating);
      });
  
      star.addEventListener('mouseout', () => {
        fillStars(currentRating);
      });
    });
  
    function fillStars(rating) {
      stars.forEach(star => {
        if (star.dataset.index <= rating) {
          star.classList.add('star-filled');
        } else {
          star.classList.remove('star-filled');
        }
      });
    }
  });
  