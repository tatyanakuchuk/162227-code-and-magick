'use strict';

document.querySelector('.setup').classList.remove('hidden');

var FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Случайный элемент массива
var getRandomIndex = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Шаблон
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var wizardList = document.querySelector('.setup-similar-list');

var getSimilarWizard = function () {
  var newElem = template.cloneNode(true);
  newElem.querySelector('.setup-similar-label').textContent = getRandomIndex(FIRST_NAMES) + ' ' + getRandomIndex(SECOND_NAMES);
  newElem.querySelector('.wizard-coat').style.fill = getRandomIndex(COAT_COLOR);
  newElem.querySelector('.wizard-eyes').style.fill = getRandomIndex(EYES_COLOR);
  fragment.appendChild(newElem);
};

for (var i = 1; i <= 4; i++) {
  getSimilarWizard();
}

wizardList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
