window.onload =function(){
      var seconds  = 00;
      var tens = 00;

      var appenTens =document.getElementById("tens");

      var appenSeconds =document.getElementById("seconds");



      var btnstart= document. getElementById("btn-start");
      var btnstop= document. getElementById("btn-stop");
      var btnreset= document. getElementById("btn-reset");

var Interval;

btnstart.onclick=function(){
      clearInterval(Interval);
      Interval =setInterval(startTimer,20);
}


btnstop.onclick=function(){
      clearInterval(Interval);
}


btnreset.onclick=function(){
      clearInterval(Interval);
      tens="00"
      seconds="00"
      appenTens.innerHTML=tens;
      appenSeconds.innerHTML=seconds;
}



function startTimer(){
      tens++;
      if(tens <=9){
            appenTens.innerHTML ="0"+tens;
      }

      if(tens>9){
            appenTens.innerHTML =tens;    
      }

      if(tens >99){
            console.log("seconds");
            seconds++
            appenSeconds.innerHTML ="0"+seconds;
            tens ="0";
            appenTens.innerHTML ="0" +0;
      }
      if(seconds > 9){
            appenSeconds.innerHTML=seconds;
      }
}


}