import $ from "jquery"

import Component from "../core/component";

/**
 *  Компонент вывод показателей за конкретную дату
 * */
class FormIndicatorsComponent extends Component {

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
  }

  /**
   * Интерфейс компонента
   * @return {this}
   */
  init(): this {

    const $select : JQuery<HTMLElement> = $(this.$el).find('.js-select2')

    let idTimeout: any;

    $select.on('select2:select', () => {

      const formData: FormData = new FormData(this.$el),
        indicatorsComponent = this.partners.find(partner => partner.name === 'indicators')

      idTimeout = setTimeout(() => {
        this.partners.forEach(partner => partner.component.hide())

        indicatorsComponent.component.updateFormData(formData).show()
      },1000)
    })

    $select.on('select2:opening', () => {
      if(idTimeout) clearTimeout(idTimeout)
    })

    return this
  }

}

export default FormIndicatorsComponent
