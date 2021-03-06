import { Card } from "../components/Card.js";

import { config, FormValidator } from "../components/FormValidator.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { UserInfo } from "../components/UserInfo.js";

import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

import { popupEditFormOpenBtn, popupAddFormOpenBtn, popupFormProfile, popupFormAddPlace, profileConfiguration, cardContainerSelector, popupEditProfileSelector, popupAddPlaceSelector, popupWithImgConfig, popupOpenPicSelector, popupChangePhotoOpenBtn, popupChangePhotoSelector, popupFormChangePhoto, deleteCardBtn, popupFormConfirmDlt, api } from "../utils/constants.js";

import "../pages/index.css";

const popupWithImage = new PopupWithImage(popupWithImgConfig, popupOpenPicSelector);

const userProfile = new UserInfo(profileConfiguration);

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

//Вернули карточку

const createCard = (item) => {
  const card = new Card(item, userProfile.getUserId(), "#template-elements", popupWithImage.open, handleDeleteCard, handleLikeCard);
  return card.generateCard();
};

//Экземпляр контейнера

const cardList = new Section({
  renderer: createCard,
},
  cardContainerSelector
);

//Функция удаления карточки

function handleDeleteCard(card) {
  api.deleteCard(card.getId())
    .then(() => {
      card.removeCard()
    })
    .catch((err) => {
      console.log(err)
    })
}

//Попап с подтверждением удаления карточки

function handleConfirmFormOpen() {
  popupConfirmForm.open();
}

deleteCardBtn.addEventListener('click', handleConfirmFormOpen)

const popupConfirmForm = new PopupWithConfirmation(
  popupFormConfirmDlt
);

popupConfirmForm.setEventListeners();


//Добавление новой карточки на сервер и отображение на странице

const handleCardSubmit = (item) => {

  api.setInitialCards(item.name, item.link)
    .then((res) => {
      console.dir(res)
      cardList.addItem(res);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
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

///////////Попап с добавлением юзер фото

const handleChangePhotoForm = () => {
  formValidators[popupFormChangePhoto.name].cleanUpForm();
  popupChangePhotoForm.open();
};

popupChangePhotoOpenBtn.addEventListener('click', handleChangePhotoForm);

//Обновление аватара пользователя

const handleAvatarFormSubmit = (data) => {
  api.setAvatar({ avatar: data.link })
    .then(userProfile.setUserInfo)
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

};

//Экземпляр попапа/формы с обновлением аватара

const popupChangePhotoForm = new PopupWithForm(
  popupChangePhotoSelector,
  handleAvatarFormSubmit,
);

popupChangePhotoForm.setEventListeners();


/////////////////UserProfile

const handleOpenEditProfile = () => {
  formValidators[popupFormProfile.name].cleanUpForm();
  profilePopup.open();
};

//Повесели слушатель на кнопку открытия попапа

popupEditFormOpenBtn.addEventListener('click', handleOpenEditProfile);


//userProfile.setUserInfo;

// Редактирование профиля

const handleInfoFormSubmit = (data) => {
  api.setInfo({ name: data.name, about: data.about })
    .then((res) => {
      userProfile.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

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

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([data, item]) => {
    console.dir(data)

    // Загрузка информации о пользователе с сервера
    userProfile.setUserInfo({ name: data.name, about: data.about, _id: data._id });
    userProfile.setUserInfo({ avatar: data.avatar });

    //Загрузка карточек с сервера
    cardList.renderItems(item);

  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });









