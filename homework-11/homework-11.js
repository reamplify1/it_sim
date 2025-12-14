import { Tea } from "./Tea.js";
import { Coffee } from "./Coffee.js";
import { Lemonade } from "./Lemonade.js";
import { Cafe } from "./Cafe.js";


const cafe = new Cafe("starbucks", "винница, проспект космонавтов 43")
const tea = new Tea("Чай с малиной", "0.5л", "2$", 95, "чай с жасмином")
const coffee = new Coffee('Каппучино', "0.3", "3$", 80, "миндальное молоко", "арабика")
const lemonade = new Lemonade("лимонад", "1л", "1.5$", -2, "1 долька лимона", "5г сахара")

console.log(cafe.getCafeInfo());
tea.temperature = 85
console.log(tea);
cafe.orderDrink(tea)
cafe.orderDrink(lemonade)
cafe.orderDrink(coffee)