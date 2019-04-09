'use strict';

(function () {
  window.util = {
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

  };
})();
