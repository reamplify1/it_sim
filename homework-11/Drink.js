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
    console.log(`{Добавляем ингридиенты, нагреваем воду до ${this.getDrinkTemperature()}, подаем ${this.name}`);
  }

  getDrinkTemperature() {
    return this.#temperature;
  }

  #setDrinkTemperature(val) {
    this.#temperature = val;
  }

  getDrinkInfo() {
    console.log(`name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.getDrinkTemperature()}`);
  }

  make() {
    this.#makeDrink();
  }
}