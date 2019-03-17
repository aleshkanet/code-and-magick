'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_COLOR = 'white';

  var SHADOW_SHIFT_X = 10;
  var SHADOW_SHIFT_Y = 10;
  var SHADOW_X = CLOUD_X + SHADOW_SHIFT_X;
  var SHADOW_Y = CLOUD_Y + SHADOW_SHIFT_Y;
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

  var TEXT_COLOR = 'black';

  var HISTOGRAM_HEIGHT = 150;
  var HISTOGRAM_X = 120;
  var HISTOGRAM_Y = 95;
  var HISTOGRAM_COLUMN_WIDTH = 40;
  var HISTOGRAM_COLUMN_GAP = 50;
  var HISTOGRAM_NAME_Y = 265;

  var USER_NAME = 'Вы';
  var USER_COLOR = 'rgba(255, 0, 0, 1)';

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function renderTitle(ctx) {
    var textX = 120;
    var textY = 40;
    var textGap = 20;

    ctx.font = '16px PT Mono';
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText('Ура вы победили!', textX, textY);
    ctx.fillText('Список результатов:', textX, textY + textGap);
  }

  function getMaxElement(arr) {
    return Math.max.apply(null, arr);
  }

  function getRandomBlue() {
    return 'rgba(10, 135, 255, ' + (Math.random() + 0.1).toFixed(2) + ')';
  }

  function renderTime(ctx, time, timeX, timeY) {
    var textGap = 10;
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(time, timeX, timeY - textGap);
  }

  function renderName(ctx, name, nameX, nameY) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(name, nameX, nameY);
  }

  function renderHistogram(ctx, names, times) {

    var maxTime = Math.floor(getMaxElement(times));

    names.forEach(function (name, i) {
      var currentTime = Math.floor(times[i]);
      var columnHeight = HISTOGRAM_HEIGHT * currentTime / maxTime;
      var columnX = HISTOGRAM_X + (HISTOGRAM_COLUMN_GAP + HISTOGRAM_COLUMN_WIDTH) * i;
      var columnY = HISTOGRAM_Y + HISTOGRAM_HEIGHT - columnHeight;

      ctx.fillStyle = name === USER_NAME ? USER_COLOR : getRandomBlue();
      ctx.fillRect(columnX, columnY, HISTOGRAM_COLUMN_WIDTH, columnHeight);
      renderTime(ctx, currentTime, columnX, columnY);
      renderName(ctx, name, columnX, HISTOGRAM_NAME_Y);
    });
  }

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, SHADOW_X, SHADOW_Y, SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
    renderTitle(ctx);
    renderHistogram(ctx, names, times);
  };

})();
