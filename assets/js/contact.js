const formContact = document.getElementById("form-contact");
const emailError = document.getElementById("emailError");

formContact.addEventListener("submit", (e) => {
  let name = formContact.elements.name.value;
  let email = formContact.elements.email.value;
  let subject = formContact.elements.subject.value;
  let message = formContact.elements.message.value;

  e.preventDefault();
  if (!isEmail(email)) {
    emailError.innerHTML = "Please input a valid email";
    return;
  } else if (isEmail(email)) {
    emailError.innerHTML = "";
  }

  formContact.reset();
  window.location.href = "#";
});

const isEmail = (email) => {
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return regex.test(email);
};
