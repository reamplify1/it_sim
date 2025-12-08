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

  initCloseModal(button) {
    const modalCloseButton = document.querySelector(`${button}`);
    
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    modalCloseButton.addEventListener("click", (e) => {
      this.closeModal();
    });
  }
}
