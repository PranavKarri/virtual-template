import React, {useEffect, useRef, useState} from 'react';
import "./clocktimer.css";



const Time01 = () => {

const[timerDays, setTimerDays] = useState('00');
const[timerHours, setTimerHours] = useState('00');
const[timerMinutes, setTimerMinutes] = useState('00');
const[timerSeconds, setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer = () => {
const countdownDate = new Date('November 26, 2020 10:10:10').getTime();

interval=setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance % (1000 * 60 * 60 * 24));
  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  const secondss = Math.floor(distance % (1000 * 60));

if (distance < 0) {
  //stop our timer
  clearInterval(interval.current);
}
else {
  setTimeDays(days);
  setTimerHours(hours);
  setTimerMinutes(minutes);
  setTimerSeconds(seconds);
}
}, 1000);
};

useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current);
    };
});

return (
  <section className="time-container">
    <section className="timer">
      <div>
        
        <h2>Countdown Timer</h2>
        </div>
        <div>
          <section>
<p>{timerDays}</p>
            <p>days</p>
          </section>
          <span>:</span>
          <section>
<p>{timerHours}</p>
            <p>hours</p>
          </section>
          <span>:</span>
          <section>
<p>{timerMinutes}</p>
            <p>minutes</p>
          </section>
          <span>:</span>
          <section>
<p>{timerSeconds}</p>
            <p>seconds</p>
          </section>
          </div>
          </section>
          </section>
)
}

export default Time01;