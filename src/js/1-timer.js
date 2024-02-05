'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateImput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
btnStart.addEventListener('click', onBtnStartClick);
let userSelectedDate = null;
btnStart.setAttribute('disabled', 'true');

const timer = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > Date.now()) {
            userSelectedDate = selectedDates[0];
            btnStart.removeAttribute('disabled');
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
                titleColor: 'white',
                titleSize: '16px',
                messageColor: 'white',
                messageSize: '16px',
                backgroundColor: '#ef4040',
                iconUrl: '../img/error.svg',
                iconColor: 'white',
                position: 'topRight',
            });
            btnStart.setAttribute('disabled', 'true');
        }
    },
};

flatpickr(dateImput, options);

function onBtnStartClick() {
    dateImput.setAttribute('disabled', 'true');
    
    const intervalId = setInterval(() => {
        const term = userSelectedDate.getTime() - Date.now();

        if (term >= 0) {
            const termCounter = convertMs(term);
            timer.days.textContent = addLeadingZero(termCounter.days);
            timer.hours.textContent = addLeadingZero(termCounter.hours);
            timer.minutes.textContent = addLeadingZero(termCounter.minutes);
            timer.seconds.textContent = addLeadingZero(termCounter.seconds);
            btnStart.setAttribute('disabled', 'true');
        } else {
            clearInterval(intervalId);
            dateImput.removeAttribute('disabled');
        }
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}