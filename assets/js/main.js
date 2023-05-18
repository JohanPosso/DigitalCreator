const btnSendEmail = document.getElementById("btnSendEmail");
const btnSend = document.getElementById("send");
const mensaje = document.getElementById("contact-message");
const asunto = document.getElementById("contact-subject");
const email = document.getElementById("contact-email");

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "es" },
    "google_translate_element"
  );
}

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  btnSendEmail.setAttribute(
    "href",
    `mailto:johan.posito@gmail.com?subject=${asunto.value}&body=${mensaje.value}`
  );
  btnSendEmail.click();
});
