import $ from "jquery";

import Component from "../core/component";

import Loader from "../modules/loader";

import {apiService} from "../services/api.service";
import table from "../modules/table";

/**
 *  Компонент выводит таблицу показателей
 * */
class IndicatorsComponent extends Component{

  protected _FormData: FormData

  protected partners : Array<any>

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id: string, options: Object = {}) {

    super(id, options)

    let { partners = []}: {partners?: Array<any>} = options

    this.partners = partners

    this._FormData = new FormData(document.querySelector("#form-indicator"))
  }

  /**
   * Действия после показа компонента (хук)
   */
  async _onShow() : Promise<void> {

    const buttons : NodeListOf<HTMLButtonElement> = document.querySelectorAll(".options__btn"),
          $select : JQuery<HTMLElement> = $('.js-select2')

    buttons.forEach((btn: HTMLButtonElement) => btn.disabled = true)

    $select.prop('disabled', true);

    let loader = Loader.create(
      "lottie",
      {
        loadingText: 'Загрузка показателей',
        successText: 'Готово',
        failureText: 'Ошибка'
      }
    )

    try {
      document.querySelector('.js-loader').append(loader.loading())

      const response: string = await apiService.getIndicators(this._FormData)

      this.$el.insertAdjacentHTML('beforeend', response)

      // эфекты таблицы
      table('#indicators .js-effect')

      // подключаем фильтр
      const filterComponent = this.partners.find(partner => partner.name === 'filter')

      filterComponent.component.indicatorsRegister(this)

      loader.remove()

    } catch (error : any) {

      loader.failure()

      setTimeout(() => loader.remove(), 3800)

      if(error.status === 'error') {

        console.group(`In file ApiService, in function ${error.functionName}, promise return reject`)

          console.group('List of errors')

            error.errors.forEach(error => {
              console.error(`Name: ${error.message}\n Code: ${error.code}\n customData: ${error.customData}`)
            })

          console.groupEnd();

        console.groupEnd();

      } else {

        console.group('In file IndicatorsComponent, in function onShow error')
          console.error(`${error.stack}`)
        console.groupEnd();

      }
    } finally {
      buttons.forEach((btn: HTMLButtonElement) => btn.disabled = false)

      $select.prop('disabled', false);
    }
  }

  /**
   * Действия после скрытия компонента (хук)
   * @return {void}
   */
   _onHide() : void {
    this.$el.innerHTML = ''
  }

  /**
   * Обнавления данных из формы
   * @return {this}
   */
  public updateFormData(formData: FormData): this {
    this._FormData = formData

    return this
  }
}


export default IndicatorsComponent
