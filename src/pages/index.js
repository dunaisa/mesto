import { Card } from "../components/Card.js";

import { config, FormValidator } from "../components/FormValidator.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { UserInfo } from "../components/UserInfo.js";

import { initialCards, popupEditFormOpenBtn, popupAddFormOpenBtn, popupFormProfile, popupFormAddPlace, profileConfiguration, cardContainerSelector, popupEditProfileSelector, popupAddPlaceSelector, popupWithImgConfig, popupOpenPicSelector } from "../utils/constants.js";

import "../pages/index.css";

import { Api } from "../components/API.js"



const popupWithImage = new PopupWithImage(popupWithImgConfig, popupOpenPicSelector);

popupWithImage.setEventListeners();

//Вернули карточку

const createCard = (item) => {
  const card = new Card(item.name, item.link, "#template-elements", popupWithImage.open);
  return card.generateCard();
};

//Экземпляр контейнера

const cardList = new Section({
  renderer: createCard,
},
  cardContainerSelector
);

//Функция добаления карточки

const handleCardSubmit = (item) => {
  cardList.addItem(item);
};

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

//Загрузка карточек с сервера


/*
fetch('https://mesto.nomoreparties.co/v1/cohort-45/cards', {
  method: 'GET',
  headers: {
    authorization: 'bfc6d56e-7e9e-491a-a278-c2e6d08bdc0b'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  })

//Загрузка инфо о пользователе с сервера
function getImages() {
  fetch('https://nomoreparties.co/v1/cohort-45/users/me', {
    method: 'GET',
    headers: {
      authorization: 'bfc6d56e-7e9e-491a-a278-c2e6d08bdc0b'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
}

getImages();

//Редактирование профиля

fetch('https://mesto.nomoreparties.co/v1/cohort-45/users/me ', {
  method: 'PATCH',
  headers: {
    authorization: 'bfc6d56e-7e9e-491a-a278-c2e6d08bdc0b',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Marie Skłodowska Curie',
    about: 'Physicist and Chemist'
  })
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

*/

//Загрузка карточек с сервера

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
  .then((item) => {
    cardList.renderItems(item);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

  //Добавление новой карточки на сервер

