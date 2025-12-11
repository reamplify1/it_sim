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

  #getDrinkInfo() {
    console.log(`name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.getDrinkTemperature()}`);
  }

  make() {
    this.#makeDrink();
  }

}

class Tea extends Drink {
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
    console.log(`Добавляем ${this.teaLeaves}, добавляем воду с температурой ${this.getDrinkTemperature()}, подаем ${this.name}`);
  }

  make() {
  this.#makeDrink();
  }

  #getDrinkInfo() {
    console.log(
      `name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.getDrinkTemperature()}, tea: ${this.teaLeaves}`
    );
  }

  bringDrink() {
  return `Получите напиток: ${this.name}`;
}

}

class Cofe extends Drink {
  constructor(name, size, price, temperature, milk, coffeeBeans) {
    super(name, size, price, temperature);
    this.milk = milk;
    this.coffeeBeans = coffeeBeans;
  }

  grindCoffee() {
    console.log(`${this.coffeeBeans} в кофемолку, затем кнопочка нажимается и вжух вжух`);
  }

  #makeDrink() {
    return `{Берем ${this.grindCoffee()}, нагреваем воду до ${this.getDrinkTemperature()}, взбиваем ${this.milk}, подаем ${this.name}`;
  }

  #getDrinkInfo() {
    console.log(
      `name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.getDrinkTemperature()}, milk: ${
        this.milk
      }, coffee beans: ${this.coffeeBeans}`
    );
  }
  make() {
  this.#makeDrink();
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, lemon, sugar) {
    super(name, size, price, temperature);
    this.lemon = lemon;
    this.sugar = sugar;
  }
  я;
  #makeDrink() {
    console.log(`Вода при температуре ${this.getDrinkTemperature()} смешивается с ${this.lemon} и ${this.sugar}`);
  }

  #getDrinkInfo() {
    return;
    `name: ${this.name}, size:${this.size}, price: ${this.price}, temperature: ${this.getDrinkTemperature()}, sugar: ${this.sugar}`;
  }
    make() {
  this.#makeDrink();
  }
}

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Кафе с названием ${this.name}, расположено по адресу:${this.location}`;
  }

  orderDrink(drink) {
    drink.make();
    console.log(drink.bringDrink())
  }
}
