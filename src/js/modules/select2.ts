import $ from 'jquery'
import 'select2'

import Modal from "../library/sumbiot/modules/modal/components/modal";

/**
 * Кастомный выпадающий список
 */
const select2 = ({modals = []} : {modals?: Array<Modal>} = {}) => {

  /** русификация */
  const lang = {
    searching: function () {
      return "Поиск...";
    },
    noResults: function () {
      return "Совпадений не найдено";
    },

    loadingMore:function(){
      return"Загрузка…";
    },

    errorLoading: function () {
      return "Результаты не удалось загрузить";
    },

    maximumSelected: function(e){
      let str="Вы можете выбрать не более "+ e.maximum +" элемент";
      return str += (e.maximum === 1) ? 'a' : 'ов';
    }
  }

  /** конфигурация однострочного списка */
  const config = {
    selectionCssClass: 'sSelect', //-> добавляет дополнительные классы CSS в активный список. по умолчанию: ''
    dropdownCssClass: 'sSelect-dropdown', //-> добавляет дополнительные классы CSS в раскрывающийся список. по умолчанию: ''

    minimumResultsForSearch: 13, //-> минимальное количество результатов, необходимое для отображения окна поиска. по умолчанию: 0

    // язык оф дока: https://select2.org/i18n
    language: {
      // все названия свойств можно найти в языковый файла в select2
      ...lang
    }
  }

  /** переопредиления параметров по умолчанию перед инициализацией списков */
  $.fn.select2.defaults.set("width", "100%");

  const $select : JQuery<HTMLElement> = $('.js-select2')

  // инициализация
  $select.select2({
    placeholder: '', // -> текст по умолчанию. по умолчанию: null

    ...config
  })

  // событие запускается при выборе пункта
  $select.on('select2:select', (e) => {
    modals.forEach(modal => modal.close())
  })


}

export default select2;
