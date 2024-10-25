const scrollContainer = document.querySelector('.scrolling-items');

  function scrollLeft() {
    scrollContainer.scrollBy({
      top: 0,
      left: -200, // Adjust this value for smooth scrolling (card width)
      behavior: 'smooth',
    });
  }

  function scrollRight() {
    scrollContainer.scrollBy({
      top: 0,
      left: 200, // Adjust this value for smooth scrolling (card width)
      behavior: 'smooth',
    });
  }