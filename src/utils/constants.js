import { Api } from "../components/API.js";

export const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Пятигорск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Канада',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Франция',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Германия',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupEditFormOpenBtn = document.querySelector(".profile__edit-btn");
export const popupAddFormOpenBtn = document.querySelector(".profile__add-btn");
export const popupChangePhotoOpenBtn = document.querySelector(".profile__avatar-btn");

export const popupFormProfile = document.querySelector(".popup-form_profile");

export const popupFormAddPlace = document.querySelector(".popup-form_place");

export const popupFormAvatar = document.querySelector(".popup-form_avatar");

export const cardContainerSelector = '.elements';

export const popupEditProfileSelector = '.popup-edit-profile';

export const popupAddPlaceSelector = '.popup-add-place';

export const popupChangePhotoSelector = '.popup-change-photo';

export const popupOpenPicSelector = '.popup-open-pic';

export const popupOpenConfirmSelector = '.popup-confirm-delete';

export const profileConfiguration = {
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__avatar',
}

export const popupWithImgConfig = {
  image: '.popup__image-figure',
  caption: '.popup__image-figcaption',
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
});

export const confirmDeleteBtnCaptions = {
  defaultCaption: 'Да',
  activeCaption: 'Удаление...',
}

export const btnCaptions = {
  defaultCaption: 'Схранить',
  activeCaption: 'Сохранение...',
}