let temperature = 23;
let ideal_temperature = 20;
let is_raining = false;

let minutes;

if (temperature === ideal_temperature) {
  minutes = 20;
}

elif (temperature > 0 && temperature < 35) {
  let deviation = Math.abs(ideal_temperature - temperature);
  minutes = 20 - deviation;
}

elif (temperature < 0 && temperature > 35 && is_raining) {
  minutes = 0;
}

alert('Макс гуляет ' + minutes + ' минут');
