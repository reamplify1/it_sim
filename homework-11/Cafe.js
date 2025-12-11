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
    console.log(drink.bringDrink());
  }
}

