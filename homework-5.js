// 3. Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль "Сейчас в X температура  — Y градусов по Цельсию"

const getWeatherByCity = (city, temperature) =>
  console.log(
    `Сейчас в ${city} температура ${temperature} градусов по Цельсию`
  );

getWeatherByCity("Винница", 38);

// 4. Создать переменную, которая хранит внутри себя скорость звука (гуглим). Создать функцию, которая принимает 1 параметр - скорость, внутри функции происходит проверка: если переданная скорость выше скорости звука - выводим лог "Сверхзвуковая скорость", если ниже - "Дозвуковая скорость"

const SOUND_SPEED = 343;

function showSpeed(speed) {
  if (speed > SOUND_SPEED) {
    console.log("Сверхзвуковая скорость");
  } else if (speed < SOUND_SPEED) {
    console.log("Дозвуковая скорость");
  } else {
    console.log("Это сверхзвук!");
  }
}

showSpeed(228);

// 5. Создать переменную, которая содержит цену какого-нибудь продукта (на ваше усмотрение). Далее создаем функцию, которая принимает 1 параметр - текущий бюджет, внутри функции происходит проверка: если бюджет превышает цену товара - выводим лог "(ваше название товара) приобретён. Спасибо за покупку!", если нет - обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс".

const productName = "Билет";
const productPrice = 100;

const purchaseProduct = (budget) => {
  if (budget >= productPrice) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const shortage = productPrice - budget;
    console.log(`Вам не хватает ${shortage}$, пополните баланс`);
  }
};

purchaseProduct(20);

// Для улучшения аналитических способностей:
// 6. Создать 1 функцию и именовать её по своему усмотрению
// 7. Создать 3 переменн (без разницы каких) и именовать их по своему усмотрениюых

let homework, tests, finalProject;

function calcAverageGrade(homework, tests, finalProject) {
  let averageGrade = Math.round((homework + tests + finalProject) / 3);
  return averageGrade;
}

console.log("Средняя оценка: " + calcAverageGrade(25, 87, 99));
