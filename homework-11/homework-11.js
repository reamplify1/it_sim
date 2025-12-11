import { Tea } from "./Tea.js";
import { Coffee } from "./Coffee.js";
import { Lemonade } from "./Lemonade.js";
import { Cafe } from "./Cafe.js";


const cafe = new Cafe("starbucks", "винница 123")
const tea = new Tea("Чай с малиной", "0.5л", "2$", "95 градусов", "чай с жасмином")
console.log(cafe.orderDrink(tea))