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

async function getUsers() {
  const storedUsers = localStorage.getItem("users");

  if (storedUsers) {
    return JSON.parse(storedUsers);
  }

  setLoadingMessage(".container__loading-text", true);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const response = await fetch("users.json");

    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }

    const users = await response.json();
    console.log(users);
    return users;
  } catch {
    throw new Error("ошибка загрузки пользователей, данные не получены");
  } finally {
    setLoadingMessage(".container__loading-text", false);
  }
}

let usersArr = await getUsers();

function loadUsers(arr) {
  localStorage.setItem("users", JSON.stringify(arr));

  renderUsers(arr);
}

function renderUsers(arr) {
  const userContainer = document.querySelector(".container__user-list");
  const userTemplate = document.querySelector(".user-template");

  userContainer.innerHTML = "";

  arr.forEach((user) => {
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

function deleteUser(id) {
  const usersInStorage = localStorage.getItem("users");
  const parsedUsers = JSON.parse(usersInStorage);

  const filteredUsers = parsedUsers.filter((user) => user.id != id);

  localStorage.setItem("users", JSON.stringify(filteredUsers));

  if (filteredUsers.length === 0) {
    localStorage.removeItem("users");
  }

  renderUsers(filteredUsers);
}

function deleteAllUsers() {
  const deleteAllBtn = document.querySelector(".container__delete-btn");
  const USERS_KEY = "users";

  deleteAllBtn.addEventListener("click", () => {
    localStorage.removeItem(USERS_KEY);
    renderUsers([]);
  });
}

function refreshUsers(arr) {
  const buttonRefresh = document.querySelector(".container__refresh-btn");

  buttonRefresh.addEventListener("click", () => {
    renderUsers(arr);
    loadUsers(arr);
  });
}

function setLoadingMessage(className, isVisible) {
  const text = document.querySelector(className);
  if (!text) return;

  text.classList.toggle("text__visible", isVisible);
}

loadUsers(usersArr);
deleteAllUsers();
refreshUsers(usersArr);
