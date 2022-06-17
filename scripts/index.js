import { initialCards } from "./cards.js";

import { Card } from "./Card.js";

import { config, FormValidator } from "./FormValidator.js";

export const imagePopup = document.querySelector('.popup__image-figure');
export const figcaptionImagePopup = document.querySelector('.popup__image-figcaption');

const popupEditFormOpenBtn = document.querySelector('.profile__edit-btn');
const popupAddFormOpenBtn = document.querySelector('.profile__add-btn');
const popupEditProfile = document.querySelector('.popup-edit-profile');
export const popupAddPlace = document.querySelector('.popup-add-place');

const popupFormProfile = document.querySelector('.popup-form_profile');
const lastAuthorDescription = document.querySelector('.profile__subtitle');
const inputAuthorDescription = popupFormProfile.querySelector('.popup-form__text_type_description');
const lastAuthorName = document.querySelector('.profile__title');
const inputAuthorName = popupFormProfile.querySelector('.popup-form__text_type_author-name');

export const popupFormAddPlace = document.querySelector('.popup-form_place');
export const inputAddPlaceName = popupFormAddPlace.querySelector('.popup-form__text_type_place-name');
export const inputAddPlaceReference = popupFormAddPlace.querySelector('.popup-form__text_type_place-reference');

export const popupOpenPic = document.querySelector('.popup-open-pic');

const popups = document.querySelectorAll('.popup');
const popupCreateBtn = popupAddPlace.querySelector('.popup-form__btn');
const popupSaveBtn = popupEditProfile.querySelector('.popup-form__btn');


//Универсальная функция открытия/закрытия попапа

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

//Универсальная функция закрытия/открытия любого попапа на оверлей и крестик

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    };
  });
});

//Функция закрытия любого попапа на ESC

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

// Открыть попапы

popupEditFormOpenBtn.addEventListener('click', function (evt) {
  inputAuthorName.value = lastAuthorName.textContent;
  inputAuthorDescription.value = lastAuthorDescription.textContent;
  openPopup(popupEditProfile);
  popupSaveBtn.removeAttribute("disabled");
  popupSaveBtn.classList.remove('popup-form__btn_inactive');
});

popupAddFormOpenBtn.addEventListener('click', function (evt) {
  openPopup(popupAddPlace);
});

//Функция деактивации кнопки сохранить в попапе

function disableCreateBtn() {
  popupCreateBtn.classList.add('popup-form__btn_inactive');
  popupCreateBtn.setAttribute("disabled", "disabled");
};

// Отправить на страницу новые данные из формы редaктирования профиля

popupFormProfile.addEventListener('submit', function (evt) {
  handleProfileFormSubmit(evt);
  closePopup(popupEditProfile);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
};

//Добавление карточки на страницу из формы
const elements = document.querySelector('.elements');

function renderCard(cardElement) {
  elements.prepend(cardElement);
};

function handleCreateCard(evt) {
  evt.preventDefault();
  const card = new Card(inputAddPlaceName.value, inputAddPlaceReference.value, "#template-elements");
  const cardElement = card.generateCard();
  renderCard(cardElement);
  closePopup(popupAddPlace);
  disableCreateBtn();
  evt.target.reset();
};

popupFormAddPlace.addEventListener('submit', handleCreateCard);


// Цикл добавления карточки на страницу из коробки
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, "#template-elements");
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});

const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});






