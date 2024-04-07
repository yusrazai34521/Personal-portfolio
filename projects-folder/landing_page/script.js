// Select elements
const header = document.querySelector('header');
const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.navigation a');

// Add event listener for scroll
window.addEventListener('scroll', () => {
  // Add a class to header when scrolled
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add event listener for mouseover and mouseout on menu items
menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Add a class when hovering over a menu item
    item.classList.add('hovered');
  });

  item.addEventListener('mouseout', () => {
    // Remove the class when mouseout
    item.classList.remove('hovered');
  });
});
