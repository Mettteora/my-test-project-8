const info = {
  email: ``,
  meassage: ``,
};
const inputMessage = document.querySelector(
  '.feedback-form textarea[name="message"]'
);
const inputEmail = document.querySelector('.feedback-form input[name="email"]');
const btn = document.querySelector('.feedback-form button[type="submit"]');
const form = document.querySelector(`feedback-form`);
console.log(inputMessage);

inputMessage.addEventListener(`input`, checkMessage);

inputEmail.addEventListener(`input`, checkEmail);

function checkMessage(e) {
  info.meassage = e.currentTarget.value;
  console.log(info);
}

function checkEmail(e) {
  info.email = e.currentTarget.value;
  console.log(info);
}

if (!info.email === ``) {
  console.log(`тут не пусто `);
}
