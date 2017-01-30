export default function ToTimeFormat(timeInSec) {
  let hr = Math.floor(timeInSec / 60 ** 2);
  if (hr) {
    timeInSec -= (hr * (60 ** 2));
  }
  let min = Math.floor(timeInSec / 60);
  if (min) {
    timeInSec -= (min * 60);
  }
  let sec = timeInSec;

  hr = hr.toString().length > 1 ? hr : `0${hr}`;
  min = min.toString().length > 1 ? min : `0${min}`;
  sec = sec.toString().length > 1 ? sec : `0${sec}`;

  return `${hr}:${min}:${sec}`;
}