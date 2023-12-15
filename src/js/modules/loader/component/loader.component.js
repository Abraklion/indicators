/**
 *  Подгрузчик
 * */

export default class LoaderComponent {

  /**
   * Конструктор
   * @param {Object=} message - текст подгрузчика
   * @param {string} [message.loadingText] - при загрузки
   * @param {string} [message.successText] - при успехе
   * @param {string} [message.failureText] - при ошибки
   * @param {Object=} options - объект с настройками
   * @param {string} [options.activeClass] - класс модификатор
   * @param {Object=} scr - путь к изображению для подгрузки
   * @param {string} [scr.loadingSrc] - при загрузки
   * @param {string} [scr.successSrc] - при успехе
   * @param {string} [scr.failureSrc] - при ошибки
   */
  constructor({
                loadingText = 'Загрузка',
                successText = 'Успех',
                failureText = 'Неудача',
              } = {},
              {
                activeClass = '',
              } = {},
              {
                loadingSrc = '/assets/img/loader.svg',
                successSrc = '/assets/img/loader-ok.gif',
                failureSrc = '/assets/img/loader-error.gif',
              } = {}) {

    this.message = {
      loading: {
        title: loadingText,
        src: loadingSrc,
      },
      success: {
        title: successText,
        src: successSrc,
      },
      failure: {
        title: failureText,
        src: failureSrc,
      }
    }

    this.activeClass = activeClass
  }

  /**
   * Интерфейс компонента
   * @return {this}
   */
  init(){
    this.$el = document.createElement('div')
    this.$el.classList.add('loader')

    if(this.activeClass) {
      this.$el.classList.add(this.activeClass)
    }

    this.$el.innerHTML = this._html()

    this.$img = this.$el.querySelector('.loader__img')
    this.$massage = this.$el.querySelector('.loader__massage')

    return this
  }

  /**
   * Загрузка
   * @param {Object} options - надстройка
   * @return {Element}
   */
  loading(options = {}) {

    this._configurations(this.message.loading.title, this.message.loading.src, options)

    return this.$el
  }

  /**
   * Успех
   * @param {Object} options - надстройка
   * @return {Element}
   */
  success(options = {}) {

    this._configurations(this.message.success.title, this.message.success.src, options)

    return this.$el
  }

  /**
   * Неудача
   * @param {Object} options - надстройка
   * @return {Element}
   */
  failure(options = {}) {

    this._configurations(this.message.failure.title, this.message.failure.src, options)

    return this.$el
  }

  /**
   * Html в нутри блока с классом loader
   * @return {string}
   */
  _html() {
    return `
      <img  class="loader__img" src="" alt="">
      <p class="loader__massage"></p>
    `
  }

  /**
   * Меняет путь и текст
   * @param {string} text - текст подгрузчика
   * @param {string} src - путь к изображению
   * @return {void}
   */
  _configurations(text = '', src = '') {
    this.$img.setAttribute('src', `${window.BX ? BX.message('TemplateFolder') : ''}${src}`)
    this.$massage.innerHTML = text
  }

  /**
   * Удалить загрузчик
   * @return {void}
   */
  remove() {
    this.$el.remove()
  }
}
