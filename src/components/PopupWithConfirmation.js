import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDeleteSubmit, { defaultCaption, activeCaption }) {
    super(popupSelector);
    this._handleDeleteSubmit = handleDeleteSubmit;
    this._form = this._popup.querySelector('.popup-form_confirm');
    this._confirmBtn = this._form.querySelector('.popup-form__btn');
    this._defaultCaption = defaultCaption;
    this._activeCaption = activeCaption;
  };

  toggleBtnStatus = (isSaving) => {
    this._confirmBtn.textContent = isSaving ? this._activeCaption : this._defaultCaption;
  };

  open(cardId, removeCardCallback) {
    this._cardId = cardId;
    this._removeCardCallback = removeCardCallback;
    super.open();
  };

  close = () => {
    super.close();
  };

  _handleFormSubmit = (evt) => {
    evt.preventDefault();
    this._handleDeleteSubmit(this._cardId, this._removeCardCallback, this.toggleBtnStatus, this.close);
  };

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  };
}