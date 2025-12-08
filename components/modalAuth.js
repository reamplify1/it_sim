import { Modal } from "./modal.js";


export class ModalAuth extends Modal {
  constructor(id, formId, currentUser, registeredUser) {
    super(id);
    this.currentUser = currentUser;
    this.registeredUser = registeredUser;
    this.formId = formId;
    this.registerFormElement = document.querySelector("#register-form");
    this.modalNameInput = document.querySelector("#form__modal-user-name");
    this.modaPassInput = document.querySelector("#form__modal-user-password");
    this.modal.addEventListener("submit", (e) => this.onSubmit(e));
    this.initCloseModal(".modal__close")
    this.form = document.querySelector(`#${this.formId}`);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.getFormData();
    const validation = this.compareNameAndPass();
    if (validation) {
      this.currentUser = { ...this.registeredUser, lastLoginTime: new Date() };
      console.log("Current user info: ", this.currentUser);

      this.form.reset();
      this.registerFormElement.reset();
      this.clearInputError(this.modalNameInput);
      this.clearInputError(this.modaPassInput);
      this.closeModal();
    } else {
      this.showInputError(this.modalNameInput, "Неверные данные");
      this.showInputError(this.modaPassInput, "Попробуйте еще раз");
    }
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  compareNameAndPass() {
    const toComparePassRegister = this.registeredUser.userPassword;
    const toComparePassModal = this.getFormData().userPassword;
    const toCompareNameRegister = this.registeredUser.userName;
    const toCompareNameModal = this.getFormData().userName;

    const isMatchPasswords = toComparePassRegister === toComparePassModal && toCompareNameModal === toCompareNameRegister;

    return isMatchPasswords;
  }
}
