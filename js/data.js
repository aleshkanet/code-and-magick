'use strict';

(function () {

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COUNT = 4;
  window.data = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYE_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  };
  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');

  function renderWizardsData(count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      var firstName = window.util.getRandomElement(FIRST_NAMES);
      var secondName = window.util.getRandomElement(SECOND_NAMES);
      var coatColor = window.util.getRandomElement(window.data.COAT_COLORS);
      var eyeColor = window.util.getRandomElement(window.data.EYE_COLORS);
      wizards.push({
        name: firstName + ' ' + secondName,
        coatColor: coatColor,
        eyeColor: eyeColor
      });
    }
    return wizards;
  }

  var renderWizard = function (wizardData) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');
    var wizard = similarWizardTemplate.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizard.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = wizardData.eyeColor;

    return wizard;
  };

  window.data.renderWizards = function () {
    var wizards = renderWizardsData(WIZARDS_COUNT);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
