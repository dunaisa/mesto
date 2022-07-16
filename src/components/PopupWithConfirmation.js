import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup-form_confirm')
    this._handleSubmit = handleCardSubmit;
  }

  setEventListeners() {
    super.setEventListeners;

  }
}