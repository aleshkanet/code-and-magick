'use strict';

(function () {

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
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


  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}());
