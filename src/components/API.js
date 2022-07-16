export class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
    this._headers = {
      authorization: 'bfc6d56e-7e9e-491a-a278-c2e6d08bdc0b',
      'Content-Type': 'application/json'
    };

  }

  //Получение карточек с сервера

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {

          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  // Отправка карточек на сервер

  setInitialCards(name, link) {
    const cardBody = {
      name: name,
      link: link
    }
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(cardBody)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  // Загрузка информации о пользователе с сервера

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {

          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  // Загрузка информации о пользователе на сервер

  setInfo(data) {
    const userInfoBody = {
      name: data.name,
      about: data.about,
    }
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userInfoBody)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        console.log(userInfoBody)
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setAvatar(data) {
    const userAvatarBody = {
      avatar: data.avatar,
    }
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userAvatarBody)
    })
      .then(res => {
        if (res.ok) {

          return res.json();
        }
        console.log(data.avatar)
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });

  }

}

