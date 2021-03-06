import { Card } from "../components/Card.js";

import { config, FormValidator } from "../components/FormValidator.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { UserInfo } from "../components/UserInfo.js";

import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

import { popupEditFormOpenBtn, popupAddFormOpenBtn, popupFormProfile, popupFormAddPlace, profileConfiguration, cardContainerSelector, popupEditProfileSelector, popupAddPlaceSelector, popupWithImgConfig, popupOpenPicSelector, popupChangePhotoOpenBtn, popupChangePhotoSelector, confirmDeleteBtnCaptions, btnCaptions, popupOpenConfirmSelector, popupFormAvatar, api } from "../utils/constants.js";

import "../pages/index.css";

const popupWithImage = new PopupWithImage(popupWithImgConfig, popupOpenPicSelector);

popupWithImage.setEventListeners();

//Функция добавления и удаления лайка

function handleLikeCard(cardId, isLiked, setLikesCallback) {
  api.toggleLike(cardId, isLiked)
    .then(({ likes }) => {
      setLikesCallback(likes)
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

//Попап с подтверждением удаления

const popupConfirmForm = new PopupWithConfirmation(
  popupOpenConfirmSelector,
  handleDeleteCard,
  confirmDeleteBtnCaptions
);

popupConfirmForm.setEventListeners();

function handleDeleteConfirm(cardId, removeCardCallback) {
  popupConfirmForm.open(cardId, removeCardCallback);
}

//Вернули карточку

const createCard = (item) => {
  const card = new Card(item, userProfile.getUserId(), "#template-elements", popupWithImage.open, handleDeleteConfirm, handleLikeCard);
  return card.generateCard();
};

//Функция удаления карточки

function handleDeleteCard(cardId, removeCardCallback, toggleBtnStatusCallback, closePopupCallback) {
  toggleBtnStatusCallback(true);
  api.deleteCard(cardId)
    .then(() => {
      removeCardCallback();
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      toggleBtnStatusCallback(false);
    })
}

//Экземпляр контейнера

const cardList = new Section({
  renderer: createCard,
},
  cardContainerSelector
);

//Добавление новой карточки на сервер и отображение на странице

const handleCardSubmit = (item, toggleBtnStatusCallback, closePopupCallback) => {
  toggleBtnStatusCallback(true);
  api.setInitialCards(item.name, item.link)
    .then((res) => {
      cardList.addItem(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      toggleBtnStatusCallback(false);
    })
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
  btnCaptions
);

//Добавили обработчик событий

popupAddImageForm.setEventListeners();

///////////Попап с добавлением юзер фото

const handleChangePhotoForm = () => {
  formValidators[popupFormAvatar.name].cleanUpForm();
  popupChangeAvatar.open();
};

popupChangePhotoOpenBtn.addEventListener('click', handleChangePhotoForm);

const userProfile = new UserInfo(profileConfiguration);

//Обновление аватара пользователя

const handleAvatarFormSubmit = (data, toggleBtnStatusCallback, closePopupCallback) => {
  toggleBtnStatusCallback(true);
  api.setAvatar({ avatar: data.link })
    .then((res) => {
      userProfile.setUserInfo(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      toggleBtnStatusCallback(false);
    })
};

//Экземпляр попапа/формы с обновлением аватара

const popupChangeAvatar = new PopupWithForm(
  popupChangePhotoSelector,
  handleAvatarFormSubmit,
  btnCaptions
);

popupChangeAvatar.setEventListeners();

/////////////////UserProfile

const handleOpenEditProfile = () => {

  formValidators[popupFormProfile.name].cleanUpForm();
  profilePopup.open();
};

//Повесели слушатель на кнопку открытия попапа

popupEditFormOpenBtn.addEventListener('click', handleOpenEditProfile);

// Редактирование профиля

const handleInfoFormSubmit = (data, toggleBtnStatusCallback, closePopupCallback) => {
  toggleBtnStatusCallback(true);
  api.setInfo({ name: data.name, about: data.about })
    .then((res) => {
      userProfile.setUserInfo(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      toggleBtnStatusCallback(false);
    })

};

const profilePopup = new PopupWithForm(
  popupEditProfileSelector,
  handleInfoFormSubmit,
  btnCaptions,
  userProfile.getUserInfo);

profilePopup.setEventListeners();

const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([data, item]) => {

    // Загрузка информации о пользователе с сервера
    userProfile.setUserInfo(data);

    //Загрузка карточек с сервера
    cardList.renderItems(item);

  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });