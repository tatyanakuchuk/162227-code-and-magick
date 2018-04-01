'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 17;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BEGIN_OF_GIST_X = 150;
var BEGIN_OF_GIST_Y = CLOUD_HEIGHT - BAR_HEIGHT - GAP * 2 - FONT_GAP;
var textPos = CLOUD_HEIGHT - GAP;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';


  ctx.fillText('Ура вы победили!', 130, 45);
  ctx.fillText('Список результатов:', 130, 65);

  // var names = ['Вы', 'Вася', 'Катя', 'Лена'];

  // ctx.fillText('Вы', BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 0, textPos);
  // ctx.fillRect(BEGIN_OF_GIST_X, BEGIN_OF_GIST_Y, BAR_WIDTH, BAR_HEIGHT);
  //
  // ctx.fillText('Вася', BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 1, textPos);
  // ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 1, BEGIN_OF_GIST_Y, BAR_WIDTH, BAR_HEIGHT);
  //
  // ctx.fillText('Катя', BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 2, textPos);
  // ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 2, BEGIN_OF_GIST_Y, BAR_WIDTH, BAR_HEIGHT);
  //
  // ctx.fillText('Лена', BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 3, textPos);
  // ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * 3, BEGIN_OF_GIST_Y, BAR_WIDTH, BAR_HEIGHT);

  names.length = 4;
  times.length = 4;

  var maxTime = getMaxElement(times);

  var you = names.indexOf("Вы");

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * i, textPos);

    ctx.fillStyle = 'rgba(0, 0, 139, ' + Math.random() + ')';
    ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - GAP * 2 - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * you, CLOUD_HEIGHT - BAR_HEIGHT * times[you] / maxTime - GAP * 2 - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * times[you] / maxTime);

  }
};
