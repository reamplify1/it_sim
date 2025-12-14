export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  presentDrink() {
    console.log(`Презентация напитка ${this.name}`);
  }

  #makeDrink() {
    console.log(`{Добавляем ингридиенты, нагреваем воду до ${this.temperature}, подаем ${this.name}`);
  }

  get temperature() {
    return this.#temperature;
  }

  set temperature(val) {
    if (typeof val !== 'number') {
      throw new Error('Ошибочка с температурой')
    }
    this.#temperature = val;
    console.log(`Температура ${this.name} изменена на ${val}`);
  }

  getDrinkInfo() {
    console.log(`name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.temperature}`);
  }

  make() {
    this.#makeDrink();
  }
}
