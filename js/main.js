var date = null;
var clock = document.getElementById('clock');

setInterval(function(){
  start();
},1000);

function getTime(){
  date =  new Date();
  var hours = date.getHours();
  return convertTime(hours)+" : "+convertTime(date.getMinutes())+" : "+convertTime(date.getSeconds())+" &nbsp;"+isAfterNoon(hours);
}

function convertTime(time){
  if(time >= 10){
    return time;
  }
  return "0"+time;
}

function start(){
  clock.innerHTML = getTime();
}

function isAfterNoon(time){
  if(time < 12){
    return "AM";
  }
  return "PM";
}

// -----------------------------------------------------------------------
var padding_x = 20;
var padding_y = 10;

function clickMe(){
  padding_x += 10;
  padding_y += 4;
  if(padding_x > 80 ){
    padding_x = 20;
    padding_y = 10;
  }
  var button = document.getElementsByTagName('button')[0];
  button.style.padding = padding_y + "px"+" "+ padding_x+"px";
}
