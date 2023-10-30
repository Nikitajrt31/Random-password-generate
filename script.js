'use strict';

const passwordBoxEl = document.getElementById('Password');

const length = 16;

const upperCase = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '~`! @#$%^&*()_-+={[}]|:<,>.?/';

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = '';

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBoxEl.value = password;
}

document.querySelector('#button').addEventListener('click', createPassword);

//Copy Password function -

function copyPassword() {
  passwordBoxEl.select();
  document.execCommand('copy');
}

document.querySelector('#img').addEventListener('click', copyPassword);
