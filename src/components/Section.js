export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector
    this._container = document.querySelector(this._containerSelector);
  }

  addItem = (item) => {
    this._container.prepend(this._renderer(item));
  }

  renderItems = () => {
    this._renderedItems.forEach(item => {
      this.addItem(item);
    });
  }
}