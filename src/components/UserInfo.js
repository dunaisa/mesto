export class UserInfo {
  constructor({ nameSelector, descriptionSelector, profileAvatarSelector }) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._descriptionSelector);
    this._profileAvatarSelector = profileAvatarSelector;
    this._userPhoto = document.querySelector(this._profileAvatarSelector);

  }

  getUserInfo = () => {
    return { name: this._userName.textContent, about: this._userInfo.textContent };
  }

  setUserInfo = (data) => {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
  }

  setUserPhoto = (data) => {
    this._userPhoto.src = data.avatar;
  }
}