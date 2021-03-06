import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler, { defaultCaption, activeCaption }, getterCallBack = null) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup-form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup-form__text'));
    this._defaultCaption = defaultCaption;
    this._activeCaption = activeCaption;
    this._buttonElement = this._form.querySelector('.popup-form__btn');
    this._getterCallBack = getterCallBack;
  };

  _getInputValues = () => {
    const values = {};
    this._inputList.forEach((inputElement) => {
      values[inputElement.name.slice(0, -6)] = inputElement.value;
    });
    return values;
  };

  _setInputValues = (values) => {
    this._inputList.forEach((inputElement) => {
      inputElement.value = values[inputElement.name.slice(0, -6)];
    });
  };

  toggleBtnStatus = (isSaving) => {
    this._buttonElement.textContent = isSaving ? this._activeCaption : this._defaultCaption;
  };

  _handlerFormSubmit = (evt) => {
    evt.preventDefault();
    this._submitHandler(this._getInputValues(), this.toggleBtnStatus, this.close);
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handlerFormSubmit);
  };

  open = () => {
    if (this._getterCallBack) {
      this._setInputValues(this._getterCallBack());
    } else {
      this._form.reset();
    }
    super.open();
  };

  close = () => {
    super.close();
    this._form.reset();
  };
}