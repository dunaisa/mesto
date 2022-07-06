export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector
    this._container = document.querySelector(this._containerSelector);
  }

  addItem = (cardElement) => {
    this._container.prepend(cardElement);
  }

  renderItems = () => {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}