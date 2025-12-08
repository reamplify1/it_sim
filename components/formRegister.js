import { Form } from "./form.js";

export class RegisterForm extends Form {
  constructor(formId, passwordId, repeatPasswordId, registeredUser) {
    super(formId, passwordId, repeatPasswordId);
    this.registeredUser = registeredUser;

    this.registerPass = document.querySelector("#user-password");
    this.registerRepeatedPass = document.querySelector("#user-repeat-password");
  }
  onSubmit(e) {
    e.preventDefault();

    if (this.comparePasswords()) {
      Object.assign(this.registeredUser, this.getFormData());

      console.log("зарегистрированный пользователь", this.registeredUser);

      this.modalWindow = document.querySelector("#modal").classList.add("modal__visible");

      this.clearInputError(this.registerPass);
      this.clearInputError(this.registerRepeatedPass);
    } else {
      console.log("неверные данные");
      this.showInputError(this.registerPass, "Неверные данные");
      this.showInputError(this.registerRepeatedPass, "Попробуйте еще раз");
    }
  }
}
