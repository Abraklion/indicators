import {useFetchRequest, useBxRequest} from "../core/useRequest";

/**
 *  API Сервисы
 * */
class ApiService{

  /**
   * Конструктор
   * @param {string} baseUrl - точка доступа
   */
  constructor(baseUrl) {

    this.baseUrl = baseUrl

  }

  /**
   * Запрос на сервер для получения таблицы показателей
   * @param {Object} data - объект с данными которые будут передаваться на сервер
   * @return {Promise}
   */
  async getIndicators(data) {

    console.log(`Таблица показателей: за ${data.get('year')} год и ${data.get('month')} месяц`)

    // try{
    //   const res = await useBxRequest(this.baseUrl, 'МЕТОД', {data})
    //
    //   return res.data
    //
    // } catch (error) {
    //
    //   if(error.status === 'error') {
    //     throw {
    //       functionName : 'getIndicators',
    //       ...error
    //     }
    //   }
    //
    //   throw error
    // }

    return await new Promise((resolve,reject) => {

      setTimeout(() => {
        resolve(
            `
                <section class="content__box">

                        <h2 class="content__subtitle title title--line">
                          <span>Основные</span>
                        </h2>

                        <div class="table">

                          <div class="table__header">

                            <div class="indicator indicator--header">
                              <div class="indicator__unit">Цель</div>

                              <div class="indicator__value yellow strong">Холдинг</div>
                              <div class="indicator__value">ОЗНА-ИС</div>
                              <div class="indicator__value yellow">ОЗНА+</div>
                              <div class="indicator__value">ОЗНА-инжиниринг</div>
                              <div class="indicator__value">АК ОЗНА</div>
                            </div>

                          </div><!--/.table__header-->

                          <div class="table__body js-effect" data-indicator-group="main">

                            <!-- Входящий денежный поток - start -->
                            <article class="indicator g-3" data-indicator-id="3">
                              <h3 class="indicator__title title">Входящий денежный поток</h3>

                              <!-- год - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Год</div>

                                <div class="indicator__name">Цель</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/год - start -->
                                <div class="indicator__value yellow strong">17 031 957</div>
                                <div class="indicator__value yellow strong">11 773 448</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <!-- холдинг/год - end -->

                                <!-- озна-ис/год - start -->
                                <div class="indicator__value">6 128 508</div>
                                <div class="indicator__value">5 697 910</div>
                                <div class="indicator__value">-430 598</div>
                                <!-- озна-ис/год - end -->

                                <!-- озна+/год - start -->
                                <div class="indicator__value yellow">10 963 449</div>
                                <div class="indicator__value yellow">6 152 724</div>
                                <div class="indicator__value yellow">-4 810 725</div>
                                <!-- озна+/год - end -->

                                <!-- озна-инжиниринг/год - start -->
                                <div class="indicator__value">7 304 128</div>
                                <div class="indicator__value">7 304 128</div>
                                <div class="indicator__value">-2 907 316</div>
                                <!-- озна-инжиниринг/год - end -->

                                <!-- ак озна/год - start -->
                                <div class="indicator__value">4 272 553</div>
                                <div class="indicator__value">4 272 553</div>
                                <div class="indicator__value">4 272 553</div>
                                <!-- ак озна/год - end -->
                              </div>
                              <!-- год - end -->

                              <!-- квартал - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Квартал</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/квартал - start -->
                                <div class="indicator__value yellow strong">7 031 957</div>
                                <div class="indicator__value yellow strong">1 773 448</div>
                                <div class="indicator__value yellow strong">963 449</div>
                                <!-- холдинг/квартал - end -->

                                <!-- озна-ис/квартал - start -->
                                <div class="indicator__value">128 508</div>
                                <div class="indicator__value">697 910</div>
                                <div class="indicator__value">-30 598</div>
                                <!-- озна-ис/квартал - end -->

                                <!-- озна+/квартал - start -->
                                <div class="indicator__value yellow">1 963 449</div>
                                <div class="indicator__value yellow">6 152 724</div>
                                <div class="indicator__value yellow">-4 810 725</div>
                                <!-- озна+/квартал - end -->

                                <!-- озна-инжиниринг/квартал - start -->
                                <div class="indicator__value">304 128</div>
                                <div class="indicator__value">304 128</div>
                                <div class="indicator__value">-907 316</div>
                                <!-- озна-инжиниринг/квартал - end -->

                                <!-- ак озна/квартал - start -->
                                <div class="indicator__value">272 553</div>
                                <div class="indicator__value">272 553</div>
                                <div class="indicator__value">272 553</div>
                                <!-- ак озна/квартал - end -->
                              </div>
                              <!-- квартал - end -->

                              <!-- месяц - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Месяц</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/месяц - start -->
                                <div class="indicator__value yellow strong">1 456 632</div>
                                <div class="indicator__value yellow strong red">291 564</div>
                                <div class="indicator__value yellow strong">-1 165 068</div>
                                <!-- холдинг/месяц - end -->

                                <!-- озна-ис/месяц - start -->
                                <div class="indicator__value">897 564</div>
                                <div class="indicator__value green">-273 410</div>
                                <div class="indicator__value">-624 154</div>
                                <!-- озна-ис/месяц - end -->

                                <!-- озна+/месяц - start -->
                                <div class="indicator__value yellow">414 068</div>
                                <div class="indicator__value yellow green">18 154</div>
                                <div class="indicator__value yellow">-395 914</div>
                                <!-- озна+/месяц - end -->

                                <!-- озна-инжиниринг/месяц - start -->
                                <div class="indicator__value">176 505</div>
                                <div class="indicator__value red">15 017</div>
                                <div class="indicator__value">-161 488</div>
                                <!-- озна-инжиниринг/месяц - end -->

                                <!-- ак озна/месяц - start -->
                                <div class="indicator__value">387 563</div>
                                <div class="indicator__value green">3 137</div>
                                <div class="indicator__value">-384 426</div>
                                <!-- ак озна/месяц - end -->
                              </div>
                              <!-- месяц - end -->

                            </article>
                            <!-- Входящий денежный поток - end -->

                            <!-- Чистый денежный поток - start -->
                            <article class="indicator g-3" data-indicator-id="87">
                              <h3 class="indicator__title title">Чистый денежный поток</h3>

                              <!-- год - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Год</div>

                                <div class="indicator__name">Цель</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/год - start -->
                                <div class="indicator__value yellow strong">17 031 957</div>
                                <div class="indicator__value yellow strong">11 773 448</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <!-- холдинг/год - end -->

                                <!-- озна-ис/год - start -->
                                <div class="indicator__value">6 128 508</div>
                                <div class="indicator__value">5 697 910</div>
                                <div class="indicator__value">-430 598</div>
                                <!-- озна-ис/год - end -->

                                <!-- озна+/год - start -->
                                <div class="indicator__value yellow">10 963 449</div>
                                <div class="indicator__value yellow">6 152 724</div>
                                <div class="indicator__value yellow">-4 810 725</div>
                                <!-- озна+/год - end -->

                                <!-- озна-инжиниринг/год - start -->
                                <div class="indicator__value">7 304 128</div>
                                <div class="indicator__value">7 304 128</div>
                                <div class="indicator__value">-2 907 316</div>
                                <!-- озна-инжиниринг/год - end -->

                                <!-- ак озна/год - start -->
                                <div class="indicator__value">4 272 553</div>
                                <div class="indicator__value">4 272 553</div>
                                <div class="indicator__value">4 272 553</div>
                                <!-- ак озна/год - end -->
                              </div>
                              <!-- год - end -->

                              <!-- квартал - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Квартал</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/квартал - start -->
                                <div class="indicator__value yellow strong">7 031 957</div>
                                <div class="indicator__value yellow strong">1 773 448</div>
                                <div class="indicator__value yellow strong">963 449</div>
                                <!-- холдинг/квартал - end -->

                                <!-- озна-ис/год - start -->
                                <div class="indicator__value">128 508</div>
                                <div class="indicator__value">697 910</div>
                                <div class="indicator__value">-30 598</div>
                                <!-- озна-ис/квартал - end -->

                                <!-- озна+/квартал - start -->
                                <div class="indicator__value yellow">1 963 449</div>
                                <div class="indicator__value yellow">6 152 724</div>
                                <div class="indicator__value yellow">-4 810 725</div>
                                <!-- озна+/квартал - end -->

                                <!-- озна-инжиниринг/квартал - start -->
                                <div class="indicator__value">304 128</div>
                                <div class="indicator__value">304 128</div>
                                <div class="indicator__value">-907 316</div>
                                <!-- озна-инжиниринг/квартал - end -->

                                <!-- ак озна/квартал - start -->
                                <div class="indicator__value">272 553</div>
                                <div class="indicator__value">272 553</div>
                                <div class="indicator__value">272 553</div>
                                <!-- ак озна/квартал - end -->
                              </div>
                              <!-- квартал - end -->

                              <!-- месяц - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Месяц</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/месяц - start -->
                                <div class="indicator__value yellow strong">1 456 632</div>
                                <div class="indicator__value yellow strong green">291 564</div>
                                <div class="indicator__value yellow strong">-1 165 068</div>
                                <!-- холдинг/месяц - end -->

                                <!-- озна-ис/месяц - start -->
                                <div class="indicator__value">897 564</div>
                                <div class="indicator__value green">-273 410</div>
                                <div class="indicator__value">-624 154</div>
                                <!-- озна-ис/месяц - end -->

                                <!-- озна+/месяц - start -->
                                <div class="indicator__value yellow">414 068</div>
                                <div class="indicator__value yellow green">18 154</div>
                                <div class="indicator__value yellow">-395 914</div>
                                <!-- озна+/месяц - end -->

                                <!-- озна-инжиниринг/месяц - start -->
                                <div class="indicator__value">176 505</div>
                                <div class="indicator__value green">15 017</div>
                                <div class="indicator__value">-161 488</div>
                                <!-- озна-инжиниринг/месяц - end -->

                                <!-- ак озна/месяц - start -->
                                <div class="indicator__value">387 563</div>
                                <div class="indicator__value green">3 137</div>
                                <div class="indicator__value">-384 426</div>
                                <!-- ак озна/месяц - end -->
                              </div>
                              <!-- месяц - end -->

                            </article>
                            <!-- Чистый денежный поток - end -->

                            <!-- Чистый долг - start -->
                            <article class="indicator g-2" data-indicator-id="102">
                              <h3 class="indicator__title title">Чистый долг</h3>

                              <!-- год - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Год</div>

                                <div class="indicator__name">Цель</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/год - start -->
                                <div class="indicator__value yellow strong">17 031 957</div>
                                <div class="indicator__value yellow strong">11 773 448</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <!-- холдинг/год - end -->

                                <!-- озна-ис/год - start -->
                                <div class="indicator__value">6 128 508</div>
                                <div class="indicator__value">5 697 910</div>
                                <div class="indicator__value">-430 598</div>
                                <!-- озна-ис/год - end -->

                                <!-- озна+/год - start -->
                                <div class="indicator__value yellow">10 963 449</div>
                                <div class="indicator__value yellow">6 152 724</div>
                                <div class="indicator__value yellow">-4 810 725</div>
                                <!-- озна+/год - end -->

                                <!-- озна-инжиниринг/год - start -->
                                <div class="indicator__value">7 304 128</div>
                                <div class="indicator__value">7 304 128</div>
                                <div class="indicator__value">-2 907 316</div>
                                <!-- озна-инжиниринг/год - end -->

                                <!-- ак озна/год - start -->
                                <div class="indicator__value">4 272 553</div>
                                <div class="indicator__value">4 272 553</div>
                                <div class="indicator__value">4 272 553</div>
                                <!-- ак озна/год - end -->
                              </div>
                              <!-- год - end -->

                              <!-- месяц - start -->
                              <div class="indicator__inner g-2-120">
                                <div class="indicator__unit">Месяц</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>

                                <!-- холдинг/месяц - start -->
                                <div class="indicator__value yellow strong">1 456 632</div>
                                <div class="indicator__value yellow strong green">291 564</div>
                                <!-- холдинг/месяц - end -->

                                <!-- озна-ис/месяц - start -->
                                <div class="indicator__value">897 564</div>
                                <div class="indicator__value red">-273 410</div>
                                <!-- озна-ис/месяц - end -->

                                <!-- озна+/месяц - start -->
                                <div class="indicator__value yellow">414 068</div>
                                <div class="indicator__value yellow red">18 154</div>
                                <!-- озна+/месяц - end -->

                                <!-- озна-инжиниринг/месяц - start -->
                                <div class="indicator__value">176 505</div>
                                <div class="indicator__value red">15 017</div>
                                <!-- озна-инжиниринг/месяц - end -->

                                <!-- ак озна/месяц - start -->
                                <div class="indicator__value">387 563</div>
                                <div class="indicator__value red">3 137</div>
                                <!-- ак озна/месяц - end -->
                              </div>
                              <!-- месяц - end -->

                            </article>
                            <!-- Чистый долг - end -->

                            <!-- Выручка - start -->
                            <article class="indicator g-2" data-indicator-id="14">
                              <h3 class="indicator__title title">Выручка</h3>

                              <!-- год - start -->
                              <div class="indicator__inner g-4-120">
                                <div class="indicator__unit">Год</div>

                                <div class="indicator__name">Цель</div>
                                <div class="indicator__name">Прогноз</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/год - start -->
                                <div class="indicator__value yellow strong">17 031 957</div>
                                <div class="indicator__value yellow strong red">11 773 448</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <!-- холдинг/год - end -->

                                <!-- озна-ис/год - start -->
                                <div class="indicator__value">17 031 957</div>
                                <div class="indicator__value green">11 773 448</div>
                                <div class="indicator__value">10 963 449</div>
                                <div class="indicator__value">10 963 449</div>
                                <!-- озна-ис/год - end -->

                                <!-- озна+/год - start -->
                                <div class="indicator__value yellow">17 031 957</div>
                                <div class="indicator__value yellow green">11 773 448</div>
                                <div class="indicator__value yellow">10 963 449</div>
                                <div class="indicator__value yellow">10 963 449</div>
                                <!-- озна+/год - end -->

                                <!-- озна-инжиниринг/год - start -->
                                <div class="indicator__value">17 031 957</div>
                                <div class="indicator__value green">11 773 448</div>
                                <div class="indicator__value">10 963 449</div>
                                <div class="indicator__value">10 963 449</div>
                                <!-- озна-инжиниринг/год - end -->

                                <!-- ак озна/год - start -->
                                <div class="indicator__value">17 031 957</div>
                                <div class="indicator__value green">11 773 448</div>
                                <div class="indicator__value">10 963 449</div>
                                <div class="indicator__value">10 963 449</div>
                                <!-- ак озна/год - end -->
                              </div>
                              <!-- год - end -->

                              <!-- месяц - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Месяц</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/месяц - start -->
                                <div class="indicator__value yellow strong">1 456 632</div>
                                <div class="indicator__value yellow strong green">291 564</div>
                                <div class="indicator__value yellow strong">-1 165 068</div>
                                <!-- холдинг/месяц - end -->

                                <!-- озна-ис/месяц - start -->
                                <div class="indicator__value">897 564</div>
                                <div class="indicator__value green">-273 410</div>
                                <div class="indicator__value">-624 154</div>
                                <!-- озна-ис/месяц - end -->

                                <!-- озна+/месяц - start -->
                                <div class="indicator__value yellow">414 068</div>
                                <div class="indicator__value yellow red">18 154</div>
                                <div class="indicator__value yellow">-395 914</div>
                                <!-- озна+/месяц - end -->

                                <!-- озна-инжиниринг/месяц - start -->
                                <div class="indicator__value">176 505</div>
                                <div class="indicator__value red">15 017</div>
                                <div class="indicator__value">-161 488</div>
                                <!-- озна-инжиниринг/месяц - end -->

                                <!-- ак озна/месяц - start -->
                                <div class="indicator__value">387 563</div>
                                <div class="indicator__value red">3 137</div>
                                <div class="indicator__value">-384 426</div>
                                <!-- ак озна/месяц - end -->
                              </div>
                              <!-- месяц - end -->

                            </article>
                            <!-- Выручка - end -->

                            <!-- Чистая прибыль - start -->
                            <article class="indicator g-3" data-indicator-id="106">
                              <h3 class="indicator__title title">Чистая прибыль</h3>

                              <!-- год - start -->
                              <div class="indicator__inner g-4-120">
                                <div class="indicator__unit">Год</div>

                                <div class="indicator__name">Цель</div>
                                <div class="indicator__name">Прогноз</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/год - start -->
                                <div class="indicator__value yellow strong">17 031 957</div>
                                <div class="indicator__value yellow strong green">11 773 448</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <div class="indicator__value yellow strong">10 963 449</div>
                                <!-- холдинг/год - end -->

                                <!-- озна-ис/год - start -->
                                <div class="indicator__value">17 031 957</div>
                                <div class="indicator__value green">11 773 448</div>
                                <div class="indicator__value">10 963 449</div>
                                <div class="indicator__value">10 963 449</div>
                                <!-- озна-ис/год - end -->

                                <!-- озна+/год - start -->
                                <div class="indicator__value yellow">17 031 957</div>
                                <div class="indicator__value yellow green">11 773 448</div>
                                <div class="indicator__value yellow">10 963 449</div>
                                <div class="indicator__value yellow">10 963 449</div>
                                <!-- озна+/год - end -->

                                <!-- озна-инжиниринг/год - start -->
                                <div class="indicator__value">17 031 957</div>
                                <div class="indicator__value red">11 773 448</div>
                                <div class="indicator__value">10 963 449</div>
                                <div class="indicator__value">10 963 449</div>
                                <!-- озна-инжиниринг/год - end -->

                                <!-- ак озна/год - start -->
                                <div class="indicator__value">17 031 957</div>
                                <div class="indicator__value green">11 773 448</div>
                                <div class="indicator__value">10 963 449</div>
                                <div class="indicator__value">10 963 449</div>
                                <!-- ак озна/год - end -->
                              </div>
                              <!-- год - end -->

                              <!-- квартал - start -->
                              <div class="indicator__inner g-3-120">
                                <div class="indicator__unit">Квартал</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>
                                <div class="indicator__name">Отк</div>

                                <!-- холдинг/квартал - start -->
                                <div class="indicator__value yellow strong">7 031 957</div>
                                <div class="indicator__value yellow strong green">1 773 448</div>
                                <div class="indicator__value yellow strong">963 449</div>
                                <!-- холдинг/квартал - end -->

                                <!-- озна-ис/квартал - start -->
                                <div class="indicator__value">128 508</div>
                                <div class="indicator__value green">697 910</div>
                                <div class="indicator__value">-30 598</div>
                                <!-- озна-ис/квартал - end -->

                                <!-- озна+/квартал - start -->
                                <div class="indicator__value yellow">1 963 449</div>
                                <div class="indicator__value yellow red">6 152 724</div>
                                <div class="indicator__value yellow">-4 810 725</div>
                                <!-- озна+/квартал - end -->

                                <!-- озна-инжиниринг/квартал - start -->
                                <div class="indicator__value">304 128</div>
                                <div class="indicator__value green">304 128</div>
                                <div class="indicator__value">-907 316</div>
                                <!-- озна-инжиниринг/квартал - end -->

                                <!-- ак озна/квартал - start -->
                                <div class="indicator__value">272 553</div>
                                <div class="indicator__value green">272 553</div>
                                <div class="indicator__value">272 553</div>
                                <!-- ак озна/квартал - end -->
                              </div>
                              <!-- квартал - end -->

                              <!-- месяц - start -->
                              <div class="indicator__inner g-2-120">
                                <div class="indicator__unit">Месяц</div>

                                <div class="indicator__name">План</div>
                                <div class="indicator__name">Факт</div>

                                <!-- холдинг/месяц - start -->
                                <div class="indicator__value yellow strong">1 456 632</div>
                                <div class="indicator__value yellow strong red">291 564</div>
                                <!-- холдинг/месяц - end -->

                                <!-- озна-ис/месяц - start -->
                                <div class="indicator__value">897 564</div>
                                <div class="indicator__value green">-273 410</div>
                                <!-- озна-ис/месяц - end -->

                                <!-- озна+/месяц - start -->
                                <div class="indicator__value yellow">414 068</div>
                                <div class="indicator__value yellow red">18 154</div>
                                <!-- озна+/месяц - end -->

                                <!-- озна-инжиниринг/месяц - start -->
                                <div class="indicator__value">176 505</div>
                                <div class="indicator__value green">15 017</div>
                                <!-- озна-инжиниринг/месяц - end -->

                                <!-- ак озна/месяц - start -->
                                <div class="indicator__value">387 563</div>
                                <div class="indicator__value green">3 137</div>
                                <!-- ак озна/месяц - end -->
                              </div>
                              <!-- месяц - end -->
                            </article>
                            <!-- Чистая прибыль - end -->

                          </div><!--/.table__body-->

                        </div><!--/.table-->

                      </section><!--/.content__box-->

                <section class="content__box">

                    <h2 class="content__subtitle title title--line">
                      <span>Разное</span>
                    </h2>

                    <div class="table">

                      <div class="table__header">

                        <div class="indicator indicator--header">
                          <div class="indicator__unit indicator__unit--padding">Цель</div>

                          <div class="indicator__value yellow strong">Холдинг</div>
                          <div class="indicator__value">ОЗНА-ИС</div>
                          <div class="indicator__value yellow">ОЗНА+</div>
                          <div class="indicator__value">ОЗНА-инжиниринг</div>
                          <div class="indicator__value">АК ОЗНА</div>
                        </div>

                      </div><!--/.table__header-->

                      <div class="table__body js-effect" data-indicator-group="other">

                        <!-- Оборотный капитал - start -->
                        <article class="indicator g-4-120" data-indicator-id="103">
                          <h3 class="indicator__title title">Оборотный капитал</h3>

                          <div class="indicator__name">Цель</div>
                          <div class="indicator__name">Факт</div>
                          <div class="indicator__name">Отк</div>
                          <div class="indicator__name">Дни</div>

                          <!-- холдинг/год - start -->
                          <div class="indicator__value yellow strong">17 031 957</div>
                          <div class="indicator__value yellow strong">11 773 448</div>
                          <div class="indicator__value yellow strong">10 963 449</div>
                          <div class="indicator__value yellow strong">10</div>
                          <!-- холдинг/год - end -->

                          <!-- озна-ис/год - start -->
                          <div class="indicator__value">6 128 508</div>
                          <div class="indicator__value">5 697 910</div>
                          <div class="indicator__value">-430 598</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-ис/год - end -->

                          <!-- озна+/год - start -->
                          <div class="indicator__value yellow">10 963 449</div>
                          <div class="indicator__value yellow">6 152 724</div>
                          <div class="indicator__value yellow">-4 810 725</div>
                          <div class="indicator__value yellow">10</div>
                          <!-- озна+/год - end -->

                          <!-- озна-инжиниринг/год - start -->
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value">-2 907 316</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-инжиниринг/год - end -->

                          <!-- ак озна/год - start -->
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value">10</div>
                          <!-- ак озна/год - end -->

                        </article>
                        <!-- Оборотный капитал - end -->

                        <!-- Запасы - start -->
                        <article class="indicator g-4-120" data-indicator-id="104">
                          <h3 class="indicator__title title">Запасы</h3>

                          <div class="indicator__name">Цель</div>
                          <div class="indicator__name">Факт</div>
                          <div class="indicator__name">Неликв</div>
                          <div class="indicator__name">Дни</div>

                          <!-- холдинг/год - start -->
                          <div class="indicator__value yellow strong">17 031 957</div>
                          <div class="indicator__value yellow strong green">11 773 448</div>
                          <div class="indicator__value yellow strong">10 963 449</div>
                          <div class="indicator__value yellow strong">10</div>
                          <!-- холдинг/год - end -->

                          <!-- озна-ис/год - start -->
                          <div class="indicator__value">6 128 508</div>
                          <div class="indicator__value green">5 697 910</div>
                          <div class="indicator__value">-430 598</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-ис/год - end -->

                          <!-- озна+/год - start -->
                          <div class="indicator__value yellow">10 963 449</div>
                          <div class="indicator__value yellow red">6 152 724</div>
                          <div class="indicator__value yellow">-4 810 725</div>
                          <div class="indicator__value yellow">10</div>
                          <!-- озна+/год - end -->

                          <!-- озна-инжиниринг/год - start -->
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value red">7 304 128</div>
                          <div class="indicator__value">-2 907 316</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-инжиниринг/год - end -->

                          <!-- ак озна/год - start -->
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value red">4 272 553</div>
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value">10</div>
                          <!-- ак озна/год - end -->

                        </article>
                        <!-- Запасы - end -->

                        <!-- Кт.задолженность итого - start -->
                        <article class="indicator g-3-120" data-indicator-id="105152">
                          <h3 class="indicator__title title">Кт.задолженность ИТОГО</h3>

                          <div class="indicator__name">Цель</div>
                          <div class="indicator__name">Факт</div>
                          <div class="indicator__name">Дни</div>

                          <!-- холдинг/год - start -->
                          <div class="indicator__value yellow strong">17 031 957</div>
                          <div class="indicator__value yellow strong green">11 773 448</div>
                          <div class="indicator__value yellow strong">10</div>
                          <!-- холдинг/год - end -->

                          <!-- озна-ис/год - start -->
                          <div class="indicator__value">6 128 508</div>
                          <div class="indicator__value green">5 697 910</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-ис/год - end -->

                          <!-- озна+/год - start -->
                          <div class="indicator__value yellow">10 963 449</div>
                          <div class="indicator__value yellow green">6 152 724</div>
                          <div class="indicator__value yellow">10</div>
                          <!-- озна+/год - end -->

                          <!-- озна-инжиниринг/год - start -->
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value red">7 304 128</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-инжиниринг/год - end -->

                          <!-- ак озна/год - start -->
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value red">4 272 553</div>
                          <div class="indicator__value">10</div>
                          <!-- ак озна/год - end -->

                        </article>
                        <!-- Кт.задолженность итого - end -->

                        <!-- Торговая кт.задолженность - start -->
                        <article class="indicator g-3-120" data-indicator-id="105">
                          <h3 class="indicator__title title">Торговая кт.задолженность</h3>

                          <div class="indicator__name">План</div>
                          <div class="indicator__name">Факт</div>
                          <div class="indicator__name">Дни</div>

                          <!-- холдинг/год - start -->
                          <div class="indicator__value yellow strong">17 031 957</div>
                          <div class="indicator__value yellow strong red">11 773 448</div>
                          <div class="indicator__value yellow strong">10</div>
                          <!-- холдинг/год - end -->

                          <!-- озна-ис/год - start -->
                          <div class="indicator__value">6 128 508</div>
                          <div class="indicator__value red">5 697 910</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-ис/год - end -->

                          <!-- озна+/год - start -->
                          <div class="indicator__value yellow">10 963 449</div>
                          <div class="indicator__value yellow green">6 152 724</div>
                          <div class="indicator__value yellow">10</div>
                          <!-- озна+/год - end -->

                          <!-- озна-инжиниринг/год - start -->
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value green">7 304 128</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-инжиниринг/год - end -->

                          <!-- ак озна/год - start -->
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value green">4 272 553</div>
                          <div class="indicator__value">10</div>
                          <!-- ак озна/год - end -->

                        </article>
                        <!-- Торговая кт.задолженность - end -->

                        <!-- Авансы полученные - start -->
                        <article class="indicator g-3-120" data-indicator-id="152">
                          <h3 class="indicator__title title">Авансы полученные</h3>

                          <div class="indicator__name">План</div>
                          <div class="indicator__name">Факт</div>
                          <div class="indicator__name">Дни</div>

                          <!-- холдинг/год - start -->
                          <div class="indicator__value yellow strong">17 031 957</div>
                          <div class="indicator__value yellow strong red">11 773 448</div>
                          <div class="indicator__value yellow strong">10</div>
                          <!-- холдинг/год - end -->

                          <!-- озна-ис/год - start -->
                          <div class="indicator__value">6 128 508</div>
                          <div class="indicator__value red">5 697 910</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-ис/год - end -->

                          <!-- озна+/год - start -->
                          <div class="indicator__value yellow">10 963 449</div>
                          <div class="indicator__value yellow green">6 152 724</div>
                          <div class="indicator__value yellow">10</div>
                          <!-- озна+/год - end -->

                          <!-- озна-инжиниринг/год - start -->
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value red">7 304 128</div>
                          <div class="indicator__value">10</div>
                          <!-- озна-инжиниринг/год - end -->

                          <!-- ак озна/год - start -->
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value green">4 272 553</div>
                          <div class="indicator__value">10</div>
                          <!-- ак озна/год - end -->

                        </article>
                        <!-- Авансы полученные - end -->

                        <!-- Финансовые инструменты - start -->
                        <article class="indicator g-2-120" data-indicator-id="159">
                          <h3 class="indicator__title title">Финансовые инструменты</h3>

                          <div class="indicator__name">План</div>
                          <div class="indicator__name">Факт</div>

                          <!-- холдинг/год - start -->
                          <div class="indicator__value yellow strong">17 031 957</div>
                          <div class="indicator__value yellow strong">11 773 448</div>
                          <!-- холдинг/год - end -->

                          <!-- озна-ис/год - start -->
                          <div class="indicator__value">6 128 508</div>
                          <div class="indicator__value">5 697 910</div>
                          <!-- озна-ис/год - end -->

                          <!-- озна+/год - start -->
                          <div class="indicator__value yellow">10 963 449</div>
                          <div class="indicator__value yellow">6 152 724</div>
                          <!-- озна+/год - end -->

                          <!-- озна-инжиниринг/год - start -->
                          <div class="indicator__value">7 304 128</div>
                          <div class="indicator__value">7 304 128</div>
                          <!-- озна-инжиниринг/год - end -->

                          <!-- ак озна/год - start -->
                          <div class="indicator__value">4 272 553</div>
                          <div class="indicator__value">4 272 553</div>
                          <!-- ак озна/год - end -->

                        </article>
                        <!-- Финансовые инструменты - end -->

                      </div><!--/.table__body-->

                    </div><!--/.table-->

                </section><!--/.content__box-->
            `
        )
      },2000)

    })
  }

  /**
   * Запрос на сервер для получения сверки показателей
   * @param {Object} data - объект с данными которые будут передаваться на сервер
   * @return {Promise}
   */
  async getCollation(data) {

    console.log(`Сверка показателей: ${data.getAll('indicator')}. за ${data.getAll('month')} месяц(ы). ${data.getAll('year').toString()} года`)

    // try{
    //   const res = await useBxRequest(this.baseUrl, 'МЕТОД', {data})
    //
    //   return res.data
    //
    // } catch (error) {
    //
    //   if(error.status === 'error') {
    //     throw {
    //       functionName : 'getCollation',
    //       ...error
    //     }
    //   }
    //
    //   throw error
    // }

    return await new Promise((resolve,reject) => {

      setTimeout(() => {
        resolve(
          `
                <div class="accordion">

  <!-- Акардион 1 уровня - start -->
  <div class="accordion__head active">
    <span>2023</span>
  </div>

  <div class="accordion__block">

    <!-- Акардион 2 уровня - start -->
    <div class="accordion__head active sPl-106 sFw-400">
      <span>Март</span>
    </div>

    <div class="accordion__block">

      <div class="table">

        <div class="table__header">

          <div class="indicator indicator--header">
            <div class="indicator__unit">Цель</div>

            <div class="indicator__value yellow strong">Холдинг</div>
            <div class="indicator__value">ОЗНА-ИС</div>
            <div class="indicator__value yellow">ОЗНА+</div>
            <div class="indicator__value">ОЗНА-инжиниринг</div>
            <div class="indicator__value">АК ОЗНА</div>
          </div>

        </div><!--/.table__header-->

        <div class="table__body">

          <!-- Входящий денежный поток - start -->
          <article class="indicator g-3">
            <h3 class="indicator__title title">Входящий денежный поток</h3>

            <!-- год - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">6 128 508</div>
              <div class="indicator__value">5 697 910</div>
              <div class="indicator__value">-430 598</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">-2 907 316</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- квартал - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Квартал</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/квартал - start -->
              <div class="indicator__value yellow strong">7 031 957</div>
              <div class="indicator__value yellow strong">1 773 448</div>
              <div class="indicator__value yellow strong">963 449</div>
              <!-- холдинг/квартал - end -->

              <!-- озна-ис/квартал - start -->
              <div class="indicator__value">128 508</div>
              <div class="indicator__value">697 910</div>
              <div class="indicator__value">-30 598</div>
              <!-- озна-ис/квартал - end -->

              <!-- озна+/квартал - start -->
              <div class="indicator__value yellow">1 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/квартал - end -->

              <!-- озна-инжиниринг/квартал - start -->
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">-907 316</div>
              <!-- озна-инжиниринг/квартал - end -->

              <!-- ак озна/квартал - start -->
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <!-- ак озна/квартал - end -->
            </div>
            <!-- квартал - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong red">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow green">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value green">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Входящий денежный поток - end -->

          <!-- Запасы - start -->
          <article class="indicator g-4-120">
            <h3 class="indicator__title title">Запасы</h3>

            <div class="indicator__name">Цель</div>
            <div class="indicator__name">Факт</div>
            <div class="indicator__name">Неликв</div>
            <div class="indicator__name">Дни</div>

            <!-- холдинг/год - start -->
            <div class="indicator__value yellow strong">17 031 957</div>
            <div class="indicator__value yellow strong green">11 773 448</div>
            <div class="indicator__value yellow strong">10 963 449</div>
            <div class="indicator__value yellow strong">10</div>
            <!-- холдинг/год - end -->

            <!-- озна-ис/год - start -->
            <div class="indicator__value">6 128 508</div>
            <div class="indicator__value green">5 697 910</div>
            <div class="indicator__value">-430 598</div>
            <div class="indicator__value">10</div>
            <!-- озна-ис/год - end -->

            <!-- озна+/год - start -->
            <div class="indicator__value yellow">10 963 449</div>
            <div class="indicator__value yellow red">6 152 724</div>
            <div class="indicator__value yellow">-4 810 725</div>
            <div class="indicator__value yellow">10</div>
            <!-- озна+/год - end -->

            <!-- озна-инжиниринг/год - start -->
            <div class="indicator__value">7 304 128</div>
            <div class="indicator__value red">7 304 128</div>
            <div class="indicator__value">-2 907 316</div>
            <div class="indicator__value">10</div>
            <!-- озна-инжиниринг/год - end -->

            <!-- ак озна/год - start -->
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value red">4 272 553</div>
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value">10</div>
            <!-- ак озна/год - end -->

          </article>
          <!-- Запасы - end -->

          <!-- Выручка - start -->
          <article class="indicator g-2">
            <h3 class="indicator__title title">Выручка</h3>

            <!-- год - start -->
            <div class="indicator__inner g-4-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Прогноз</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong red">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">17 031 957</div>
              <div class="indicator__value yellow green">11 773 448</div>
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">10 963 449</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong green">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow red">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value red">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Выручка - end -->

        </div><!--/.table__body-->

      </div><!--/.table-->

    </div>
    <!-- Акардион 2 уровня - end -->

    <!-- Акардион 2 уровня - start -->
    <div class="accordion__head active sPl-106 sFw-400">
      <span>Октябрь</span>
    </div>

    <div class="accordion__block">

      <div class="table">

        <div class="table__header">

          <div class="indicator indicator--header">
            <div class="indicator__unit">Цель</div>

            <div class="indicator__value yellow strong">Холдинг</div>
            <div class="indicator__value">ОЗНА-ИС</div>
            <div class="indicator__value yellow">ОЗНА+</div>
            <div class="indicator__value">ОЗНА-инжиниринг</div>
            <div class="indicator__value">АК ОЗНА</div>
          </div>

        </div><!--/.table__header-->

        <div class="table__body">

          <!-- Входящий денежный поток - start -->
          <article class="indicator g-3">
            <h3 class="indicator__title title">Входящий денежный поток</h3>

            <!-- год - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">6 128 508</div>
              <div class="indicator__value">5 697 910</div>
              <div class="indicator__value">-430 598</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">-2 907 316</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- квартал - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Квартал</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/квартал - start -->
              <div class="indicator__value yellow strong">7 031 957</div>
              <div class="indicator__value yellow strong">1 773 448</div>
              <div class="indicator__value yellow strong">963 449</div>
              <!-- холдинг/квартал - end -->

              <!-- озна-ис/квартал - start -->
              <div class="indicator__value">128 508</div>
              <div class="indicator__value">697 910</div>
              <div class="indicator__value">-30 598</div>
              <!-- озна-ис/квартал - end -->

              <!-- озна+/квартал - start -->
              <div class="indicator__value yellow">1 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/квартал - end -->

              <!-- озна-инжиниринг/квартал - start -->
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">-907 316</div>
              <!-- озна-инжиниринг/квартал - end -->

              <!-- ак озна/квартал - start -->
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <!-- ак озна/квартал - end -->
            </div>
            <!-- квартал - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong red">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow green">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value green">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Входящий денежный поток - end -->

          <!-- Запасы - start -->
          <article class="indicator g-4-120">
            <h3 class="indicator__title title">Запасы</h3>

            <div class="indicator__name">Цель</div>
            <div class="indicator__name">Факт</div>
            <div class="indicator__name">Неликв</div>
            <div class="indicator__name">Дни</div>

            <!-- холдинг/год - start -->
            <div class="indicator__value yellow strong">17 031 957</div>
            <div class="indicator__value yellow strong green">11 773 448</div>
            <div class="indicator__value yellow strong">10 963 449</div>
            <div class="indicator__value yellow strong">10</div>
            <!-- холдинг/год - end -->

            <!-- озна-ис/год - start -->
            <div class="indicator__value">6 128 508</div>
            <div class="indicator__value green">5 697 910</div>
            <div class="indicator__value">-430 598</div>
            <div class="indicator__value">10</div>
            <!-- озна-ис/год - end -->

            <!-- озна+/год - start -->
            <div class="indicator__value yellow">10 963 449</div>
            <div class="indicator__value yellow red">6 152 724</div>
            <div class="indicator__value yellow">-4 810 725</div>
            <div class="indicator__value yellow">10</div>
            <!-- озна+/год - end -->

            <!-- озна-инжиниринг/год - start -->
            <div class="indicator__value">7 304 128</div>
            <div class="indicator__value red">7 304 128</div>
            <div class="indicator__value">-2 907 316</div>
            <div class="indicator__value">10</div>
            <!-- озна-инжиниринг/год - end -->

            <!-- ак озна/год - start -->
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value red">4 272 553</div>
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value">10</div>
            <!-- ак озна/год - end -->

          </article>
          <!-- Запасы - end -->

          <!-- Выручка - start -->
          <article class="indicator g-2">
            <h3 class="indicator__title title">Выручка</h3>

            <!-- год - start -->
            <div class="indicator__inner g-4-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Прогноз</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong red">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">17 031 957</div>
              <div class="indicator__value yellow green">11 773 448</div>
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">10 963 449</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong green">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow red">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value red">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Выручка - end -->

        </div><!--/.table__body-->

      </div><!--/.table-->

    </div>
    <!-- Акардион 2 уровня - end -->

  </div>
  <!-- Акардион 1 уровня - end -->


  <!-- Акардион 1 уровня - start -->
  <div class="accordion__head active">
    <span>2022</span>
  </div>

  <div class="accordion__block">

    <!-- Акардион 2 уровня - start -->
    <div class="accordion__head active sPl-106 sFw-400">
      <span>Март</span>
    </div>

    <div class="accordion__block">

      <div class="table">

        <div class="table__header">

          <div class="indicator indicator--header">
            <div class="indicator__unit">Цель</div>

            <div class="indicator__value yellow strong">Холдинг</div>
            <div class="indicator__value">ОЗНА-ИС</div>
            <div class="indicator__value yellow">ОЗНА+</div>
            <div class="indicator__value">ОЗНА-инжиниринг</div>
            <div class="indicator__value">АК ОЗНА</div>
          </div>

        </div><!--/.table__header-->

        <div class="table__body">

          <!-- Входящий денежный поток - start -->
          <article class="indicator g-3">
            <h3 class="indicator__title title">Входящий денежный поток</h3>

            <!-- год - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">6 128 508</div>
              <div class="indicator__value">5 697 910</div>
              <div class="indicator__value">-430 598</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">-2 907 316</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- квартал - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Квартал</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/квартал - start -->
              <div class="indicator__value yellow strong">7 031 957</div>
              <div class="indicator__value yellow strong">1 773 448</div>
              <div class="indicator__value yellow strong">963 449</div>
              <!-- холдинг/квартал - end -->

              <!-- озна-ис/квартал - start -->
              <div class="indicator__value">128 508</div>
              <div class="indicator__value">697 910</div>
              <div class="indicator__value">-30 598</div>
              <!-- озна-ис/квартал - end -->

              <!-- озна+/квартал - start -->
              <div class="indicator__value yellow">1 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/квартал - end -->

              <!-- озна-инжиниринг/квартал - start -->
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">-907 316</div>
              <!-- озна-инжиниринг/квартал - end -->

              <!-- ак озна/квартал - start -->
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <!-- ак озна/квартал - end -->
            </div>
            <!-- квартал - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong red">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow green">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value green">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Входящий денежный поток - end -->

          <!-- Запасы - start -->
          <article class="indicator g-4-120">
            <h3 class="indicator__title title">Запасы</h3>

            <div class="indicator__name">Цель</div>
            <div class="indicator__name">Факт</div>
            <div class="indicator__name">Неликв</div>
            <div class="indicator__name">Дни</div>

            <!-- холдинг/год - start -->
            <div class="indicator__value yellow strong">17 031 957</div>
            <div class="indicator__value yellow strong green">11 773 448</div>
            <div class="indicator__value yellow strong">10 963 449</div>
            <div class="indicator__value yellow strong">10</div>
            <!-- холдинг/год - end -->

            <!-- озна-ис/год - start -->
            <div class="indicator__value">6 128 508</div>
            <div class="indicator__value green">5 697 910</div>
            <div class="indicator__value">-430 598</div>
            <div class="indicator__value">10</div>
            <!-- озна-ис/год - end -->

            <!-- озна+/год - start -->
            <div class="indicator__value yellow">10 963 449</div>
            <div class="indicator__value yellow red">6 152 724</div>
            <div class="indicator__value yellow">-4 810 725</div>
            <div class="indicator__value yellow">10</div>
            <!-- озна+/год - end -->

            <!-- озна-инжиниринг/год - start -->
            <div class="indicator__value">7 304 128</div>
            <div class="indicator__value red">7 304 128</div>
            <div class="indicator__value">-2 907 316</div>
            <div class="indicator__value">10</div>
            <!-- озна-инжиниринг/год - end -->

            <!-- ак озна/год - start -->
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value red">4 272 553</div>
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value">10</div>
            <!-- ак озна/год - end -->

          </article>
          <!-- Запасы - end -->

          <!-- Выручка - start -->
          <article class="indicator g-2">
            <h3 class="indicator__title title">Выручка</h3>

            <!-- год - start -->
            <div class="indicator__inner g-4-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Прогноз</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong red">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">17 031 957</div>
              <div class="indicator__value yellow green">11 773 448</div>
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">10 963 449</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong green">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow red">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value red">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Выручка - end -->

        </div><!--/.table__body-->

      </div><!--/.table-->

    </div>
    <!-- Акардион 2 уровня - end -->

    <!-- Акардион 2 уровня - start -->
    <div class="accordion__head active sPl-106 sFw-400">
      <span>Октябрь</span>
    </div>

    <div class="accordion__block">

      <div class="table">

        <div class="table__header">

          <div class="indicator indicator--header">
            <div class="indicator__unit">Цель</div>

            <div class="indicator__value yellow strong">Холдинг</div>
            <div class="indicator__value">ОЗНА-ИС</div>
            <div class="indicator__value yellow">ОЗНА+</div>
            <div class="indicator__value">ОЗНА-инжиниринг</div>
            <div class="indicator__value">АК ОЗНА</div>
          </div>

        </div><!--/.table__header-->

        <div class="table__body">

          <!-- Входящий денежный поток - start -->
          <article class="indicator g-3">
            <h3 class="indicator__title title">Входящий денежный поток</h3>

            <!-- год - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">6 128 508</div>
              <div class="indicator__value">5 697 910</div>
              <div class="indicator__value">-430 598</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">7 304 128</div>
              <div class="indicator__value">-2 907 316</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <div class="indicator__value">4 272 553</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- квартал - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Квартал</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/квартал - start -->
              <div class="indicator__value yellow strong">7 031 957</div>
              <div class="indicator__value yellow strong">1 773 448</div>
              <div class="indicator__value yellow strong">963 449</div>
              <!-- холдинг/квартал - end -->

              <!-- озна-ис/квартал - start -->
              <div class="indicator__value">128 508</div>
              <div class="indicator__value">697 910</div>
              <div class="indicator__value">-30 598</div>
              <!-- озна-ис/квартал - end -->

              <!-- озна+/квартал - start -->
              <div class="indicator__value yellow">1 963 449</div>
              <div class="indicator__value yellow">6 152 724</div>
              <div class="indicator__value yellow">-4 810 725</div>
              <!-- озна+/квартал - end -->

              <!-- озна-инжиниринг/квартал - start -->
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">304 128</div>
              <div class="indicator__value">-907 316</div>
              <!-- озна-инжиниринг/квартал - end -->

              <!-- ак озна/квартал - start -->
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <div class="indicator__value">272 553</div>
              <!-- ак озна/квартал - end -->
            </div>
            <!-- квартал - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong red">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow green">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value green">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Входящий денежный поток - end -->

          <!-- Запасы - start -->
          <article class="indicator g-4-120">
            <h3 class="indicator__title title">Запасы</h3>

            <div class="indicator__name">Цель</div>
            <div class="indicator__name">Факт</div>
            <div class="indicator__name">Неликв</div>
            <div class="indicator__name">Дни</div>

            <!-- холдинг/год - start -->
            <div class="indicator__value yellow strong">17 031 957</div>
            <div class="indicator__value yellow strong green">11 773 448</div>
            <div class="indicator__value yellow strong">10 963 449</div>
            <div class="indicator__value yellow strong">10</div>
            <!-- холдинг/год - end -->

            <!-- озна-ис/год - start -->
            <div class="indicator__value">6 128 508</div>
            <div class="indicator__value green">5 697 910</div>
            <div class="indicator__value">-430 598</div>
            <div class="indicator__value">10</div>
            <!-- озна-ис/год - end -->

            <!-- озна+/год - start -->
            <div class="indicator__value yellow">10 963 449</div>
            <div class="indicator__value yellow red">6 152 724</div>
            <div class="indicator__value yellow">-4 810 725</div>
            <div class="indicator__value yellow">10</div>
            <!-- озна+/год - end -->

            <!-- озна-инжиниринг/год - start -->
            <div class="indicator__value">7 304 128</div>
            <div class="indicator__value red">7 304 128</div>
            <div class="indicator__value">-2 907 316</div>
            <div class="indicator__value">10</div>
            <!-- озна-инжиниринг/год - end -->

            <!-- ак озна/год - start -->
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value red">4 272 553</div>
            <div class="indicator__value">4 272 553</div>
            <div class="indicator__value">10</div>
            <!-- ак озна/год - end -->

          </article>
          <!-- Запасы - end -->

          <!-- Выручка - start -->
          <article class="indicator g-2">
            <h3 class="indicator__title title">Выручка</h3>

            <!-- год - start -->
            <div class="indicator__inner g-4-120">
              <div class="indicator__unit">Год</div>

              <div class="indicator__name">Цель</div>
              <div class="indicator__name">Прогноз</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/год - start -->
              <div class="indicator__value yellow strong">17 031 957</div>
              <div class="indicator__value yellow strong red">11 773 448</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <div class="indicator__value yellow strong">10 963 449</div>
              <!-- холдинг/год - end -->

              <!-- озна-ис/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-ис/год - end -->

              <!-- озна+/год - start -->
              <div class="indicator__value yellow">17 031 957</div>
              <div class="indicator__value yellow green">11 773 448</div>
              <div class="indicator__value yellow">10 963 449</div>
              <div class="indicator__value yellow">10 963 449</div>
              <!-- озна+/год - end -->

              <!-- озна-инжиниринг/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- озна-инжиниринг/год - end -->

              <!-- ак озна/год - start -->
              <div class="indicator__value">17 031 957</div>
              <div class="indicator__value green">11 773 448</div>
              <div class="indicator__value">10 963 449</div>
              <div class="indicator__value">10 963 449</div>
              <!-- ак озна/год - end -->
            </div>
            <!-- год - end -->

            <!-- месяц - start -->
            <div class="indicator__inner g-3-120">
              <div class="indicator__unit">Месяц</div>

              <div class="indicator__name">План</div>
              <div class="indicator__name">Факт</div>
              <div class="indicator__name">Отк</div>

              <!-- холдинг/месяц - start -->
              <div class="indicator__value yellow strong">1 456 632</div>
              <div class="indicator__value yellow strong green">291 564</div>
              <div class="indicator__value yellow strong">-1 165 068</div>
              <!-- холдинг/месяц - end -->

              <!-- озна-ис/месяц - start -->
              <div class="indicator__value">897 564</div>
              <div class="indicator__value green">-273 410</div>
              <div class="indicator__value">-624 154</div>
              <!-- озна-ис/месяц - end -->

              <!-- озна+/месяц - start -->
              <div class="indicator__value yellow">414 068</div>
              <div class="indicator__value yellow red">18 154</div>
              <div class="indicator__value yellow">-395 914</div>
              <!-- озна+/месяц - end -->

              <!-- озна-инжиниринг/месяц - start -->
              <div class="indicator__value">176 505</div>
              <div class="indicator__value red">15 017</div>
              <div class="indicator__value">-161 488</div>
              <!-- озна-инжиниринг/месяц - end -->

              <!-- ак озна/месяц - start -->
              <div class="indicator__value">387 563</div>
              <div class="indicator__value red">3 137</div>
              <div class="indicator__value">-384 426</div>
              <!-- ак озна/месяц - end -->
            </div>
            <!-- месяц - end -->

          </article>
          <!-- Выручка - end -->

        </div><!--/.table__body-->

      </div><!--/.table-->

    </div>
    <!-- Акардион 2 уровня - end -->

  </div>
  <!-- Акардион 1 уровня - end -->

</div><!--./accordion-->
            `
        )
      },2000)

    })
  }


}

export const apiService = new ApiService('')
