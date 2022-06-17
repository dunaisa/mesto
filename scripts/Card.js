import { openPopup, closePopup, popupOpenPic, imagePopup, figcaptionImagePopup } from './index.js';

export class Card {
  constructor(name, link, elementTemplate) {
    this._name = name;
    this._link = link;
    this._elementTemplate = elementTemplate;
  };

  _getTemplate = () => {
    const element = document.querySelector(this._elementTemplate).content.querySelector('.element').cloneNode(true);
    return element;
  };

  generateCard() {
    //Записываем разметку карточки в приватное поле _element
    this._element = this._getTemplate();

    // Добавим данные в разметку
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__info-heading').textContent = this._name;

    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._deleteCardBtn = this._element.querySelector('.element__delete-btn');

    this._image = this._element.querySelector('.element__image');

    this._setEventListeners();
    // Вернём элемент
    return this._element;
  }

  _removeCard = () => {
    this._element.remove();
  };

  _handleLikePost = () => {
    this._likeBtn.classList.toggle('element__like-btn_active');
  };

  _handleOpenPic = () => {
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    figcaptionImagePopup.textContent = this._name;
    openPopup(popupOpenPic);
  };

  _handleClosePic = () => {
    imagePopup.src = '';
    imagePopup.alt = '';
    figcaptionImagePopup.textContent = '';
    closePopup(popupOpenPic);
  };

  _setEventListeners = () => {

    this._deleteCardBtn.addEventListener('click', () => {
      this._removeCard();
    });

    this._image.addEventListener('click', () => {
      this._handleOpenPic();
    });

    this._likeBtn.addEventListener('click', () => {
      this._handleLikePost();
    });
  };
};



