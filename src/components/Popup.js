export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._closeBtn = this._popup.querySelector('.popup__close-btn');
  };

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_opened');
  };

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  };

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  _handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    };
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      this._handleOverlayClick(evt);
    });
    this._closeBtn.addEventListener('click', () => {
      this.close();
    });
  };
}