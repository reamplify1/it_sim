import { comments } from "./comments.js"; // импорт комментариев

// Уровень 1:

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter((number) => number >= 5);

console.log(numbersFromFive);

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const movies = ["Inception", "Fight Club", "Blade Runner 2049"];

const hasInception = movies.includes("Inception");

console.log(hasInception);

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = (array) => array.reverse();

console.log(reverseArray(numbers));
console.log(reverseArray(movies));

// уровень 2

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const commentsWithCom = comments.filter((comment) =>
  comment.email.includes(".com")
);

console.log(commentsWithCom);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const commentsWithPostId = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

console.log(commentsWithPostId);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const commentsIdWithName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

console.log("9 task", commentsIdWithName);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const commentsWithIsInvalid = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

console.log("task-10 :", commentsWithIsInvalid);

// Уровень 3:

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsMap = comments.map((comment) => comment.email);

console.log("task-11 with map", emailsMap);

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log("task-11 with reduce", emailsReduce);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsStrMap = emailsMap.join();

const emailsStrReduce = emailsReduce.toString();

console.log(emailsStrMap);
console.log(emailsStrReduce);
