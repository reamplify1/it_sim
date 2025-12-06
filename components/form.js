// 4. Создать базовый класс для формы. Он будет принимать 1 параметр (минимум) - айди формы. Внутри класса будут методы:
//   I. Для получения всех значений формы.
//  II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма.
//  III. Для сброса всех значений формы.
//  IV. Для валидации отдельных инпутов (если у вас присутствует валидация).
// Используя данный класс - переписать логику задания №9, связанной с формами.

export class Form {
  constructor(formId, passwordId, repeatPasswordId) {
    this.form = document.querySelector(`#${formId}`);
    this.passwordInput = this.form.querySelector(`#${passwordId}`);
    this.repeatPasswordInput = this.form.querySelector(`#${repeatPasswordId}`);
    this.form.addEventListener("submit", (e) => this.submit(e));
  }

  submit(e) {
    e.preventDefault();
    const data = this.getFormData();
    data.createdOn = new Date();
    const validation = this.isValidate();
    if (!validation) {
      console.log("пароли не совпадают");
    } else {
      console.log("нормально нормально", data);
    }
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValidate() {
    const data = this.getFormData();
    return data.userPassword === data.userRepeatPassword;
  }

  reset() {
    this.form.reset();
  }
}

export class registerForm extends Form {
  constructor(formId, passwordId, repeatPasswordId, registeredUser) {
    super(formId, passwordId, repeatPasswordId);
    this.registeredUser = registeredUser;

    this.registerPass = document.querySelector('#user-password');
    this.registerRepeatedPass = document.querySelector('#user-repeat-password')
  }
  submit(e) {
    e.preventDefault();

    if (this.isValidate()) {
      Object.assign(this.registeredUser, this.getFormData());

      console.log("зарегистрированный пользователь", this.registeredUser);

      this.modalWindow = document.querySelector("#modal").classList.add("modal__visible");

      this.clearInputError(this.registerPass)
      this.clearInputError(this.registerRepeatedPass)
    } else {
      console.log("неверные данные");
      this.showInputError(this.registerPass, "Неверные данные");
      this.showInputError(this.registerRepeatedPass, "Попробуйте еще раз");
    }
  }

  isValidate() {
    const data = this.getFormData();
    return data.userPassword === data.userRepeatPassword

  }

  showInputError(input, message) {
    const label = input.previousElementSibling;
    label.textContent = message;
    label.style.color = "red";
  }

  clearInputError(input) {
    const label = input.previousElementSibling;
    label.style.color = "";
    label.textContent = label.dataset.default;
    label.style.borderColor = "";
  }
}
