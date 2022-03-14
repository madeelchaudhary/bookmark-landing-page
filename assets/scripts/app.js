const navToggler = document.querySelector(".nav-toggler");
const header = document.querySelector(".header");
function navToggleHandler(e) {
  header.classList.toggle("nav-show");
}
navToggler.addEventListener("click", navToggleHandler);

const navLinks = document.querySelectorAll(".nav-primary a");
function navLinkHandler() {
  if (header.classList.contains("nav-show")) {
    header.classList.remove("nav-show");
  }
}
navLinks.forEach((link) => {
  link.addEventListener("click", navLinkHandler);
});

const tabLinks = document.querySelectorAll(".tab-link");
function tabLinkHandler(e) {
  e.preventDefault();
  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });
  e.target.classList.add("active");

  const tabs = this.closest(
    ".tab-navigator-list"
  ).nextElementSibling.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const currentTabSelector = e.target.getAttribute("href");
  const currentTab = document.querySelector(currentTabSelector);
  currentTab.classList.add("active");
}
tabLinks.forEach((link) => {
  link.addEventListener("click", tabLinkHandler);
});

const faqOpener = document.querySelectorAll(".faq-header");

function faqOpenHandler() {
  const faqWrapperElement = this.closest(".faqs");
  const faqs = faqWrapperElement.querySelectorAll(".faq");
  faqs.forEach((faq) => {
    if (faq === this.closest(".faq")) {
      faq.classList.toggle("active");
    } else {
      faq.classList.remove("active");
    }
  });
}

faqOpener.forEach((elem) => {
  elem.addEventListener("click", faqOpenHandler);
});

const newsLetterForm = document.querySelector(".newsletter-form");

function showFormError(text, elem, addClassElem) {
  addClassElem.classList.add("invalid");
  elem.innerText = text;
  elem.style.display = "block";
}
function formHandler(e) {
  const emailField = newsLetterForm.querySelector("#user-mail");
  const message = emailField.nextElementSibling;

  if (emailField.value.length < 1) {
    showFormError(
      "Email field cannot be empty!",
      message,
      emailField.parentElement
    );
    e.preventDefault();
    return;
  }

  const emailReg = /^([A-Za-z])+([._-]?\w+)+@([A-Za-z])+([._-]?\w+)+\.\w+$/;
  if (!emailReg.test(emailField.value)) {
    showFormError(
      "Whoops, make sure it's an email",
      message,
      emailField.parentElement
    );
    e.preventDefault();
  }
}
newsLetterForm.addEventListener("submit", formHandler);
