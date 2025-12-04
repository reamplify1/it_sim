// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

import { products } from "./data/product-cards.js";

const cardContainer = document.querySelector(".card-container");
const productTemplate = document.querySelector(".product-template");


function renderProducts(array) {
  array.forEach((product) => {
    
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector(".product-img").src = `img/product-cards/${product.imageName}.png`;
    productClone.querySelector(".product-category").textContent = product.category;
    productClone.querySelector(".product-name").textContent = product.name;
    productClone.querySelector(".product-description").textContent = product.description;
    productClone.querySelector(".product-price").innerHTML = `${product.price}&nbsp;₽`;

    const ul = productClone.querySelector(".product-compound");

    product.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    cardContainer.appendChild(productClone);
  });
}


function renderProducts2(products) {
  products.forEach((product) => {
    const ingredientsHTML = product.ingredients
      .map((ingredient) => {
        return `<li>${ingredient}</li>`;
      })
      .join("");

    const imgPath = `img/product-cards/${product.imageName}.png`

    const cardHTML = `
    <div class="product-card">
      <img class="product-img" src="${imgPath}" alt="${product.name}" />

      <span class="product-category">${product.category}</span>

      <h3 class="product-name">${product.name}</h3>

      <p class="product-description">${product.description}</p>
      <span>Состав:</span>
      <ul class="product-compound">${ingredientsHTML}</ul>
      <div class="product-price-container">
        <span class="product-price-label">Цена</span>
        <span class="product-price">${product.price}&nbsp;₽</span>
      </div>
    </div>
  `;

    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
};

// 4*. Подумать, как можно оптимизировать дублирование querySelector, textContent и прочего, о чем говорилось на лекции. 1 вариант - маппинг, 2 вариант - использование data-атрибутов - хз

function renderProducts3(products) {
  const productMap = {
    imageName: ".product-img",
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
      const imgPath = `img/product-cards/${product.img}.png`

      if (element) {
        if (key === "imageName") {
          element.src = imgPath;
        } else if (key === "ingredients") {
          product[key].forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            element.appendChild(li);
          });
        } else if (key === "price") {
          element.innerHTML = `${product[key]}&nbsp;₽`;
        } else {
          element.textContent = product[key];
        }
      }
    }
    cardContainer.appendChild(productClone);
  });
}

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

function startApp() {
  let numberOfProducts = prompt("Сколько карточек отобразить? От 1 до 5");

  if (numberOfProducts === null) {
    alert("Вы ничего не ввели. Введите нужное число");
    location.reload();
  }

  numberOfProducts = numberOfProducts.trim();

  if (numberOfProducts === "") {
    alert("Вы ввели пустоту. Введите нужное число");
    location.reload();
  } else if (isNaN(numberOfProducts)) {
    alert("Введите число");
    location.reload();
  } else if (numberOfProducts > products.length || numberOfProducts < 0) {
    alert("Вы ввели неподходящее число");
    document.body.style.display = "none";
    location.reload();
  }

  const productsToRender = products.slice(0, numberOfProducts)
  renderProducts(productsToRender);

}

startApp();

export { renderProducts, renderProducts2, renderProducts3, startApp }