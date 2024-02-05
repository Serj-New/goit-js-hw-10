'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formElement = document.querySelector('.form');
formElement.addEventListener('submit', onFormBtn);

function onFormBtn(evt) {
    evt.preventDefault();

    const promise = new Promise((resolve, reject) => {
        const delay = formElement.elements.delay.value;
        const state = formElement.elements.state.value;

        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`Fulfilled promise in ${delay}ms`);
              } else {
                reject(`Rejected promise in ${delay}ms`);
              }
        }, delay);
    })

    promise.then(onSuccess).catch(onError);

    formElement.reset();
};

function onSuccess(result) {
    iziToast.success({
        message: result,
        position: 'topRight',
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#59A10D',
        iconUrl: '../img/success.svg',
        iconColor: 'white',
    });
};

function onError(error) {
    iziToast.error({
        message: error,
        titleColor: 'white',
        titleSize: '16px',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        iconUrl: '../img/error.svg',
        iconColor: 'white',
        position: 'topRight',
    });
}
