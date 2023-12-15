import Component from "../core/component";

import IndicatorStorage from "../modules/indicator-storage";
import IndicatorsComponent from "./indicators.component";

/**
 *  Компонент фильтр показателей
 * */
class FormFilterComponent extends Component{

  protected _Storage: IndicatorStorage

  protected _IndicatorsComponent: IndicatorsComponent

  protected modals : Array<any>

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id: string, options: Object = {}) {

    super(id, options)

    let {storage, modals = []}: {storage?: IndicatorStorage, modals?: Array<any>} = options

    this._Storage = storage

    this.modals = modals
  }

  /**
   * Интерфейс компонента
   * @return {this}
   */
  init(): this {

    this.$el.addEventListener('submit', submitHandler.bind(this))

    this.$el.addEventListener('reset', resetHandler.bind(this))

    return this
  }

  /**
   * Зарегистрировать показатели
   * @param tableComponent - компонент показатели
   */
  public indicatorsRegister(tableComponent : IndicatorsComponent) : void {
    this._IndicatorsComponent = tableComponent

    this.applyFilter()

    this.synchronizeForm()
  }

  /**
   * Применить фильтр на таблице
   * @protected
   */
  protected applyFilter(): void {
    const tables: NodeListOf<HTMLElement> = this._IndicatorsComponent.$el.querySelectorAll(".table__body"),
      indicators: NodeListOf<HTMLElement> = this._IndicatorsComponent.$el.querySelectorAll(".table__body .indicator");

    if(this._Storage.isKey()) {

      indicators.forEach((indicator: HTMLElement): void => {

        if(this._Storage.getIndicators().includes(+indicator.dataset.indicatorId)) {
          indicator.style.display = 'grid'
        } else {
          indicator.style.display = 'none'
        }

      })

      tables.forEach((table: HTMLElement): void => {
        const parent : HTMLElement = table.closest('.content__box') as HTMLElement,
          indicators: Array<HTMLElement> = Array.from(table.querySelectorAll('.indicator'))

        const flag: boolean = indicators.every((indicator: HTMLElement) => indicator.style.display != "grid")

        parent.style.display = flag ? 'none' : 'block'
      })

    } else {
      const indicatorsIdArray: Array<number> = Array.from(indicators).map((indicator: HTMLElement) => {
        indicator.style.display = 'grid'

        return +indicator.dataset.indicatorId
      })

      this._Storage.setIndicators(indicatorsIdArray)
    }

  }

  /**
   * Синхронизировать форму с таблиций
   */
  protected synchronizeForm():void {
    const inputsCheckbox: NodeListOf<HTMLElement> = this.$el.querySelectorAll('.sForm__checkbox')

    inputsCheckbox.forEach((input: HTMLInputElement) => {
      if(this._Storage.getIndicators().includes(+input.value)) {
        input.checked = true
      } else {
        input.checked = false
      }
    })
  }
}

/**
 * Обработчик примнить фильтр
 * @param e - обьект события
 */
function submitHandler(e: SubmitEvent) : void {
  e.preventDefault()

  const inputsCheckbox: NodeListOf<HTMLElement> = this.$el.querySelectorAll('.sForm__checkbox:checked')

  const indicatorsIdArray: Array<number> = Array.from(inputsCheckbox).map((indicator: HTMLInputElement) => {
    return +indicator.value
  })

  this._Storage.setIndicators(indicatorsIdArray)

  this.applyFilter()

  this.modals.find(modal => modal.name === 'filterModal').component.close()
}

/**
 * Обработчик сброса фильтра
 */
function resetHandler(): void {
  this._Storage.setIndicators([])

  this.applyFilter()
}

export default FormFilterComponent
