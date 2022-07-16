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

//Функция добаления карточки на страницу

// const handleCardSubmit = (item) => {
//   cardList.addItem(item);
// };

//Добавление новой карточки на сервер и отображение на странице

const handleCardSubmit = (item) => {

  api.setInitialCards(item.name, item.link)
    .then((res) => {
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

const userPhoto = new UserInfo(profileConfiguration);
//userPhoto.setUserPhoto;

//Обновление аватара пользователя

const handleAvatarFormSubmit = (data) => {
  api.setAvatar({ avatar: data.link })
    .then((res) => {
      userPhoto.setUserPhoto(res);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

};

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

const userProfile = new UserInfo(profileConfiguration);
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

//Попап удаления карточки



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

api.getInitialCards()
  .then((item) => {
    cardList.renderItems(item);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

// Загрузка информации о пользователе с сервера

api.getInfo()
  .then((data) => {
    userProfile.setUserInfo({ name: data.name, about: data.about })
    userPhoto.setUserPhoto({ avatar: data.avatar })
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

  //Попап с подтверждением удаления карточки

const handleConfirmFormOpen = () => {
  popupConfirmForm.open();
}

deleteCardBtn.addEventListener('click', handleConfirmFormOpen)

const popupConfirmForm = new PopupWithConfirmation(
  popupFormConfirmDlt
);

popupConfirmForm.setEventListeners();










