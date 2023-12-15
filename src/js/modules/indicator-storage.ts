
class IndicatorStorage {

  /**
   * Достать по ключу из хранилища
   */
  static getStorage(key: string): Array<number> {

    return JSON.parse(localStorage.getItem(key))

  }

  /**
   * Положить по ключу в хранилища
   */
  static setStorage(key: string, value: Array<number>){

    localStorage.setItem(key,JSON.stringify(value))

  }

  protected readonly _key: string

  constructor(key: string) {
    this._key = key
  }

  /**
   * Достать массив индикаторов
   */
  public getIndicators(): Array<number> {

    return IndicatorStorage.getStorage(this._key)

  }

  /**
   * Обновить массов индиваторов
   * @param indicators
   */
  public setIndicators(indicators : Array<number>): void {

    IndicatorStorage.setStorage(this._key, indicators)

  }

  /**
   * Проверяет есть ли ключ в хранилище
   */
  public isKey() : boolean {
    return !!IndicatorStorage.getStorage(this._key)
  }

  /**
   * Количество индикаторов
   */
  public indicatorsLength() : number {
    return IndicatorStorage.getStorage(this._key).length
  }
}

export default IndicatorStorage
