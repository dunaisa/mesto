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

export const popupFormProfile = document.querySelector(".popup-form_profile");

export const popupFormAddPlace = document.querySelector(".popup-form_place");


export const cardContainerSelector = '.elements';

export const popupEditProfileSelector = '.popup-edit-profile';

export const popupAddPlaceSelector = '.popup-add-place';

export const popupOpenPicSelector = '.popup-open-pic';

export const profileConfiguration = {
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__subtitle',
}

export const popupWithImgConfig = {
  image: '.popup__image-figure',
  caption: '.popup__image-figcaption',
}
