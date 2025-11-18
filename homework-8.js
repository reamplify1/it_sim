// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

import { products } from "./data/product-cards.js";

const cardContainer = document.querySelector(".card-container");
const productTemplate = document.querySelector(".product-template");

products.forEach((product) => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector(".product-img").src = product.img;
  productClone.querySelector(".product-category").textContent =
    product.category;
  productClone.querySelector(".product-name").textContent = product.name;
  productClone.querySelector(".product-description").textContent =
    product.description;
  productClone.querySelector(".product-price").textContent = product.price;

  const ul = productClone.querySelector(".product-compound");

  product.ingredients.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  cardContainer.appendChild(productClone);
});

// 4*. Подумать, как можно оптимизировать дублирование querySelector, textContent и прочего, о чем говорилось на лекции. 1 вариант - маппинг, 2 вариант - использование data-атрибутов - хз

const productMap = {
  img: ".product-img",
  category: ".product-category",
  name: ".product-name",
  description: ".product-description",
  price: ".product-price",
  ingredients: ".product-compound",
};

products.forEach((product) => {
  const productClone = productTemplate.content.cloneNode(true);

  for (let key in productMap) {
    const selector = productMap[key];
    const element = productClone.querySelector(selector);

    if (element) {
      if (key === "img") {
        element.src = product[key];
      } else if (key === "ingredients") {
        product[key].forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          element.appendChild(li);
        });
      } else {
        element.textContent = product[key];
      }
    }
  }
  cardContainer.appendChild(productClone);
});
// без состава - не смог его сделать
// 5. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productsStr = products.reduce((acc, product) => {
  acc += `${product.name};`;
  return acc;
}, "");

console.log(productsStr);

// 6. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsStr2 = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(productsStr2);

// 7*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if)

const numberOfProducts = prompt("Сколько карточек отобразить? От 1 до 5");

if (numberOfProducts === null) {
  alert("Вы ничего не ввели. Введите нужное число");
  location.reload();
} else if (numberOfProducts.trim() === "") {
  alert("Вы ввели пустоту. Введите нужное число");
  location.reload();
} else if (isNaN(numberOfProducts)) {
  alert("Введите число");
  location.reload();
} else if (numberOfProducts > products.length) {
  alert("Вы ввели слишком большое число");
  document.body.style.display = "none";
  location.reload();
}

products
  .reduce((acc, product, index) => {
    if (index < numberOfProducts) {
      acc.push(product);
    }
    return acc;
  }, [])
  .forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector(".product-img").src = product.img;
    productClone.querySelector(".product-category").textContent =
      product.category;
    productClone.querySelector(".product-name").textContent = product.name;
    productClone.querySelector(".product-description").textContent =
      product.description;
    productClone.querySelector(".product-price").textContent = product.price;

    const ul = productClone.querySelector(".product-compound");

    product.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    cardContainer.appendChild(productClone);
  });
