const Start = document.querySelector(".start");
const Stop = document.querySelector(".stop");
const Reset = document.querySelector(".reset");
const Timer = document.querySelector(".timer");
const Timer1 = document.querySelector(".timer1");
const Timer2 = document.querySelector(".timer2");
const time = new Date("December 25, 1995 23:00:00");
let min = String(time.getMinutes()).padStart(2, '0');
let sec = String(time.getSeconds()).padStart(2, '0');
Timer1.innerHTML = `${min}`;
Timer2.innerHTML = `${sec}`;

const fun = () => {
  min++;
  Timer1.innerHTML = `${min}`;
};

const fun2 = () => {
  if (sec == 99) {
    sec = 0;
  }
  sec++;
  Timer2.innerHTML = `${sec}`;
};

Start.addEventListener("click", (e) => {
  let setmin = setInterval(fun, 1000);
  let setsec = setInterval(fun2, 10);
  Stop.addEventListener("click", (e) => {
    clearInterval(setmin);
    clearInterval(setsec);
});
Reset.addEventListener('click', (e)=> {
      clearInterval(setmin);
      clearInterval(setsec);
      Timer1.innerHTML = 0;
      Timer2.innerHTML = 0;
  })
});

