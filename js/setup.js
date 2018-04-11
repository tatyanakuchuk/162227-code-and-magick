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

// Объект
var obj = {
  name: function () {
    var name = getRandomIndex(firstNames);
    var name2 = getRandomIndex(secondNames);
    return name + ' ' + name2;
  },
  coatColor: function () {
    var coat = getRandomIndex(coatColor);
    return coat;
  },
  eyesColor: function () {
    var eyes = getRandomIndex(eyesColor);
    return eyes;
  }
};

// Массив
var array = [];
for (var i = 1; i <= 4; i++) {
  array.push(obj);
}

// Шаблон
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var similarWizard = document.querySelector('.setup-similar-list');


var getNewElem = function () {
  var newElem = template.cloneNode(true);
  newElem.querySelector('.setup-similar-label').textContent = obj.name();
  newElem.querySelector('.wizard-coat').style.fill = obj.coatColor();
  newElem.querySelector('.wizard-eyes').style.fill = obj.eyesColor();
  fragment.appendChild(newElem);
  similarWizard.appendChild(fragment);
};

for (i = 0; i < 4; i++) {
  getNewElem();
}

document.querySelector('.setup-similar').classList.remove('hidden');
