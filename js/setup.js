'use strict';

(function () {

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_COUNT = 4;

  function getRandomElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  function renderWizardsData(count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards.push({
        name: getRandomElement(FIRST_NAMES) + ' ' + getRandomElement(SECOND_NAMES),
        coatColor: getRandomElement(COAT_COLORS),
        eyeColor: getRandomElement(EYE_COLORS)
      });
    }
    return wizards;
  }

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  };

  function renderSimilarWizards(arr, el) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    el.appendChild(fragment);
  }

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var wizards = renderWizardsData(WIZARDS_COUNT);
  renderSimilarWizards(wizards, similarListElement);


  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  function showSetup() {
    userDialog.classList.remove('hidden');
  }
  function hideSetup() {
    userDialog.classList.add('hidden');
  }

  var setupOpen = document.querySelector('.setup-open');
  setupOpen.addEventListener('click', showSetup);
  setupOpen.addEventListener('keydown', function (e) {
    if (setupOpen.children[0] === document.activeElement && e.keyCode === 13) {
      showSetup();
    }
  });

  var setupClose = document.querySelector('.setup-close');
  setupClose.addEventListener('click', hideSetup);
  setupClose.addEventListener('keydown', function (e) {
    if (setupClose === document.activeElement && e.keyCode === 13) {
      hideSetup();
    }
  });
  document.addEventListener('keydown', function (evt) {
    var userNameField = document.querySelector('.setup-user-name');
    if (evt.keyCode === 27) {
      if (!userDialog.classList.contains('hidden') && userNameField !== document.activeElement) {
        hideSetup();
      }
    }
  });

  var wizardSVG = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSVG.querySelector('.wizard-coat');
  wizardCoat.addEventListener('click', function () {
    var color = getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = color;
    document.querySelector('.setup-wizard-appearance input[name=coat-color]').value = color;
  });

  var wizardEyes = wizardSVG.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    var color = getRandomElement(EYE_COLORS);
    wizardEyes.style.fill = color;
    document.querySelector('.setup-wizard-appearance input[name=eyes-color]').value = color;
  });

  var fireBall = document.querySelector('.setup-fireball-wrap');
  fireBall.addEventListener('click', function () {
    var fireBallColor = getRandomElement(FIREBALL_COLORS);
    fireBall.style.background = fireBallColor;
    document.querySelector('.setup-fireball-wrap input[name=fireball-color]').value = fireBallColor;
  });
}());
