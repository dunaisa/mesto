export class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
    this._headers = {
      authorization: 'bfc6d56e-7e9e-491a-a278-c2e6d08bdc0b',
      'Content-Type': 'application/json'
    };

  }

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

  setInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: '',
        link: ''
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}

