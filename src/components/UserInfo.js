export class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._descriptionSelector);
  }

  getUserInfo = () => {
    return { name: this._userName.textContent, info: this._userInfo.textContent };
  }

  setUserInfo = (data) => {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.info;
  }
}