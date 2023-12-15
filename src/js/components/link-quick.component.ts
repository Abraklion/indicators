import Component from "../core/component";

class LinkQuickComponent extends Component {

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
    this.linkHandler()

    return this
  }

  /**
   * Обработчик клика по ссылке показателя
   * @return {void}
   */
  linkHandler(): void {
    const indicatorsComponent = this.partners.find(partner => partner.name === 'indicators'),
          formIndicators = this.partners.find(partner => partner.name === 'formIndicators'),
          quickResultModal = this.partners.find(partner => partner.name === 'quickResultModal')

    const links: NodeListOf<HTMLLinkElement> = this.$el.querySelectorAll(".sForm__link")

    links.forEach((link: HTMLLinkElement): void => {

      link.addEventListener('click', (e: MouseEvent): void => {
        e.preventDefault()

        const indicator: HTMLElement = indicatorsComponent.component.$el.querySelector(`[data-indicator-id="${link.dataset.indicatorId}"]`),
              cloneIndicator: HTMLElement = indicator.cloneNode(true) as HTMLElement

        const tableBody = quickResultModal.component.modal.querySelector('.js-table-body'),
              unit = quickResultModal.component.modal.querySelector('.js-unit'),
              title = quickResultModal.component.modal.querySelector('.js-title')

        const year = formIndicators.component.$el.querySelector(`[name="year"]`).value,
              month = formIndicators.component.$el.querySelector(`[name="month"]`).value;

        (indicator.parentElement.dataset.indicatorGroup === 'other')
          ? unit.classList.add('indicator__unit--padding')
          : unit.classList.remove('indicator__unit--padding')

        cloneIndicator.style.display = 'grid'

        tableBody.innerHTML = ''
        tableBody.append(cloneIndicator)

        title.innerHTML = `${this.getMonthName(month)} ${year}`
      })

    })
  }

  /**
   * Определяем имя месяца по числу месяца
   * @return {void}
   */
  public getMonthName(monthNumber: number) : string {
    const date: Date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('ru-RU', {
      month: 'long',
    });
  }
}

export default LinkQuickComponent
