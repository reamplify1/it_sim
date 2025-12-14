export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Кафе с названием ${this.name}, расположено по адресу:${this.location}`;
  }

  bringDrink(drink) {
    return `Получите напиток: ${drink.name}`;
  }

  orderDrink(drink) {
    drink.getDrinkInfo();
    drink.make();
    console.log(this.bringDrink(drink));
  }
}
