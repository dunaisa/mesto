export const popupOpenPic = document.querySelector('.popup-open-pic');

export const figcaptionImagePopup = document.querySelector('.popup__image-figcaption');

export const imagePopup = document.querySelector('.popup__image-figure');

//Универсальная функция открытия/закрытия попапа

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

//Функция закрытия любого попапа на ESC

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};