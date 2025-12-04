// Отдельная функция для отображения в консоль логе пришедших данных после отправки формы. Используется в футере, форме регистрации, а так же в модальном окне

function showDataInConsoleLog(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  return data;
}

// 4. К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }

const emailForm = document.querySelector("#footer-form");

emailForm.addEventListener("submit", (e) => {
  showDataInConsoleLog(e);
});

// 5. Создать форму для регистрации. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля. Используйте <label> для того, что бы указать пользователю, какое поле за что отвечает. Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста) Разрешается добавить поля на ваше усмотрение. Все поля должны иметь валидацию. Если пользователь ввел два разных пароля - мы должны предупредить его о том, что регистрация отклонена. Если регистрация успешна - также выводим объект с свойствами и их значениями, как в задании №4. Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date())

let registeredUser;

function registerNewUser() {
  const registerForm = document.querySelector("#register-form");
  const registerLabels = document.querySelectorAll("#register-form label");
  const password = document.querySelector("#user-password");
  const repeatPassword = document.querySelector("#user-repeat-password");

  registerForm.addEventListener("submit", (e) => {
    const data = showDataInConsoleLog(e);
    data.createdOn = new Date();

    if (data.userPassword !== data.userRepeatPassword) {
      console.log("Пароли не совпадают");
      showInputError(password, "Пароли не совпадают");
      showInputError(repeatPassword, "Пароли не совпадают");
      return;
    } else {
      clearInputError(password);
      clearInputError(repeatPassword);
    }

    registeredUser = data;

    openModal();
  });
}

registerNewUser();

// 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal.

// 9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти". Используя объект с задания №6, проверяем, ввели ли мы правильные данные? Если да - то по нажатию на кнопку "Войти", модальное окно должно закрыться и пользователь должен получить сообщение об успешном входе, если нет - модальное окно не закрывается, пользователь получает сообщение об ошибке, например: "Неверный логин или пароль".

// 10. Создаем переменную "currentUser". После успешной авторизации - присваиваем ей объект с задания №6 и добавляем свойство lastLogin и присваиваем ему дату/время последнего входа, используя new Date()

//  Запуск модального окна и валидация данных, присвоение нового свойства с датой последнего входа

function showInputError(input, message) {
  const label = input.previousElementSibling;
  label.textContent = message;
  label.style.color = "red";
}

function clearInputError(input) {
  const label = input.previousElementSibling;
  label.style.color = "";
  label.textContent = label.dataset.default;
  label.style.borderColor = "";
}

let currentUser = undefined;

function modalUserAuthorized() {
  const registerForm = document.querySelector("#register-form");
  const formModal = document.querySelector(".form__modal");
  const modalFormError = document.querySelectorAll(".modal__form-error");
  const modalUserNameInput = document.querySelector("#form__modal-user-name");
  const modalPasswordInput = document.querySelector("#form__modal-user-password");

  formModal.addEventListener("submit", (e) => {
    const authorizedUser = showDataInConsoleLog(e);

    const isInvalid = registeredUser.userName !== authorizedUser.userName || registeredUser.userPassword !== authorizedUser.userPassword;

    if (isInvalid) {
      showInputError(modalUserNameInput, "Неверные данные");
      showInputError(modalPasswordInput, "Попробуйте еще раз");
      return;
    }

    clearInputError(modalUserNameInput);
    clearInputError(modalPasswordInput);

    currentUser = { ...registeredUser, lastLoginTime: new Date() };
    console.log("Current user info: ", currentUser);

    formModal.reset();
    registerForm.reset();

    closeModal();
  });
}

modalUserAuthorized();

//Закрытие

const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

modalCloseButton.addEventListener("click", (e) => {
  closeModal();
});

function openModal() {
  modal.classList.add("modal__visible");
}

function closeModal() {
  modal.classList.remove("modal__visible");
}

const utils = {
  showDataInConsoleLog,
  registerNewUser,
  modalUserAuthorized,
};

export default utils;
