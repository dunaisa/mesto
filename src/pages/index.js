import { initialCards } from "../utils/constants.js";

import { Card } from "../components/Card.js";

import { config, FormValidator } from "../components/FormValidator.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { UserInfo } from "../components/UserInfo.js";

import { popupEditFormOpenBtn, popupAddFormOpenBtn, popupFormProfile, popupFormAddPlace, profileConfiguration, cardContainerSelector, popupEditProfileSelector, popupAddPlaceSelector, popupWithImgConfig, popupOpenPicSelector } from "../utils/constants.js";

import "../pages/index.css";

const popupWithImage = new PopupWithImage(popupWithImgConfig, popupOpenPicSelector);

popupWithImage.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, "#template-elements", popupWithImage.open.bind(popupWithImage));
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
},
  cardContainerSelector
);

cardList.renderItems();

///////////Попап с добавлением карточки

const handleOpenAddForm = () => {
  formValidators[popupFormAddPlace.name].cleanUpForm();
  popupAddImageForm.open();
}

//Повесели слушатель на кнопку открытия попапа

popupAddFormOpenBtn.addEventListener('click', handleOpenAddForm);

// Создали и наполнили экземпляр класса попапа с добавлением карточки

const handleCardFormSubmit = (item) => {
  const imageCard = new Card(item.name, item.link, "#template-elements",
    popupWithImage.open.bind(popupWithImage));
  cardList.addItem(imageCard.generateCard());
  popupAddImageForm.close();
}

const popupAddImageForm = new PopupWithForm(
  popupAddPlaceSelector,
  handleCardFormSubmit,
);

//Добавили обработчик событий

popupAddImageForm.setEventListeners();

/////////////////////UserProfile

const handleOpenEditProfile = () => {
  formValidators[popupFormProfile.name].cleanUpForm();
  profilePopup.open();
}

//Повесели слушатель на кнопку открытия попапа

popupEditFormOpenBtn.addEventListener('click', handleOpenEditProfile);


const userProfile = new UserInfo(profileConfiguration);
userProfile.setUserInfo({
  name: 'Жак-Ив Кусто',
  info: 'Исследователь океана',
});

function handleInfoFormSubmit(data) {
  userProfile.setUserInfo(data);
}

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