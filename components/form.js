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
    this.form.addEventListener("submit", (e) => this.onSubmit(e));
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  reset() {
    this.form.reset();
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

