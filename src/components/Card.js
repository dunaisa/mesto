export class Card {
  constructor({ name, link, _id, likes, owner: { _id: ownerId } }, userId, elementTemplate, handleCardClick, handleCardDelete, handleCardLike) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._likes = likes;
    this._isOwner = userId === ownerId;

    this._userId = userId;

    this._elementTemplate = elementTemplate;

    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;

    // console.log(this._id)
    // console.log(ownerId)
    // console.log(this._userId)
  };

  _getTemplate = () => {
    const element = document.querySelector(this._elementTemplate).content.querySelector('.element').cloneNode(true);
    return element;
  };

  generateCard() {
    //Записываем разметку карточки в приватное поле _element
    this._element = this._getTemplate();

    // Добавим данные в разметку
    this._image = this._element.querySelector('.element__image');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__info-heading').textContent = this._name;

    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._deleteCardBtn = this._element.querySelector('.element__delete-btn');

    this._renderLikes();

    this._setEventListeners();
    // Вернём элемент
    return this._element;
  }

  removeCard = () => {
    this._element.remove();
  };

  _handleDeleteClick = () => {
    this._handleCardDelete(this._id, this.removeCard);
  }

  _isLiked = () => {
    return this._likes.map((item) => item._id).includes(this._userId)
  }

  _renderLikes = () => {
    if (this._isLiked()) {
      this._likeBtn.classList.add('element__like-btn_active');
    } else {
      this._likeBtn.classList.remove('element__like-btn_active');
    }

    //Установка счетчика под лайком

    this._likeCounter.textContent = this._likes.length;
  }

  setLikes = (newLikes) => {
    this._likes = newLikes;
    this._renderLikes();
  }

  _handleLikePost = () => {
    this._handleCardLike(this._id, this._isLiked(), this.setLikes);
  };

  _handleOpenPic = () => {
    this._handleCardClick({ name: this._name, link: this._link });
  }

  _setEventListeners = () => {

    if (this._isOwner) {
      this._deleteCardBtn.addEventListener('click', () => {
        this._handleDeleteClick();
      });
    } else {
      this._deleteCardBtn.remove();
    }
    /*
        this._deleteCardBtn.addEventListener('click', () => {
          this._removeCard();
        });*/

    this._image.addEventListener('click', this._handleOpenPic);

    this._likeBtn.addEventListener('click', this._handleLikePost);

  };
};



