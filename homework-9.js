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

function registerNewUser() {
  const registerForm = document.querySelector("#register-form");
  const registerLabels = document.querySelectorAll(".register-form__label");

  registerForm.addEventListener("submit", (e) => {
    const data = showDataInConsoleLog(e);
    data.createdOn = new Date();

    if (data["user-password"] !== data["user-repeat-password"]) {
      console.log("Пароли не совпадают");
      registerLabels[4].textContent = "Пароли не совпадают";
      registerLabels[4].style.color = "red";
      registerLabels[5].textContent = "Пароли не совпадают";
      registerLabels[5].style.color = "red";
      return;
    } else {
      registerLabels[4].style.color = "";
      registerLabels[5].style.color = "";
      registerLabels[4].textContent = "Введите пароль";
      registerLabels[5].textContent = "Повторите пароль";
    }

    openModal(); 

    modalUserAuthorized(data);

  });
}

registerNewUser(); 

// 8. Создать модальное окно, используя классы "modal, modal-showed". Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal.

// 9. В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти". Используя объект с задания №6, проверяем, ввели ли мы правильные данные? Если да - то по нажатию на кнопку "Войти", модальное окно должно закрыться и пользователь должен получить сообщение об успешном входе, если нет - модальное окно не закрывается, пользователь получает сообщение об ошибке, например: "Неверный логин или пароль".

// 10. Создаем переменную "currentUser". После успешной авторизации - присваиваем ей объект с задания №6 и добавляем свойство lastLogin и присваиваем ему дату/время последнего входа, используя new Date()

//  Запуск модального окна и валидация данных, присвоение нового свойства с датой последнего входа

let currentUser = undefined;

function modalUserAuthorized(registeredUser) {
  const formModal = document.querySelector(".form__modal");
  const modalFormError = document.querySelectorAll(".modal__form-error");
  
  formModal.addEventListener("submit", (e) => {
    const authorizedUser = showDataInConsoleLog(e);
    if (
      registeredUser["user-name"] !== authorizedUser["user-name"] ||
      registeredUser["user-password"] !== authorizedUser["user-password"]
    ) {
      modalFormError[0].textContent = "Неверные данные";
      modalFormError[1].textContent = "Попробуйте еще раз";
      modalFormError[0].style = "color: red";
      modalFormError[1].style = "color: red";
    } else {
      modalFormError[0].textContent = "";
      modalFormError[1].textContent = "";
      modalFormError[0].style.color = "";
      modalFormError[1].style.color = "";
    }
    if (
      (registeredUser["user-name"] === authorizedUser["user-name"]) &
      (registeredUser["user-password"] === authorizedUser["user-password"])
    ) {
      closeModal();
      let currentUser = { ...registeredUser, lastLoginTime: new Date() };
      console.log("Current user info: ", currentUser);
    }
  });
}

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
