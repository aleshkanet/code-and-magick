'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var userNameField = document.querySelector('.setup-user-name');
  var wizardSVG = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSVG.querySelector('.wizard-coat');
  var initSetupX; var initSetupY;

  function showSetup() {
    setup.classList.remove('hidden');
    initSetupX = setup.offsetLeft;
    initSetupY = setup.offsetTop;
  }
  function hideSetup() {
    setup.classList.add('hidden');
    setup.style.top = initSetupY + 'px';
    setup.style.left = initSetupX + 'px';
  }
  function isFocused(element) {
    return element === document.activeElement;
  }
  function isEscKey(evt) {
    return evt.keyCode === 27;
  }
  function isEnterKey(evt) {
    return evt.keyCode === 13;
  }

  setupOpen.addEventListener('click', showSetup);
  setupClose.addEventListener('click', hideSetup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (isFocused(setupOpenIcon) && isEnterKey(evt)) {
      showSetup();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (isFocused(setupClose) && isEnterKey(evt)) {
      hideSetup();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (isEscKey(evt)) {
      if (!setup.classList.contains('hidden') && !isFocused(userNameField)) {
        hideSetup();
      }
    }
  });

  wizardCoat.addEventListener('click', function () {
    var color = window.util.getRandomElement(window.data.COAT_COLORS);
    wizardCoat.style.fill = color;
    document.querySelector('.setup-wizard-appearance input[name=coat-color]').value = color;
  });

  var wizardEyes = wizardSVG.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandomElement(window.data.EYE_COLORS);
    wizardEyes.style.fill = color;
    document.querySelector('.setup-wizard-appearance input[name=eyes-color]').value = color;
  });

  var fireBall = document.querySelector('.setup-fireball-wrap');
  fireBall.addEventListener('click', function () {
    var fireBallColor = window.util.getRandomElement(window.data.FIREBALL_COLORS);
    fireBall.style.background = fireBallColor;
    document.querySelector('.setup-fireball-wrap input[name=fireball-color]').value = fireBallColor;
  });

  window.data.renderWizards();
}());
