import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, teaLeaves) {
    super(name, size, price, temperature);
    this.teaLeaves = teaLeaves;
  }

  chooseBlackOrGreen() {
    const result = Math.random() < 0.5 ? "Орел" : "Решка";
    if (result === "Орел") {
      console.log("Вы выбрали черный чай");
    } else {
      console.log("Зеленый чай успокаивает, нормально.");
    }
  }

  #makeDrink() {
    console.log(`Добавляем ${this.teaLeaves}, добавляем воду с температурой ${this.temperature}, подаем ${this.name}`);
  }

  make() {
    this.#makeDrink();
  }

  getDrinkInfo() {
    console.log(
      `name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.temperature}, tea: ${this.teaLeaves}`
    );
  }

}
