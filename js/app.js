

document.querySelectorAll('.dropdown').forEach((dropDownWrapper) => {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown-items__btn');
  const dropDownList = dropDownWrapper.querySelector('.dropdown-items__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown-items__item');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown-items__list--visible');
    this.classList.add('dropdown-items__btn--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach((listItem) => {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownList.classList.remove('dropdown-items__list--visible');
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', (e) => {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown-items__btn--active');
      dropDownList.classList.remove('dropdown-items__list--visible');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown-items__btn--active');
      dropDownList.classList.remove('dropdown-items__list--visible');
    }
  });
});

const question = document.querySelector('.sizes__question')
const hidden = document.querySelector('.sizes__visible-text')

question.addEventListener('mouseover', () => {
  hidden.classList.add('visible')
})
question.addEventListener('mouseout', () => {
  hidden.classList.remove('visible')
})