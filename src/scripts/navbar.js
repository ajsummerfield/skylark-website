export function navbar() {
  let navbarMenu;
  let navbarBurger;
  let isOpen;

  const navbar = {
    init: () => {
      isOpen = false;
      navbarMenu = document.querySelector('.navbar-menu');
      navbarBurger = document.querySelector('.navbar-burger');

      if (navbar && navbarBurger) {
        navbarBurger.addEventListener('click', onNavbarBurgerClick);
      }
    }
  };

  const onNavbarBurgerClick = () => {
    if (isOpen) {
      navbarMenu.classList.remove('is-active');
      navbarBurger.classList.remove('is-active');
    } else {
      navbarMenu.classList.add('is-active');
      navbarBurger.classList.add('is-active');
    }

    isOpen = !isOpen;

    return false;
  }

  return navbar;
}

const nav = navbar();
nav.init();