// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const _range_max = document.getElementById("js-max");
const _range = document.querySelector(".js-range");
const _play_btn = document.querySelector(".js-play-btn");
const _num_box = document.querySelector(".js-num-box");
const _status = document.querySelector(".js-status");
const _result = document.querySelector(".js-result");
const _you = document.getElementById("js-you");
const _machine = document.getElementById("js-machine");

_status.style.display = "none";
_result.style.display = "none";

const _min = 0;
let _max = _range.value;
_range_max.innerText = _range.value;

_range.addEventListener("input", () => {
  _range_max.innerText = _range.value;
  _max = _range.value;
});

_play_btn.addEventListener("click", () => {
  const you = parseInt(_num_box.value, 10);

  if (you) {
    _status.style.display = "block";
    _result.style.display = "block";
    const machine = Math.floor(Math.random() * (_max - _min) + _min);
    _you.innerText = you;
    _machine.innerText = machine;
    if (you === machine) {
      _result.innerText = "You won!";
    } else {
      _result.innerText = "You lost!";
    }
  }
});
