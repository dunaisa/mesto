const popup = document.querySelector('.popup');
const popupEditFormOpenBtn = document.querySelector('.profile__edit-btn');
const popupAddFormOpenBtn = document.querySelector('.profile__add-btn');
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileCloseBtn = document.querySelector('.popup__close-btn');
const popupAddFormCloseBtn = document.querySelector('.popup__close-btn_type_add-place');
const popupAddPlace = document.querySelector('.popup-add-place');

const popupFormProfile = document.querySelector('.popup-form_profile');
const lastAuthorDescription = document.querySelector('.profile__subtitle');
const inputAuthorDescription = popupFormProfile.querySelector('.popup-form__text_type_description');
const lastAuthorName = document.querySelector('.profile__title');
const inputAuthorName = popupFormProfile.querySelector('.popup-form__text_type_author-name');

const popupFormAddPlace = document.querySelector('.popup-form_place');
const inputAddPlaceName = popupFormAddPlace.querySelector('.popup-form__text_type_place-name');
const inputAddPlaceReference = popupFormAddPlace.querySelector('.popup-form__text_type_place-reference');


const popupOpenPicCloseBtn = document.querySelector('.popup__close-btn_type_open-pic');
const popupOpenPic = document.querySelector('.popup-open-pic');
const imagePopup = popupOpenPic.querySelector('.popup__image-figure');
const figcaptionImagePopup = popupOpenPic.querySelector('.popup__image-figcaption');


// Закрыть попапы на крестик

popupEditProfileCloseBtn.addEventListener('click', function (evt) {
  evt.target.closest('.popup').classList.toggle('popup_opened');
});

popupAddFormCloseBtn.addEventListener('click', function (evt) {
  evt.target.closest('.popup').classList.toggle('popup_opened');
});

popupOpenPicCloseBtn.addEventListener('click', function (evt) {
  evt.target.closest('.popup').classList.toggle('popup_opened');
});

// Закрыть попапы кликом в любую точку вне попапа

popupEditProfile.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    openPopup(popupEditProfile);
  }
});

popupAddPlace.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    openPopup(popupAddPlace);
  }
});

popupOpenPic.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    openPopup(popupOpenPic);
  }
});


// Открыть попапы

popupEditFormOpenBtn.addEventListener('click', function (evt) {
  inputAuthorName.value = lastAuthorName.textContent;
  inputAuthorDescription.value = lastAuthorDescription.textContent;
  openPopup(popupEditProfile);
});

popupAddFormOpenBtn.addEventListener('click', function (evt) {
  openPopup(popupAddPlace);
});

// Универсальная форма открытия/закрытия попапов
function openPopup(popupObject) {
  popupObject.classList.toggle('popup_opened');
};

// Отправить на страницу новые данные из формы редaктирования профиля

popupFormProfile.addEventListener('submit', function (evt) {
  formSubmitHandler(evt);
  openPopup(popupEditProfile);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
};

const initialCards = [
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

const handleSwitchLikePost = (evt) => {
  evt.target.classList.toggle('element__like-btn_active');
};

const handleDeletePost = (evt) => {
  evt.target.closest('.element').remove();
};

initialCards.forEach(({ name, link }) => {
  addElement({ name, link })
});

// Функция открытия фото во весь экран

function handleOpenImage(evt) {
  imagePopup.src = evt.target.src;
  imagePopup.alt = evt.target.alt;
  figcaptionImagePopup.textContent = evt.target.alt;
  openPopup(popupOpenPic);
};



//Функция добавления карточек на страницу общая
function addElement({ name, link }) {
  const elements = document.querySelector('.elements');
  const elementTemplate = document.querySelector('#template-elements').content;
  const element = elementTemplate.cloneNode(true);

  elementPlaceName = element.querySelector('.element__info-heading');
  elementPlaceName.textContent = name;

  const elementImage = element.querySelector('.element__image');
  elementImage.alt = name;
  elementImage.src = link;

  elementImage.addEventListener('click', handleOpenImage);

  const elementLikeBtn = element.querySelector('.element__like-btn');
  elementLikeBtn.addEventListener('click', handleSwitchLikePost);

  const elementDeleteBtn = element.querySelector('.element__delete-btn');
  elementDeleteBtn.addEventListener('click', handleDeletePost);

  elements.prepend(element);
};

function handleCreateCard(evt) {
  evt.preventDefault();
  addElement({ link: inputAddPlaceReference.value, name: inputAddPlaceName.value });
  openPopup(popupAddPlace);
  evt.target.reset();
};

popupFormAddPlace.addEventListener('submit', handleCreateCard);