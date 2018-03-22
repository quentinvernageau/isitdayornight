window.onload = function(){

  const network = new brain.NeuralNetwork();

  network.train([
     //winter
    {input: {time: 0, season: 0.25}, output: {night: 1}},
    {input: {time: 0.020833333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.041666666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.0625, season: 0.25}, output: {night: 1}},
    {input: {time: 0.083333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.104166666666667, season: 0.25}, output: {day: 1}},
    {input: {time: 0.125, season: 0.25}, output: {day: 1}},
    {input: {time: 0.145833333333333, season: 0.25}, output: {day: 1}},
    {input: {time: 0.166666666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.1875, season: 0.25}, output: {night: 1}},
    {input: {time: 0.208333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.229166666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.25, season: 0.25}, output: {night: 1}},
    {input: {time: 0.270833333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.291666666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.3125, season: 0.25}, output: {night: 1}},
    {input: {time: 0.333333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.354166666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.375, season: 0.25}, output: {day: 1}},
    {input: {time: 0.395833333333333, season: 0.25}, output: {day: 1}},
    {input: {time: 0.416666666666667, season: 0.25}, output: {day: 1}},
    {input: {time: 0.4375, season: 0.25}, output: {night: 1}},
    {input: {time: 0.458333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.479166666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.5, season: 0.25}, output: {night: 1}},
    {input: {time: 0.520833333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.541666666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.5625, season: 0.25}, output: {night: 1}},
    {input: {time: 0.583333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.604166666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.625, season: 0.25}, output: {night: 1}},
    {input: {time: 0.645833333333333, season: 0.25}, output: {day: 1}},
    {input: {time: 0.666666666666667, season: 0.25}, output: {day: 1}},
    {input: {time: 0.6875, season: 0.25}, output: {day: 1}},
    {input: {time: 0.708333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.729166666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.75, season: 0.25}, output: {night: 1}},
    {input: {time: 0.770833333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.791666666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.8125, season: 0.25}, output: {night: 1}},
    {input: {time: 0.833333333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.854166666666667, season: 0.25}, output: {night: 1}},
    {input: {time: 0.875, season: 0.25}, output: {night: 1}},
    {input: {time: 0.895833333333333, season: 0.25}, output: {night: 1}},
    {input: {time: 0.916666666666667, season: 0.25}, output: {day: 1}},
    {input: {time: 0.9375, season: 0.25}, output: {day: 1}},
    {input: {time: 0.958333333333333, season: 0.25}, output: {day: 1}},
    {input: {time: 0.979166666666667, season: 0.25}, output: {night: 1}},
    //spring
    {input: {time: 0, season: 0.5}, output: {night: 1}},
    {input: {time: 0.020833333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.041666666666667, season: 0.5}, output: {night: 1}},
    {input: {time: 0.0625, season: 0.5}, output: {night: 1}},
    {input: {time: 0.083333333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.104166666666667, season: 0.5}, output: {night: 1}},
    {input: {time: 0.125, season: 0.5}, output: {night: 1}},
    {input: {time: 0.145833333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.166666666666667, season: 0.5}, output: {night: 1}},
    {input: {time: 0.1875, season: 0.5}, output: {night: 1}},
    {input: {time: 0.208333333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.229166666666667, season: 0.5}, output: {night: 1}},
    {input: {time: 0.25, season: 0.5}, output: {night: 1}},
    {input: {time: 0.270833333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.291666666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.3125, season: 0.5}, output: {day: 1}},
    {input: {time: 0.333333333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.354166666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.375, season: 0.5}, output: {day: 1}},
    {input: {time: 0.395833333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.416666666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.4375, season: 0.5}, output: {day: 1}},
    {input: {time: 0.458333333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.479166666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.5, season: 0.5}, output: {day: 1}},
    {input: {time: 0.520833333333333,season: 0.5}, output: {day: 1}},
    {input: {time: 0.541666666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.5625, season: 0.5}, output: {day: 1}},
    {input: {time: 0.583333333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.604166666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.625, season: 0.5}, output: {day: 1}},
    {input: {time: 0.645833333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.666666666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.6875, season: 0.5}, output: {day: 1}},
    {input: {time: 0.708333333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.729166666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.75, season: 0.5}, output: {day: 1}},
    {input: {time: 0.770833333333333, season: 0.5}, output: {day: 1}},
    {input: {time: 0.791666666666667, season: 0.5}, output: {day: 1}},
    {input: {time: 0.8125, season: 0.5}, output: {night: 1}},
    {input: {time: 0.833333333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.854166666666667, season: 0.5}, output: {night: 1}},
    {input: {time: 0.875, season: 0.5}, output: {night: 1}},
    {input: {time: 0.895833333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.916666666666667, season: 0.5}, output: {night: 1}},
    {input: {time: 0.9375, season: 0.5}, output: {night: 1}},
    {input: {time: 0.958333333333333, season: 0.5}, output: {night: 1}},
    {input: {time: 0.979166666666667, season: 0.5}, output: {night: 1}},
    //summer
    {input: {time: 0, season: 0.75}, output: {night: 1}},
    {input: {time: 0.020833333333333, season: 0.75}, output: {night: 1}},
    {input: {time: 0.041666666666667, season: 0.75}, output: {night: 1}},
    {input: {time: 0.0625, season: 0.75}, output: {night: 1}},
    {input: {time: 0.083333333333333, season: 0.75}, output: {night: 1}},
    {input: {time: 0.104166666666667, season: 0.75}, output: {night: 1}},
    {input: {time: 0.125, season: 0.75}, output: {night: 1}},
    {input: {time: 0.145833333333333, season: 0.75}, output: {night: 1}},
    {input: {time: 0.166666666666667, season: 0.75}, output: {night: 1}},
    {input: {time: 0.1875, season: 0.75}, output: {night: 1}},
    {input: {time: 0.208333333333333, season: 0.75}, output: {night: 1}},
    {input: {time: 0.229166666666667, season: 0.75}, output: {night: 1}},
    {input: {time: 0.25, season: 0.75}, output: {day: 1}},
    {input: {time: 0.270833333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.291666666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.3125, season: 0.75}, output: {day: 1}},
    {input: {time: 0.333333333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.354166666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.375, season: 0.75}, output: {day: 1}},
    {input: {time: 0.395833333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.416666666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.4375, season: 0.75}, output: {day: 1}},
    {input: {time: 0.458333333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.479166666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.5, season: 0.75}, output: {day: 1}},
    {input: {time: 0.520833333333333,season: 0.75}, output: {day: 1}},
    {input: {time: 0.541666666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.5625, season: 0.75}, output: {day: 1}},
    {input: {time: 0.583333333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.604166666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.625, season: 0.75}, output: {day: 1}},
    {input: {time: 0.645833333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.666666666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.6875, season: 0.75}, output: {day: 1}},
    {input: {time: 0.708333333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.729166666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.75, season: 0.75}, output: {day: 1}},
    {input: {time: 0.770833333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.791666666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.8125, season: 0.75}, output: {day: 1}},
    {input: {time: 0.833333333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.854166666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.875, season: 0.75}, output: {day: 1}},
    {input: {time: 0.895833333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.916666666666667, season: 0.75}, output: {day: 1}},
    {input: {time: 0.9375, season: 0.75}, output: {day: 1}},
    {input: {time: 0.958333333333333, season: 0.75}, output: {day: 1}},
    {input: {time: 0.979166666666667, season: 0.75}, output: {night: 1}},
    //autumn
    {input: {time: 0, season: 1}, output: {night: 1}},
    {input: {time: 0.020833333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.041666666666667, season: 1}, output: {night: 1}},
    {input: {time: 0.0625, season: 1}, output: {night: 1}},
    {input: {time: 0.083333333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.104166666666667, season: 1}, output: {night: 1}},
    {input: {time: 0.125, season: 1}, output: {night: 1}},
    {input: {time: 0.145833333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.166666666666667, season: 1}, output: {night: 1}},
    {input: {time: 0.1875, season: 1}, output: {night: 1}},
    {input: {time: 0.208333333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.229166666666667, season: 1}, output: {night: 1}},
    {input: {time: 0.25, season: 1}, output: {night: 1}},
    {input: {time: 0.270833333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.291666666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.3125, season: 1}, output: {day: 1}},
    {input: {time: 0.333333333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.354166666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.375, season: 1}, output: {day: 1}},
    {input: {time: 0.395833333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.416666666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.4375, season: 1}, output: {day: 1}},
    {input: {time: 0.458333333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.479166666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.5, season: 1}, output: {day: 1}},
    {input: {time: 0.520833333333333,season: 1}, output: {day: 1}},
    {input: {time: 0.541666666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.5625, season: 1}, output: {day: 1}},
    {input: {time: 0.583333333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.604166666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.625, season: 1}, output: {day: 1}},
    {input: {time: 0.645833333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.666666666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.6875, season: 1}, output: {day: 1}},
    {input: {time: 0.708333333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.729166666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.75, season: 1}, output: {day: 1}},
    {input: {time: 0.770833333333333, season: 1}, output: {day: 1}},
    {input: {time: 0.791666666666667, season: 1}, output: {day: 1}},
    {input: {time: 0.8125, season: 1}, output: {night: 1}},
    {input: {time: 0.833333333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.854166666666667, season: 1}, output: {night: 1}},
    {input: {time: 0.875, season: 1}, output: {night: 1}},
    {input: {time: 0.895833333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.916666666666667, season: 1}, output: {night: 1}},
    {input: {time: 0.9375, season: 1}, output: {night: 1}},
    {input: {time: 0.958333333333333, season: 1}, output: {night: 1}},
    {input: {time: 0.979166666666667, season: 1}, output: {night: 1}},
  ]);

  var date = new Date();
  var hours = date.getHours();
  var minutes = Math.round(date.getMinutes() * 1,66667, 0);
  var time = hours + "." + minutes;
  var time_bot = time / 24;

  var season = getSeason();

  const op = {time: time_bot, season: season};

  const result = brain.likely(op, network);


   document.body.style.backgroundImage = "url('" + result + ".jpeg')";
   document.body.style.backgroundSize = "100%";

  document.getElementById('info').innerHTML = result;

  document.getElementById('ai').classList.add(result);
};

function getSeason(){
  var d = new Date();
  var month = d.getMonth() + 1;
   switch(month) {
       case 12:
       case 1:
       case 2:
           return 0.25;
       case 3:
       case 4:
       case 5:
           return 0.5;
       case 6:
       case 7:
       case 8:
           return 0.75;
       case 9:
       case 10:
       case 11:
           return 1;
   }
}
