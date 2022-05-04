const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-btn');
const closeEditForm = document.querySelector('.popup__close-btn');
const popupForm = document.querySelector('.popup-form');
const lastAuthorDescription = document.querySelector('.profile__subtitle');
const inputAuthorDescription = popupForm.querySelector('.popup-form__text_type_description');


function openEditForm() {
  const lastAuthorName = document.querySelector('.profile__title');
  const inputAuthorName = popupForm.querySelector('.popup-form__text_type_author-name');
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
  const lastAuthorName = document.querySelector('.profile__title');
  const inputAuthorName = popupForm.querySelector('.popup-form__text_type_author-name');
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
  closeEditFormBtn();
};

popupForm.addEventListener('submit', formSubmitHandler);




