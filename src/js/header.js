import { switchToHome, switchToFavorites } from './exercises.js';

let currentPage = 'home';

let mobileMenu = null;
let burgerButton = null;
let closeButton = null;

export function switchPage(page) {
  if (currentPage === page) return;

  currentPage = page;

  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === page) {
      link.classList.add('header__nav-link--active');
    } else {
      link.classList.remove('header__nav-link--active');
    }
  });

  const mobileNavLinks = document.querySelectorAll('.mobile-menu__nav-link');
  mobileNavLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === page) {
      link.classList.add('mobile-menu__nav-link--active');
    } else {
      link.classList.remove('mobile-menu__nav-link--active');
    }
  });

  if (page === 'home') {
    switchToHome();
  } else if (page === 'favorites') {
    switchToFavorites();
  }
}

function openMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

export function initHeader() {

  const navLinks = document.querySelectorAll('.header__nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) {
        switchPage(page);
      }
    });
  });

  mobileMenu = document.querySelector('.mobile-menu');
  burgerButton = document.querySelector('.header__burger');
  closeButton = document.querySelector('.mobile-menu__close');

  if (burgerButton) {
    burgerButton.addEventListener('click', openMobileMenu);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeMobileMenu);
  }

  const mobileNavLinks = document.querySelectorAll('.mobile-menu__nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) {
        switchPage(page);
        closeMobileMenu();
      }
    });
  });

  if (mobileMenu) {
    mobileMenu.addEventListener('click', e => {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });
  }
}

export function getCurrentPage() {
  return currentPage;
}

