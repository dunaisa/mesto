import { Card } from "../components/Card.js";

import { config, FormValidator } from "../components/FormValidator.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { UserInfo } from "../components/UserInfo.js";

import { initialCards, popupEditFormOpenBtn, popupAddFormOpenBtn, popupFormProfile, popupFormAddPlace, profileConfiguration, cardContainerSelector, popupEditProfileSelector, popupAddPlaceSelector, popupWithImgConfig, popupOpenPicSelector } from "../utils/constants.js";

import "../pages/index.css";

const popupWithImage = new PopupWithImage(popupWithImgConfig, popupOpenPicSelector);

popupWithImage.setEventListeners();

//Вернули карточку

const createCard = (item) => {
  const card = new Card(item.name, item.link, "#template-elements", popupWithImage.open);
  return card.generateCard();
};

//Экземпляр контейнера

const cardList = new Section({
  items: initialCards,
  renderer: createCard,
},
  cardContainerSelector
);

//Функция добаления карточки

const handleCardSubmit = (item) => {
  cardList.addItem(item);
};

//Наполнили контейнер

cardList.renderItems();

///////////Попап с добавлением карточки

const handleOpenAddForm = () => {
  formValidators[popupFormAddPlace.name].cleanUpForm();
  popupAddImageForm.open();
};

//Повесели слушатель на кнопку открытия попапа

popupAddFormOpenBtn.addEventListener('click', handleOpenAddForm);

// Создали экземпляр класса попапа с добавлением карточки

const popupAddImageForm = new PopupWithForm(
  popupAddPlaceSelector,
  handleCardSubmit,
);

//Добавили обработчик событий

popupAddImageForm.setEventListeners();

/////////////////UserProfile

const handleOpenEditProfile = () => {
  formValidators[popupFormProfile.name].cleanUpForm();
  profilePopup.open();
};

//Повесели слушатель на кнопку открытия попапа

popupEditFormOpenBtn.addEventListener('click', handleOpenEditProfile);

const userProfile = new UserInfo(profileConfiguration);
userProfile.setUserInfo;

function handleInfoFormSubmit(data) {
  userProfile.setUserInfo(data);
};

const profilePopup = new PopupWithForm(
  popupEditProfileSelector,
  handleInfoFormSubmit,
  userProfile.getUserInfo);

profilePopup.setEventListeners();

const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});