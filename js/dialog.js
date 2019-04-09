'use strict';
(function () {

  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      // Chrome bug... mousemove fired when mousedown
      if (shift.x !== 0 && shift.y !== 0) {
        dragged = true;
      }
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (mouseEvt) {
      mouseEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var preventUploadFile = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', preventUploadFile);
        };
      }
      dialogHandle.addEventListener('click', preventUploadFile);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
