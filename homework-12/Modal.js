export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.modal.removeEventListener('click', this.handleClose)
    this.overlay.removeEventListener('click', this.handleClose)
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      this.open();
    });
  }

  handleClose = () => this.close()

  #initClose(shouldCloseOnOverlay) {
    const closeButton = this.modal.querySelector("#modal-close-button");


    closeButton.addEventListener("click", this.handleClose);

    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.handleClose);
    }
  }
}
