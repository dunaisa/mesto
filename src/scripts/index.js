import { initialCards } from "./cards.js";

import { Card } from "./Card.js";

import { config, FormValidator } from "./FormValidator.js";

import { openPopup, closePopup } from "./utils.js";

import "../pages/index.css";

const popupEditFormOpenBtn = document.querySelector(".profile__edit-btn");
const popupAddFormOpenBtn = document.querySelector(".profile__add-btn");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const popupAddPlace = document.querySelector(".popup-add-place");

const popupFormProfile = document.querySelector(".popup-form_profile");
const lastAuthorDescription = document.querySelector(".profile__subtitle");
const inputAuthorDescription = popupFormProfile.querySelector(
  ".popup-form__text_type_description"
);
const lastAuthorName = document.querySelector(".profile__title");
const inputAuthorName = popupFormProfile.querySelector(
  ".popup-form__text_type_author-name"
);

const popupFormAddPlace = document.querySelector(".popup-form_place");
const inputAddPlaceName = popupFormAddPlace.querySelector(
  ".popup-form__text_type_place-name"
);
const inputAddPlaceReference = popupFormAddPlace.querySelector(
  ".popup-form__text_type_place-reference"
);

const popups = document.querySelectorAll(".popup");

//Добавление карточки на страницу из формы
const elements = document.querySelector(".elements");

function createCard(name, link, elementTemplate) {
  const card = new Card(name, link, elementTemplate);
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(cardElement) {
  elements.prepend(cardElement);
}

function handleAddCard(evt) {
  evt.preventDefault();
  renderCard(
    createCard(
      inputAddPlaceName.value,
      inputAddPlaceReference.value,
      "#template-elements"
    )
  );
  closePopup(popupAddPlace);
  evt.target.reset();
}

popupFormAddPlace.addEventListener("submit", handleAddCard);

// Цикл добавления карточки на страницу из коробки
initialCards.forEach((item) => {
  renderCard(createCard(item.name, item.link, "#template-elements"));
});

const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

//Универсальная функция закрытия любого попапа на оверлей и крестик

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-btn")) {
      closePopup(popup);
    }
  });
});

// Открыть попапы

popupEditFormOpenBtn.addEventListener("click", function (evt) {
  inputAuthorName.value = lastAuthorName.textContent;
  inputAuthorDescription.value = lastAuthorDescription.textContent;
  formValidators[popupFormProfile.name].cleanUpForm();
  openPopup(popupEditProfile);
});

popupAddFormOpenBtn.addEventListener("click", function (evt) {
  popupFormAddPlace.reset();
  formValidators[popupFormAddPlace.name].cleanUpForm();
  openPopup(popupAddPlace);
});

// Отправить на страницу новые данные из формы редaктирования профиля

popupFormProfile.addEventListener("submit", function (evt) {
  handleProfileFormSubmit(evt);
  closePopup(popupEditProfile);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
}
