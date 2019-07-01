


 function timer(time,date ,name){
      var countDownDate = new Date(date).getTime();
      
      
      var x = setInterval(function() {
      
      
        var now = new Date().getTime();
          
      
        var distance = now-countDownDate;
          
        
   
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))*(24*60);
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))*(60)-time;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(60-(distance % (1000 * 60)) / 1000);
          var t= minutes+hours+days;
        document.getElementById(name).innerHTML = -t + 'm ' + seconds + 's ';
          
    
        if ((-t)<=0 ) {
          clearInterval(x);
          document.getElementById(name).innerHTML = 'EXPIRED';
        }
      }, 1000);}
