import "./library/lottiePlayer"

import Modal from "./library/sumbiot/modules/modal/components/modal";
import Accordion from "./library/sumbiot/modules/accordion/components/accordion";

import IndicatorStorage from "./modules/indicator-storage";

import IndicatorsComponent from "./components/indicators.component";
import FormIndicatorsComponent from "./components/form-indicators.component";
import FormFilterComponent from "./components/form-filter.component";
import LinkQuickComponent from "./components/link-quick.component";
import FormCollationComponent from "./components/form-collation.component";

import select2 from "./modules/select2";

window.addEventListener('DOMContentLoaded', () => {

  // аккордеон
  new Accordion('.accordion__head', {headActive: 'active',hideOpen: false})

  // модалка фильтр показателей
  const filterModal : Modal = new Modal('.js-filter-modal', '#modal-filter',
    {
      modalParent: '.options__item',
      modalDisplay: 'grid',
      activeClass : 'sActive'
    }
  ).init()

  // модалка быстрый доступ
  const quickModal : Modal = new Modal('.js-quick-modal', '#modal-quick',
    {
      modalParent: '.options__item',
      modalDisplay: 'grid',
      activeClass : 'sActive'
    }
  ).init()

  // модалка результат выбора быстрого доступа
  const quickResultModal : Modal = new Modal('.js-quick-result-modal', '#modal-quick-result',
    {
      modalDisplay: 'grid'
    }
  ).init()

  // модалка сверка показателей
  const collationModal : Modal = new Modal('.js-collation-modal', '#modal-collation',
    {
      modalParent: '.options__item',
      modalDisplay: 'grid',
      activeClass : 'sActive'
    }
  ).init()

  // модалка сверка показателей
  const collationResultModal : Modal = new Modal('undefined', '#modal--collation-result',
    {
      modalDisplay: 'grid'
    }
  ).init()


  // кастомный выпадающий список
  select2({modals: [filterModal, quickModal, collationModal]});


  // хранилище для фильтра показателей
  const storage : IndicatorStorage = new IndicatorStorage('indicators')


  // компонент фильтр показателей
  const filter : FormFilterComponent = new FormFilterComponent("#form-filter",{
    modals: [
      {name: 'filterModal', component: filterModal},
    ],
    storage
  }).init()

  // компонент вывода таблицы показателей
  const indicators: IndicatorsComponent = new IndicatorsComponent("#indicators", {
    partners: [
      {name: 'filter', component: filter}
    ]
  }).init()
  indicators.show()

  // компонент вывод показателей за конкретную дату
  const formIndicators: FormIndicatorsComponent = new FormIndicatorsComponent("#form-indicator",{
    partners: [
      {name: 'indicators', component: indicators}
    ]
  }).init()

  // компонент быстрого доступа
  new LinkQuickComponent("#link-quick",{
    partners: [
      {name: 'indicators', component: indicators},
      {name: 'formIndicators', component: formIndicators},
      {name: 'quickResultModal', component: quickResultModal}
    ]
  }).init()

  // компонент сверка показателей
  new FormCollationComponent("#form-collation", {
    modals: [
      {name: 'collationResultModal', component: collationResultModal},
    ]
  }).init()

})
