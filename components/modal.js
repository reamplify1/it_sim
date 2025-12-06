// 3. Создать базовый класс для модального окна. Он будет принимать 1 параметр (минимум) - айди модального окна. Внутри класса будут методы:
//   I. Для открытия модального окна.
//  II. Для закрытия модального окна.
//  III. Для проверки, открыто ли сейчас модальное окно.
// Используя данный класс - переписать логику задания №9, связанной с модальными окнами.

export class Modal {
  constructor(id) {
    this.modal = document.querySelector(`#${id}`);
  }

  openModal() {
    this.modal.classList.add("modal__visible");
  }

  closeModal() {
    this.modal.classList.remove("modal__visible");
  }

  modalIsOpen() {
    this.modal.classList.contains("modal__visible");
  }
}

export class modalAuth extends Modal {
  constructor(id, formId, currentUser, registeredUser) {
    super(id);
    this.currentUser = currentUser;
    this.registeredUser = registeredUser;
    this.formId = formId;
    this.form = document.querySelector(`#${formId}`);
    this.registerFormElement = document.querySelector("#register-form");
    this.modalNameInput = document.querySelector("#form__modal-user-name");
    this.modaPassInput = document.querySelector("#form__modal-user-password");
    this.modal.addEventListener("submit", (e) => this.submit(e));
    this.modalClose();
  }

  submit(e) {
    e.preventDefault();
    const data = this.getFormData();
    const validation = this.isValidate();
    if (validation) {
      this.currentUser = { ...this.registeredUser, lastLoginTime: new Date() };
      console.log("Current user info: ", this.currentUser);

      this.form.reset();

      this.registerFormElement.reset();

      this.closeModal();

      this.clearInputError(this.modalNameInput);
      this.clearInputError(this.modaPassInput);

    } else {

      this.showInputError(this.modalNameInput, "Неверные данные");
      this.showInputError(this.modaPassInput, "Попробуйте еще раз");
    }
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValidate() {
    const toComparePassRegister = this.registeredUser.userPassword;
    const toComparePassModal = this.getFormData().userPassword;
    const toCompareNameRegister = this.registeredUser.userName;
    const toCompareNameModal = this.getFormData().userName;
    return toComparePassRegister === toComparePassModal && toCompareNameModal === toCompareNameRegister;
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

  modalClose() {
    const modal = document.querySelector(".modal");
    const modalCloseButton = document.querySelector(".modal__close");

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        super.closeModal();
      }
    });

    modalCloseButton.addEventListener("click", (e) => {
      super.closeModal();
    });
  }
}
