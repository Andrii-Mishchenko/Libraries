
const throttle = require('lodash.throttle');
// import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';


const STORAGE_KEY = 'feedBack-msg'

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');

    evt.currentTarget.reset(); // очищает форму

    localStorage.removeItem(STORAGE_KEY); // удаляет данные из локального хранилища
}

// получаем значение поля, сохраняем его в хранилище
function onTextareaInput(evt) {
    const message = evt.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, message); // сохраняем данные введенные пользователем в хранилище
}


// Получаем значение из локального хранилища.
// Если там что-то есть, обновляем DOM
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {         
     
        refs.textarea.value = savedMessage;
        console.log(savedMessage);
    }
}