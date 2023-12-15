import $ from 'jquery'

const table = (selector: string) : void => {
  sideShadowTable(selector) // -> внутренняя тень по бакам таблицы

  mouseScroll($(selector))  // -> скрол таблицы левой кнопкой мыши
}

/**
 * Внутренняя тень по бакам таблицы
 *
 * @param {string} selector - селектор который отбирает таблицы
 *
 * @return {void}
 */
function sideShadowTable(selector: string): void {

  const $table: JQuery<HTMLElement>  = $(selector);

  $table.wrap('<div class="scroll"></div>');

  $table.on('scroll', function() {

    const parent : JQuery<HTMLElement> = $(this).parent();

    if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {

      if (parent.hasClass('scroll-right') ){
        parent.removeClass('scroll-right');
      }

    } else if ($(this).scrollLeft() === 0){

      if (parent.hasClass('scroll-left')){
        parent.removeClass('scroll-left');
      }

    } else {

      if(!parent.hasClass('scroll-right')){
        parent.addClass('scroll-right');
      }
      if(!parent.hasClass('scroll-left')){
        parent.addClass('scroll-left');
      }

    }
  })

  resizeTable($table) // -> наблюдаем за шириной таблиц
}

/**
 * Отслеживает размер таблицы по ширине
 *
 * @param {JQuery<HTMLElement>} $tables - массив таблиц за которыми будем следить
 *
 * @return {void}
 */
function resizeTable($tables: JQuery<HTMLElement>) : void {

  // наблюдения за изменениями размеров таблицы
  const resizeObserver = new ResizeObserver((entries, observer) => {
    entries.forEach((entry) => {
      const $target : JQuery<Element> = $(entry.target),
            $children: JQuery<HTMLElement> = $target.children('.table__body')

      $target.removeClass('scroll-left')

      if($children.prop('scrollWidth') > entry.borderBoxSize[0].inlineSize) {

        $target.addClass('scroll-right')

        mouseScroll($children)

      } else {

        $target.removeClass('scroll-right')

      }

    });
  });

  $tables.parent().each((i, tableWrap) => {

    // устанавливаем наблюдение за элементом elContent
    resizeObserver.observe(tableWrap);

  })
}


/**
 * Прокрутка таблицы при нажатой левой кнопке мыши
 *
 * @param $tables - массив таблиц за которыми будем следить
 *
 * @return {void}
 */
function mouseScroll($tables: JQuery<HTMLElement>) : void {

  $tables.each((i: number, table : HTMLElement) => {
    let isMouseDown: boolean = false;
    let startX: number, startY: number , scrollLeft: number, scrollTop: number;

    // обработчик (курсор наводится на элемент)
    table.addEventListener('mouseover', mouseover)

    // обработчик (нажата кнопка мыши)
    table.addEventListener('mousedown', mousedown)

    // обработчик (кнопка мыши отпущена)
    table.addEventListener('mouseup', mouseup)

    // обработчик (перемещение курсора мыши)
    table.addEventListener('mousemove', mousemove)

    function mouseover(): void {
      table.style.cursor = 'grab'

      if(table.scrollWidth <= table.parentElement.offsetWidth) {
        table.removeEventListener('mouseover', mouseover)

        table.style.cursor = 'default'
      }
    }

    function mousedown(e: MouseEvent): void {
      isMouseDown = true;

      startX = e.pageX - table.offsetLeft;
      startY = e.pageY - table.offsetTop;

      scrollLeft = table.scrollLeft;
      scrollTop = table.scrollTop;

      table.style.cursor = 'grabbing'

      if(table.scrollWidth <= table.parentElement.offsetWidth) {
        table.removeEventListener('mousedown', mousedown)

        table.style.cursor = 'default'
      }
    }

    function mouseup(): void {
      isMouseDown = false;

      table.style.cursor = 'grab'

      if(table.scrollWidth <= table.parentElement.offsetWidth) {
        table.removeEventListener('mouseup', mouseup)

        table.style.cursor = 'default'
      }
    }

    function mousemove(e: MouseEvent): void {
      if (!isMouseDown) return;

      const x = e.pageX - table.offsetLeft;
      const y = e.pageY - table.offsetTop;
      const deltaX = (x - startX) * 2; // множитель для более быстрого движения
      const deltaY = (y - startY) * 2;

      table.scrollLeft = scrollLeft - deltaX;
      table.scrollTop = scrollTop - deltaY;

      table.style.cursor = 'grabbing'

      if(table.scrollWidth <= table.parentElement.offsetWidth) {
        table.removeEventListener('mousemove', mousemove)

        table.style.cursor = 'default'
      }
    }

  })
}

export default table;
