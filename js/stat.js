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
var TEXT_POS = CLOUD_HEIGHT - GAP;


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

var doFillStyle = function(ctx, color) {
    ctx.fillStyle = color;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';

  ctx.fillText('Ура вы победили!', 130, 45);
  ctx.fillText('Список результатов:', 130, 65);

  var maxTime = getMaxElement(times);

  var you = names.indexOf("Вы");

  for (var i = 0; i < names.length; i++) {
    doFillStyle(ctx, '#000');
    ctx.fillText(names[i], BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_POS);
    doFillStyle(ctx, 'rgba(0, 0, 139, ' + Math.random() + ')');
    ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - GAP * 2 - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    doFillStyle(ctx, 'rgba(255, 0, 0, 1)');
    ctx.fillRect(BEGIN_OF_GIST_X + (BAR_WIDTH + BAR_GAP) * you, CLOUD_HEIGHT - BAR_HEIGHT * times[you] / maxTime - GAP * 2 - FONT_GAP, BAR_WIDTH, BAR_HEIGHT * times[you] / maxTime);
  }
};
