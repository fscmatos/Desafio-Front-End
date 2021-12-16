const ratingStars = [...document.getElementsByClassName("rating_star")];

function executeRating(stars) {
  const starClassActive = "rating_star active";
  const starClassInactive = "rating_star inactive";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);
