// Функциональность для редактирования профиля

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-btn');
const closeEditForm = document.querySelector('.popup__close-btn');
const popupFormProfile = document.querySelector('.popup-form_profile');
const lastAuthorDescription = document.querySelector('.profile__subtitle');
const inputAuthorDescription = popupFormProfile.querySelector('.popup-form__text_type_description');
const lastAuthorName = document.querySelector('.profile__title');
const inputAuthorName = popupFormProfile.querySelector('.popup-form__text_type_author-name');


function openEditForm() {
  inputAuthorName.value = lastAuthorName.textContent;
  inputAuthorDescription.value = lastAuthorDescription.textContent;
  popup.classList.add('popup_opened');
};

editButton.addEventListener('click', openEditForm);

function closeEditFormBtn() {
  popup.classList.remove('popup_opened');
};

closeEditForm.addEventListener('click', closeEditFormBtn);

function formSubmitHandler(evt) {
  evt.preventDefault();
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
  closeEditFormBtn();
};

popupFormProfile.addEventListener('submit', formSubmitHandler);

// Функциональность для добавления фото - открытие формы (попапа) добавления

const popupAddPlace = document.querySelector('.popup_add-place');
const addButton = document.querySelector('.profile__add-btn');
const popupFormPlace = document.querySelector('.popup-form_place');
const closeAddForm = document.querySelector('.popup__close-btn_type_add-place');

function openPlaceForm() {
  popupAddPlace.classList.add('popup_opened');
};

addButton.addEventListener('click', openPlaceForm);

function closeAddFormBtn() {
  popupAddPlace.classList.remove('popup_opened');
};

closeAddForm.addEventListener('click', closeAddFormBtn);

/*
const inputPlaceName = popupFormPlace.querySelector('.popup-form__text_type_place-name');
const inputPlaceReference = popupFormPlace.querySelector('.popup-form__text_type_place-reference');
*/


// Добавление карточки из коробки

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
    name: 'Домбай',
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

// Добавление лайка

const handleSwitchLikePost = (evt) => {
  evt.target.classList.toggle('element__like-btn_active');
};


// Удаление карточки

const handleDeletePost = (evt) => {
  evt.target.closest('.element').remove();
};


const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#template-elements').content;

initialCards.forEach(({ name, link }) => {
  const element = elementTemplate.cloneNode(true);

  elementPlaceName = element.querySelector('.element__info-heading');
  elementPlaceName.textContent = name;

  const elementImage = element.querySelector('.element__image');
  elementImage.alt = name;
  elementImage.src = link;

  const elementLikeBtn = element.querySelector('.element__like-btn');
  elementLikeBtn.addEventListener('click', handleSwitchLikePost);

  const elementDeleteBtn = element.querySelector('.element__delete-btn');
  elementDeleteBtn.addEventListener('click', handleDeletePost);

  elements.prepend(element);
});