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

function myForm() {
  document.getElementById("myForm").reset();
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

/*=== FORM ===========================================*/

const buttonSubmit = document.getElementById('btn-submit');

const addLoading = () => {
  buttonSubmit.innerHTML = '<img src="./img/loading.png" class="loading" />';
}

const removeLoading = () => {
  buttonSubmit.innerHTML = 'Vamos conversar';
}

const handleSubmit = (event) => {
  event.preventDefault();
  addLoading();

  const name = document.querySelector('input[name=name]').value;
  const email = document.querySelector('input[name=email]').value;
  const phone = document.querySelector('input[name=phone]').value;
  const message = document.querySelector('textarea[name=message]').value;

  fetch('https://api.sheetmonkey.io/form/5tbfWKfMtfoCts2Xp8JoM4', {
    
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone, message }),
  }).then(() => alert('DADOS ENVIADOS COM SUCESSO! ✅                                                Em breve entraremos em contato para convesarmos! OBRIGADO! 😉')).then(() => removeLoading()).then(() => myForm());
}

document.querySelector('form').addEventListener('submit', handleSubmit);