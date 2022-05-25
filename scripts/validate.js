const config = {
  formSelector: 'popup-form',
  inputSelector: 'popup-form__text',
  submitButtonSelector: 'popup-form__btn',
  inactiveButtonClass: 'popup-form__btn_inactive',
  inputErrorClass: 'popup-form__text_type_error',
  errorClass: 'popup-form__input-error_active'
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorModifier, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorModifier);
  errorElement.classList.add(errorSelector);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorModifier, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorModifier);
  errorElement.classList.remove(errorSelector);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorModifier, errorSelector) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorModifier, errorSelector);
  } else {
    hideInputError(formElement, inputElement, inputErrorModifier, errorSelector);
  };
};

const setEventListeners = (formElement, validInput) => {
  const { inputSelector, submitButtonSelector, errorClass, inputErrorClass, inactiveButtonClass
  } = validInput;
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const enableValidation = (validConfig) => {
  const { formSelector } = validConfig;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validConfig);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, disabledSelector) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(disabledSelector);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(disabledSelector);
    buttonElement.disabled = false;
  }
};

enableValidation(config);


