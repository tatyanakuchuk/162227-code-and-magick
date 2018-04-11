'use strict';

document.querySelector('.setup').classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Случайный элемент массива
var getRandomIndex = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Шаблон
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var similarWizard = document.querySelector('.setup-similar-list');


var getNewElem = function () {
  var newElem = template.cloneNode(true);
  newElem.querySelector('.setup-similar-label').textContent = getRandomIndex(firstNames) + ' ' + getRandomIndex(secondNames);
  newElem.querySelector('.wizard-coat').style.fill = getRandomIndex(coatColor);
  newElem.querySelector('.wizard-eyes').style.fill = getRandomIndex(eyesColor);
  fragment.appendChild(newElem);
  similarWizard.appendChild(fragment);
};

for (var i = 0; i < 4; i++) {
  getNewElem();
}

document.querySelector('.setup-similar').classList.remove('hidden');
