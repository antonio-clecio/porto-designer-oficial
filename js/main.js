window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navegation.classList.add("scroll");
  } else {
    navegation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 650) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
}).reveal(`
#home, 
#home h4, 
#home p,
#services,
#services h4,
#services h2,
#services .card,
#works,
#works h4,
#works h2,
#works .card,
#works .arguments,
#works .works-btn,
#about,
#about h4,
#about h2,
#about p,
#about img,
#contact,
#contact h4,
#contact h2,
#contact p,
#contact form,
#contact img,
footer,
footer h2,
footer p,
footer .social-links`);