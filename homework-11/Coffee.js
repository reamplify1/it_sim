import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, milk, coffeeBeans) {
    super(name, size, price, temperature);
    this.milk = milk;
    this.coffeeBeans = coffeeBeans;
  }

  grindCoffee() {
    console.log(`${this.coffeeBeans} помещается в кофемолку, затем кнопочка нажимается и вжух вжух`);
  }

  #makeDrink() {
    return `{Берем ${this.grindCoffee()}, нагреваем воду до ${this.temperature}, взбиваем ${this.milk}, подаем ${this.name}`;
  }

  getDrinkInfo() {
    console.log(
      `name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.temperature}, milk: ${
        this.milk
      }, coffee beans: ${this.coffeeBeans}`
    );
  }
  make() {
    this.#makeDrink();
  }
}
