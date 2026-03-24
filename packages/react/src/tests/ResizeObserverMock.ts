global.ResizeObserver = class ResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  // eslint-disable-next-line class-methods-use-this
  observe() {}

  // eslint-disable-next-line class-methods-use-this
  unobserve() {}

  // eslint-disable-next-line class-methods-use-this
  disconnect() {}
};
