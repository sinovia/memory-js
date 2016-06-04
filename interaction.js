var minutesLabel = document.getElementById("minutes");
       var secondsLabel = document.getElementById("seconds");
       var totalSeconds = 0;
       setInterval(setTime, 1000);

       function setTime()
       {
           ++totalSeconds;
           secondsLabel.innerHTML = pad(totalSeconds%60);
           minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
       }

       function pad(val)
       {
           var valString = val + "";
           if(valString.length < 2)
           {
               return "0" + valString;
           }
           else
           {
               return valString;
           }
       };

       (function() {
         var cards = document.querySelectorAll(".card.effect__click");
         for ( var i  = 0, len = cards.length; i < len; i++ ) {
           var card = cards[i];
           clickListener( card );
         }

         function clickListener(card) {
           card.addEventListener( "click", function() {
             var c = this.classList;
             c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
           });
         }
       })();
