document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mainNav');
    if (window.innerWidth >= 992) return;
    const closeMenu = () => bootstrap.Collapse.getOrCreateInstance(menu).hide();
    if (menu.classList.contains('show')) {
      closeMenu();
    } else if (menu.classList.contains('collapsing') && parseFloat(menu.style.height) > 0) {
      // Finish opening before closing when a link is selected during the animation.
      menu.addEventListener('shown.bs.collapse', closeMenu, { once: true });
    }
  });
});
