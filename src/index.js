const instances = {}

export default class Instanciator {
  constructor(name, object) {
    if (!name || !object) {
      return
    }
    document.querySelectorAll(`[data-${name}]`).forEach((el) => {
      const id = this.uniqueId
      el.dataset.domId = id
      const options = el.dataset[name] === '' ? '{}' : el.dataset[name]
      instances[id] = object(el, JSON.parse(options))
    })
  }
  get uniqueId() {
    return Math.random().toString(36).substr(2, 16)
  }
  static getInstance(el) {
    const id = el.dataset.domId
    return instances[id]
  }
}