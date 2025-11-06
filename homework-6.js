// 3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее. Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.

const person = {
  firstName: "Sergey",
  lastName: "An",
  country: "Kazakhstan",
  isMarried: true,
  hasPet: false,
  favoriteFood: ["pizza", "barbeque"],
  skills: ["html", "css", "javascript"],
};

// 4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). Добавьте дополнительное свойство - владелец авто, значением которого будет объект, описанный в пункте №3. Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const car = {
  brand: "Kia",
  model: "K5",
  year: 2021,
  color: "black",
  transmission: "automatic",
};

car.owner = person;

console.log(car);

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

const hasMaxSpeed = (obj) => {
  if ("maxSpeed" in obj) {
    return;
  } else {
    obj.maxSpeed = 200;
  }
};

hasMaxSpeed(car);

console.log(car);

// 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showPropertyByKey(obj, key) {
  console.log(`${key}: ${obj[key]}`);
}

showPropertyByKey(car, "year");

// 7. Создать массив, который содержит названия продуктовых карточек ваших товаров (просто строки)

const products = ["milk", "bread", "fish", "meat", "juice"];

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). После, используя известный нам метод массив, добавить еще одну книгу в конец списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const movies = [
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    genre: "triller",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "crime drama",
  },
  {
    title: "Inception",
    director: "Christopher Nolanr",
    year: 2010,
    genre: "science fiction",
  },
];

movies.push({
  title: "Blade Runner 2049",
  director: "Denis Villeneuve",
  year: 2017,
  genre: "science fiction",
});

console.log(movies);

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один

const marvelMovies = [
  {
    title: "Iron Man",
    director: "Jon Favreau",
    year: 2008,
    genre: "superhero",
  },
  {
    title: "Avengers: Endgame",
    director: "Anthony and Joe Russo",
    year: 2019,
    genre: "superhero",
  },
];

const allMovies = [...movies, ...marvelMovies];

console.log(allMovies);

// 10. Почитать про метод массива — forEach. Написать функцию, которая принимает массив сущностей с задания №8. Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).

function addIsRareProperty(arr) {
  arr.forEach((elem) => {
    if (elem["year"] >= 2000) {
      elem.isRare = true;
    } else {
      elem.isRare = false;
    }
  });
}

addIsRareProperty(movies);

console.log(movies);
