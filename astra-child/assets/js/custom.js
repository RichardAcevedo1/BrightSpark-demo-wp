/* Validacion de formulario */
const form = document.getElementById("emailForm");
const input = document.getElementById("emailInput");
const feedback = document.getElementById("emailFeedback");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = input.value.trim();

  // Validación básica
  if (!email || !email.includes("@")) {
    form.classList.remove("success");
    form.classList.add("error");

    feedback.textContent = "Introduce un email válido";
    feedback.className = "email-feedback error";
    return;
  }

  // Simulación de envío correcto
  form.classList.remove("error");
  form.classList.add("success");

  feedback.textContent = "¡Gracias! Te has suscrito correctamente";
  feedback.className = "email-feedback success";

  input.value = "";
});

/*MENU FLOTANTE*/
window.addEventListener("scroll", function () {
  const header = document.querySelector(".ast-below-header-wrap");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
