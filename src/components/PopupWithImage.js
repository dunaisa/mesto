import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor({ image, caption }, popupSelector) {
    super(popupSelector);
    this._image = image;
    this._caption = caption;
    this._imageElement = document.querySelector(this._image);
    this._captionElement = document.querySelector(this._caption);

  };

  open({ name, link }) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;
    super.open();
  }
}