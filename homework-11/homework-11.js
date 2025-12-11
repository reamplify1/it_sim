import { Tea } from "./Tea.js";
import { Coffee } from "./Coffee.js";
import { Lemonade } from "./Lemonade.js";
import { Cafe } from "./Cafe.js";


const cafe = new Cafe("starbucks", "винница, проспект космонавтов 43")
const tea = new Tea("Чай с малиной", "0.5л", "2$", "95 градусов", "чай с жасмином")
const coffee = new Coffee('Каппучино', "0.3", "3$", "80градусов", "миндальное молоко", "арабика")
const lemonade = new Lemonade("лимонад", "1л", "1.5$", "-2 градуса", "1 долька лимона", "5г сахара")

console.log(cafe.getCafeInfo());
tea.changeTemperature('85 градусов');
cafe.orderDrink(tea)
cafe.orderDrink(lemonade)