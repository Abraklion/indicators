import Component from "../core/component";

import Loader from "../modules/loader";
import table from "../modules/table";

import {apiService} from "../services/api.service";

/**
 *  Компонент сверка показателей
 * */
class FormCollationComponent extends Component {

  protected modals : Array<any>

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id: string, options: Object = {}) {

    super(id, options)

    let { modals = []}: {modals?: Array<any>} = options

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

}

/**
 * Обработчик примнить фильтр
 * @param e - обьект события
 */
async function submitHandler(e: SubmitEvent): Promise<void> {
  e.preventDefault()

  paddingSelect(this.modals)

  const buttons : NodeListOf<HTMLButtonElement> = document.querySelectorAll(".options__btn")

  buttons.forEach((btn: HTMLButtonElement) => btn.disabled = true)

  let loader = Loader.create(
    "lottie",
    {
      loadingText: 'Загрузка показателей',
      successText: 'Готово',
      failureText: 'Ошибка'
    }
  )

  try {
    const collationResultModal = this.modals.find(modal => modal.name === 'collationResultModal'),
          modalBody = collationResultModal.component.modal.querySelector('.sModal__scroll')

    modalBody.innerHTML = ''
    modalBody.append(loader.loading())

    const formData: FormData = new FormData(this.$el),
          response: string = await apiService.getCollation(formData)

    modalBody.insertAdjacentHTML('beforeend', response)
    modalBody.insertAdjacentElement('beforeend', collationResultModal.component._close)

    document.querySelectorAll('.accordion__head').forEach(element => {
      (element.nextElementSibling as HTMLElement).style.display = 'block'
    })

    // эфекты таблицы
    table('#modal--collation-result .table__body')

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

      console.group('In file FormCollationComponent, in function submitHandler error')
        console.error(`${error.stack}`)
      console.groupEnd();

    }
  } finally {
    buttons.forEach((btn: HTMLButtonElement) => btn.disabled = false)
  }
}

/**
 * Обработчик сброса фильтра
 */
function resetHandler(): void {
  console.log(2)
}

/**
 * Подбираем отступы для модального окна
 * @param modals
 */
function paddingSelect(modals: Array<any>): void {
  const collationResultModal = modals.find(modal => modal.name === 'collationResultModal'),
    styleModal = collationResultModal.component.modal.style

  const pageScrollY : number = scrollY, // на сколько элемент прокручен
    pageFullHeight: number = document.documentElement.scrollHeight, // общая днина элемента
    windowHeight: number = document.documentElement.clientHeight, // видимая длина элемента
    pageEndHeight: number = pageFullHeight - (pageScrollY + windowHeight); // сколько осталось до конца элемента

  styleModal.paddingTop = (pageScrollY > 80) ? '20px' : `${96 - pageScrollY}px`
  styleModal.paddingBottom = (pageEndHeight > 80) ? '20px' : `${80 - pageEndHeight}px`

  collationResultModal.component.show()
}

export default FormCollationComponent
