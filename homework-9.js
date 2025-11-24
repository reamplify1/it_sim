const emailForm = document.querySelector("#email__form");
const registerForm = document.querySelector("#register-form");
const passwordRegister = document.querySelector(".user-password");
const passwordRepeatRegister = document.querySelector(".user-repeat-password");
const registerLabels = document.querySelectorAll('.register-form__label')
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');
const labelsModal = document.querySelectorAll('.form__modal--label');
const formModal = document.querySelector('.form__modal');
const modalFormError = document.querySelectorAll('.modal__form--error')
const modalCloseButton = document.querySelector('.modal__close')


function showDataInConsoleLog(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  return data;
}

emailForm.addEventListener("submit", (e) => {
  showDataInConsoleLog(e);
});

let registeredUser = null;

registerForm.addEventListener("submit", (e) => {
  const data = showDataInConsoleLog(e);
  data.createdOn = new Date();

  if (data['user-password'] !== data['user-repeat-password']) {
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

  registeredUser = data;

  openModal()
});


formModal.addEventListener('submit', (e) => {
  const authorizedUser = showDataInConsoleLog(e);
  if(registeredUser['user-name'] !== authorizedUser['user-name'] || registeredUser['user-password'] !== authorizedUser['user-password)']) {
    modalFormError[0].textContent = 'Неверные данные';
    modalFormError[1].textContent = 'Попробуйте еще раз';
    modalFormError[0].style = 'color: red';
    modalFormError[1].style = 'color: red';
  } else {
    modalFormError[0].textContent = '';
    modalFormError[1].textContent = '';
    modalFormError[0].style.color = '';
    modalFormError[1].style.color = ''
  }
  if(registeredUser['user-name'] === authorizedUser['user-name'] & registeredUser['user-password'] === authorizedUser['user-password']){
    closeModal()
    let currentUser = {...registeredUser, lastLogin: new Date()}
    console.log("Current user info: ", currentUser);
    
  }
})

modal.addEventListener('click', (e) => {
  if(e.target === modal){
    closeModal()
  }
})

modalCloseButton.addEventListener('click', (e) => {
    closeModal()
})


function openModal(){
  modal.classList.add('modal__visible')

}

function closeModal(){
  modal.classList.remove('modal__visible')
}
