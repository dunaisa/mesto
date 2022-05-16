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
  switchVisibilityOfPopup(popupEditProfile);
});

popupAddFormCloseBtn.addEventListener('click', function (evt) {
  switchVisibilityOfPopup(popupAddPlace);
});

popupOpenPicCloseBtn.addEventListener('click', function (evt) {
  switchVisibilityOfPopup(popupOpenPic);
});

// Закрыть попапы кликом в любую точку вне попапа

popupEditProfile.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    switchVisibilityOfPopup(popupEditProfile);
  }
});

popupAddPlace.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    switchVisibilityOfPopup(popupAddPlace);
  }
});

popupOpenPic.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    switchVisibilityOfPopup(popupOpenPic);
  }
});

// Открыть попапы

popupEditFormOpenBtn.addEventListener('click', function (evt) {
  inputAuthorName.value = lastAuthorName.textContent;
  inputAuthorDescription.value = lastAuthorDescription.textContent;
  switchVisibilityOfPopup(popupEditProfile);
});

popupAddFormOpenBtn.addEventListener('click', function (evt) {
  switchVisibilityOfPopup(popupAddPlace);
});

// Универсальная форма открытия/закрытия попапов
function switchVisibilityOfPopup(popupObject) {
  popupObject.classList.toggle('popup_opened');
};

// Отправить на страницу новые данные из формы редaктирования профиля

popupFormProfile.addEventListener('submit', function (evt) {
  formSubmitHandler(evt);
  switchVisibilityOfPopup(popupEditProfile);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
};

const handleSwitchLikePost = (evt) => {
  evt.target.classList.toggle('element__like-btn_active');
};

const handleDeletePost = (evt) => {
  evt.target.closest('.element').remove();
};

// Функция открытия фото во весь экран

function handleOpenImage(evt) {
  imagePopup.src = evt.target.src;
  imagePopup.alt = evt.target.alt;
  figcaptionImagePopup.textContent = evt.target.alt;
  switchVisibilityOfPopup(popupOpenPic);
};

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#template-elements').content;

//Функция добавления карточек на страницу общая
function createElement(item) {

  const element = elementTemplate.cloneNode(true);
  const name = item.name;
  const link = item.link;

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

  return element;
};

function renderCard(card) {
  elements.prepend(card);
}

initialCards.forEach((item) => {
  const card = createElement(item);
  renderCard(card);
});

function handleCreateCard(evt) {
  evt.preventDefault();
  const newCard = createElement({ link: inputAddPlaceReference.value, name: inputAddPlaceName.value });
  renderCard(newCard);
  switchVisibilityOfPopup(popupAddPlace);
  evt.target.reset();
};

popupFormAddPlace.addEventListener('submit', handleCreateCard);

