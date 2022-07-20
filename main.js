(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a,c){var u=this,l=e.name,s=e.link,f=e._id,p=e.likes,_=e.owner._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_getTemplate",(function(){return document.querySelector(u._elementTemplate).content.querySelector(".element").cloneNode(!0)})),t(this,"removeCard",(function(){u._element.remove()})),t(this,"_handleDeleteClick",(function(){u._handleCardDelete(u._id,u.removeCard)})),t(this,"_isLiked",(function(){return u._likes.map((function(e){return e._id})).includes(u._userId)})),t(this,"_renderLikes",(function(){u._isLiked()?u._likeBtn.classList.add("element__like-btn_active"):u._likeBtn.classList.remove("element__like-btn_active"),u._likeCounter.textContent=u._likes.length})),t(this,"setLikes",(function(e){u._likes=e,u._renderLikes()})),t(this,"_handleLikePost",(function(){u._handleCardLike(u._id,u._isLiked(),u.setLikes)})),t(this,"_handleOpenPic",(function(){u._handleCardClick({name:u._name,link:u._link})})),t(this,"_setEventListeners",(function(){u._isOwner?u._deleteCardBtn.addEventListener("click",(function(){u._handleDeleteClick()})):u._deleteCardBtn.remove(),u._image.addEventListener("click",u._handleOpenPic),u._likeBtn.addEventListener("click",u._handleLikePost)})),this._name=l,this._link=s,this._id=f,this._likes=p,this._isOwner=r===_,this._userId=r,this._elementTemplate=o,this._handleCardClick=i,this._handleCardDelete=a,this._handleCardLike=c}var r,o;return r=n,(o=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".element__info-heading").textContent=this._name,this._likeBtn=this._element.querySelector(".element__like-btn"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._deleteCardBtn=this._element.querySelector(".element__delete-btn"),this._renderLikes(),this._setEventListeners(),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={inputSelector:"popup-form__text",submitButtonSelector:"popup-form__btn",inactiveButtonClass:"popup-form__btn_inactive",inputErrorClass:"popup-form__text_type_error",errorClass:"popup-form__input-error_active"},c=o((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.classList.add(r._errorClass),n.textContent=t})),i(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),i(this,"_checkInputValidity",(function(e){if(e.validity.valid)r._hideInputError(e);else{var t=e.validationMessage;r._showInputError(e,t)}})),i(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),i(this,"_toggleButtonState",(function(e,t){r._hasInvalidInput(e)?(t.classList.add(r._inactiveButtonClass),t.disabled=!0):(t.classList.remove(r._inactiveButtonClass),t.disabled=!1)})),i(this,"enableValidation",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState(r._inputList,r._buttonElement)}))})),r._toggleButtonState(r._inputList,r._buttonElement)})),i(this,"cleanUpForm",(function(){r._inputList.forEach((function(e){r._hideInputError(e)})),r._toggleButtonState(r._inputList,r._buttonElement)})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._buttonElement=this._form.querySelector(".".concat(this._submitButtonSelector)),this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._inputSelector)))}));function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),l(this,"_handleOverlayClick",(function(e){e.target===e.currentTarget&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._closeBtn=this._popup.querySelector(".popup__close-btn")}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){e._handleOverlayClick(t)})),this._closeBtn.addEventListener("click",(function(){e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function h(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(r){var o=b(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return h(this,e)});function i(e,t,n){var r,a,c,u,l=n.defaultCaption,s=n.activeCaption,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return p(this,i),v(d(u=o.call(this,e)),"_getInputValues",(function(){var e={};return u._inputList.forEach((function(t){e[t.name.slice(0,-6)]=t.value})),e})),v(d(u),"_setInputValues",(function(e){u._inputList.forEach((function(t){t.value=e[t.name.slice(0,-6)]}))})),v(d(u),"toggleBtnStatus",(function(e){u._buttonElement.textContent=e?u._activeCaption:u._defaultCaption})),v(d(u),"_handlerFormSubmit",(function(e){e.preventDefault(),u._submitHandler(u._getInputValues(),u.toggleBtnStatus,u.close)})),v(d(u),"setEventListeners",(function(){y((r=d(u),b(i.prototype)),"setEventListeners",r).call(r),u._form.addEventListener("submit",u._handlerFormSubmit)})),v(d(u),"open",(function(){u._getterCallBack?u._setInputValues(u._getterCallBack()):u._form.reset(),y((a=d(u),b(i.prototype)),"open",a).call(a)})),v(d(u),"close",(function(){y((c=d(u),b(i.prototype)),"close",c).call(c),u._form.reset()})),u._submitHandler=t,u._form=u._popup.querySelector(".popup-form"),u._inputList=Array.from(u._form.querySelectorAll(".popup-form__text")),u._defaultCaption=l,u._activeCaption=s,u._buttonElement=u._form.querySelector(".popup-form__btn"),u._getterCallBack=f,u}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(s);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=k((function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"addItem",(function(e){r._container.prepend(r._renderer(e))})),w(this,"renderItems",(function(e){e.reverse().forEach((function(e){r.addItem(e)}))})),this._renderer=o,this._containerSelector=n,this._container=document.querySelector(this._containerSelector)}));function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function j(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(r){var o=B(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j(this,e)});function i(e,t){var n,r,a,c,u,l=e.image,s=e.caption;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u=function(e){var t=e.name,o=e.link;r._imageElement.src=o,r._imageElement.alt=t,r._captionElement.textContent=t,L((n=P(r),B(i.prototype)),"open",n).call(n)},(c="open")in(a=P(r=o.call(this,t)))?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a.open=u,r._image=l,r._caption=s,r._imageElement=r._popup.querySelector(r._image),r._captionElement=r._popup.querySelector(r._caption),r}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(s);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t&&q(e.prototype,t),n&&q(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=T((function e(t){var n=this,r=t.nameSelector,o=t.descriptionSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"getUserInfo",(function(){return{name:n._userName.textContent,about:n._userInfo.textContent}})),x(this,"setUserInfo",(function(e){var t=e.name,r=e.about,o=e.avatar,i=e._id;n._userName.textContent=t,n._userInfo.textContent=r,n._userPhoto.src=o,n._id=i})),x(this,"getUserId",(function(){return n._id})),this._nameSelector=r,this._descriptionSelector=o,this._userName=document.querySelector(this._nameSelector),this._userInfo=document.querySelector(this._descriptionSelector),this._profileAvatarSelector=i,this._userPhoto=document.querySelector(this._profileAvatarSelector)}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function V(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(e,t,n){var r,o,c,u=n.defaultCaption,l=n.activeCaption;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),M(N(c=i.call(this,e)),"toggleBtnStatus",(function(e){c._confirmBtn.textContent=e?c._activeCaption:c._defaultCaption})),M(N(c),"close",(function(){H((r=N(c),z(a.prototype)),"close",r).call(r)})),M(N(c),"_handleFormSubmit",(function(e){e.preventDefault(),c._handleDeleteSubmit(c._cardId,c._removeCardCallback,c.toggleBtnStatus,c.close)})),M(N(c),"setEventListeners",(function(){H((o=N(c),z(a.prototype)),"setEventListeners",o).call(o),c._form.addEventListener("submit",c._handleFormSubmit)})),c._handleDeleteSubmit=t,c._form=c._popup.querySelector(".popup-form_confirm"),c._confirmBtn=c._form.querySelector(".popup-form__btn"),c._defaultCaption=u,c._activeCaption=l,c}return t=a,(n=[{key:"open",value:function(e,t){this._cardId=e,this._removeCardCallback=t,H(z(a.prototype),"open",this).call(this)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t){var n=t.url,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._token=r,this._headers={authorization:"bfc6d56e-7e9e-491a-a278-c2e6d08bdc0b","Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"setInitialCards",value:function(e,t){var n={name:e,link:t};return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(n)}).then(this._checkResponse)}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setInfo",value:function(e){var t={name:e.name,about:e.about};return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){var t={avatar:e.avatar};return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"toggleLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),Q=document.querySelector(".profile__edit-btn"),W=document.querySelector(".profile__add-btn"),X=document.querySelector(".profile__avatar-btn"),Y=document.querySelector(".popup-form_profile"),Z=document.querySelector(".popup-form_place"),ee=document.querySelector(".popup-form_avatar"),te=new K({url:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"c56e30dc-2883-4270-a59e-b2f7bae969c6","Content-Type":"application/json"}}),ne={defaultCaption:"Схранить",activeCaption:"Сохранение..."};function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=new R({image:".popup__image-figure",caption:".popup__image-figcaption"},".popup-open-pic");function ie(e,t,n){te.toggleLike(e,t).then((function(e){var t=e.likes;n(t)})).catch((function(e){console.log(e)}))}oe.setEventListeners();var ae=new $(".popup-confirm-delete",(function(e,t,n,r){n(!0),te.deleteCard(e).then((function(){t(),r()})).catch((function(e){console.log(e)})).finally((function(){n(!1)}))}),{defaultCaption:"Да",activeCaption:"Удаление..."});function ce(e,t){ae.open(e,t)}ae.setEventListeners();var ue=new C({renderer:function(e){return new n(e,se.getUserId(),"#template-elements",oe.open,ce,ie).generateCard()}},".elements");W.addEventListener("click",(function(){_e[Z.name].cleanUpForm(),le.open()}));var le=new g(".popup-add-place",(function(e,t,n){t(!0),te.setInitialCards(e.name,e.link).then((function(e){ue.addItem(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),ne);le.setEventListeners(),X.addEventListener("click",(function(){_e[ee.name].cleanUpForm(),fe.open()}));var se=new A({nameSelector:".profile__title",descriptionSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar"}),fe=new g(".popup-change-photo",(function(e,t,n){t(!0),te.setAvatar({avatar:e.link}).then((function(e){se.setUserInfo(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),ne);fe.setEventListeners(),Q.addEventListener("click",(function(){_e[Y.name].cleanUpForm(),pe.open()}));var pe=new g(".popup-edit-profile",(function(e,t,n){t(!0),te.setInfo({name:e.name,about:e.about}).then((function(e){se.setUserInfo(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),ne,se.getUserInfo);pe.setEventListeners();var _e={};Array.from(document.forms).forEach((function(e){_e[e.name]=new c(a,e),_e[e.name].enableValidation()})),Promise.all([te.getInfo(),te.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];se.setUserInfo(o),ue.renderItems(i)})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=main.js.map