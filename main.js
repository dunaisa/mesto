const popup = document.querySelector('.popup');
const editButton = document.querySelector('.edit-btn');
const closeEditForm = document.querySelector('.popup-close-btn');
const saveEditForm = document.querySelector('.popup-form__btn');
const popupForm = document.querySelector('.popup-form');
const lastAuthorDescription = document.querySelector('.profile__subtitle');
const inputAuthorDescription = popupForm.querySelector('.form-input__description');


const lastAuthorName = document.querySelector('.profile__title');
const inputAuthorName = popupForm.querySelector('.form-input__author');
inputAuthorName.value = lastAuthorName.textContent;
inputAuthorDescription.value = lastAuthorDescription.textContent;

editButton.addEventListener('click', function () {
  let popup = document.querySelector('.popup');
  popup.classList.add('popup_opened');
})

closeEditForm.addEventListener('click', function () {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup_opened');
  inputAuthorName.value = lastAuthorName.textContent;
  inputAuthorDescription.value = lastAuthorDescription.textContent;
})

popupForm.addEventListener('submit', function formSubmitHandler(evt) {
  evt.preventDefault();
  lastAuthorName.textContent = inputAuthorName.value;
  lastAuthorDescription.textContent = inputAuthorDescription.value;
  popup.classList.remove('popup_opened');
});




