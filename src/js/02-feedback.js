
// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
// import './css/common.css';
// import './css/feedback-form.css';


const STORAGE_KEY = 'feedBack-msg'

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);


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
    localStorage.removeItem('userInfo'); // удаляет данные из локального хранилища
}

// получаем значение поля, сохраняем его в хранилище
function onTextareaInput(evt) {
    const message = evt.target.value;

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


const formData = {};

refs.form.addEventListener('input', evt => {
    // console.log(evt.target);
    // console.log(evt.target.name);
    // console.log(evt.target.value);
    formData[evt.target.name] = evt.target.value;
    console.log(formData);

    const userInfo = JSON.stringify(formData)
    localStorage.setItem('userInfo', userInfo);
})