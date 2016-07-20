var timerOff = true;
var t = 0;

function startPause(){
  
  if(timerOff==false){
    timerOff = true;
    timeCount();
    document.getElementById('startPauseCont').innerHTML='Continue';
  }
  else{
    timerOff = false;
    clearInterval(timeCount());
    document.getElementById('startPauseCont').innerHTML='Pause';
  }
}

  startPauseCont.addEventListener("click", startPause)

function stopCount(){
  timerOff = true;
  t = 0;
  document.getElementById('startPauseCont').innerHTML='Start';
  document.getElementById('counter').innerHTML='00:00:00';
  document.getElementById('ms').innerHTML='0';
}

 clear.addEventListener("click", stopCount)

function timeCount(){
  setTimeout(function(){
    if(timerOff){
      return
    }
    t++;
    var ms = t%100;
    var s = Math.floor (t/100%60);
    var m =  Math.floor (t/100/60);
    var h = Math.floor (t/100/60/60);
    if (h < 10){
      h = "0" + h;
    }
    if (m < 10){
      m = "0" + m;
    }
    if (s < 10){
      s = "0" + s;
    }
    document.getElementById('counter').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('ms').innerHTML = ms;
    timeCount();
  }, 10);
}