import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, lemon, sugar) {
    super(name, size, price, temperature);
    this.lemon = lemon;
    this.sugar = sugar;
  }

  #makeDrink() {
    console.log(`Вода при температуре ${this.temperature} смешивается с ${this.lemon} и ${this.sugar}`);
  }

  getDrinkInfo() {
    return `name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.temperature}, sugar: ${this.sugar}`;
  }

  make(){
    this.#makeDrink();
  }
}