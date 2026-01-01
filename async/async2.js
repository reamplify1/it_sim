// import users from './users.json';

// // import users from './users.json' assert { type: "json" };
// 2. Реализовать данную концепцию:

//   При переходе на async.html мы отображаем по центру страницы строку: "Данные загружаются". Это в том случае, если локальное хранилище не заполнено данными и мы еще не сделали запрос.

//   Что бы запросить данные - мы должны сделать запрос через fetch (используйте setTimeout для симуляции длительной загрузки) к нашему json файлу и получив их - сохранить в локальное хранилище (если их там не было при загрузке страницы. Если данные  изначально были в локальном хранилище, то делать запрос — нет смысла).

//   Отобразить пользователей в виде карточек, по центру страницы, убрав надпись: "данные загружаются". Реализовать кнопки для управления пользователями (Удалить все карточки, удалить определенную карточку, получить все карточки)

//   Все данные должны быть синхронизированы с локальным хранилищем. Если вы удалили карточку — то после перезагрузки страницы их должно быть то же количество.

//   Обработать различные сценарии (отображать ошибку через new Error, если данные не загрузились и отображать текст на странице "Ошибка при загрузке данных" и так далее, отображать информационное сообщение, если пользователь хочет получить всех пользователей, а у него отображены и так все пользователи  и т.д.)

// Ключевой результат:
// Если данных нет — показываем пользователю сообщение про загрузку
// Данные не загрузились — отображаем ошибку
// Данные загрузились или меняются — отображаем и синхронизируем с локальным хранилищем


function saveUsers() {
  const savedUsers = localStorage.getItem("users");
  const loadingText = document.querySelector(".container__loading-text");

  if (savedUsers) {
    loadingText.classList.remove("text__visible");
    return Promise.resolve(JSON.parse(savedUsers));
  } else {
    loadingText.classList.add("text__visible");
  }

  return fetch("users.json")
    .then((response) => response.json())
    .then((json) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem("users", JSON.stringify(json));
          loadingText.classList.remove("text__visible");
          resolve(json);
        }, 2000);
      });
    })
    .catch((err) => {
      console.error("Ошибка при загрузке данных:", err);
      loadingText.textContent = "Ошибка при загрузке данных";
    });
}


saveUsers().then((users) => {
  renderUsers(users);
  console.log(users);
});

function renderUsers(users) {

  const userContainer = document.querySelector(".container__user-list");
  const userTemplate = document.querySelector(".user-template");

  userContainer.innerHTML = "";

  users.forEach((user) => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.querySelector(".user-name").textContent = user.name;
    userClone.querySelector(".user-email").textContent = user.email;
    userClone.querySelector(".user-age").textContent = user.age;

    const deleteBtn = userClone.querySelector(".delete-user__button");

    deleteBtn.dataset.userId = user.id;
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    userContainer.appendChild(userClone);
  });
}

function deleteUser(userId) {
  const users = JSON.parse(localStorage.getItem("users"));

  const filteredUsers = users.filter((user) => user.id !== userId);

  localStorage.setItem("users", JSON.stringify(filteredUsers));

  renderUsers(filteredUsers);
}

function refreshUsers() {
  const refreshButton = document.querySelector(".container__refresh-btn");

  refreshButton.addEventListener("click", () => {
    fetch("users.json")
      .then((res) => res.json())
      .then((users) => {
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers(users);
      })
      .catch(() => {
        throw new Error("Ошибка при загрузке данных");
      });
  });
}

refreshUsers();

function deleteAllUsers() {
  const userContainer = document.querySelector(".container__user-list");
  const deleteAllUsersBtn = document.querySelector(".container__delete-btn");

  deleteAllUsersBtn.addEventListener("click", () => {
    localStorage.clear();
    userContainer.innerHTML = "";
  });
}

deleteAllUsers();
