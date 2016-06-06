// TIMER FUNCTION

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
// CARD FUNCTIONS
(function() {
var cards = document.querySelectorAll(".card.effect__click");
for ( var i  = 0, len = cards.length; i < len; i++ ) {
var card = cards[i];
clickListener( card );
}
var track = 0
function clickListener(card) {
card.addEventListener( "click", function() {
  track++
  if (track === 1){
  var c = this.classList;
  c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped","active");
    var cardIcon1 = (this.querySelectorAll(".fa"))
      var flippedIcon1= cardIcon1;
            console.log(flippedIcon1);
            return flippedIcon1

if (flippedIcon1 === flippedIcon2) {
  console.log("YAY!")
}


} else if (track === 2) {
  var c = this.classList;
c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped","active");
  var cardIcon2 = (this.querySelectorAll(".fa"))
  var flippedIcon2= cardIcon2;

    console.log(flippedIcon2);
    return flippedIcon2;

}

    });


}
})();

// LIFEBAR
var count = 0
$(".takeALife").click(function(){
  count++;
    $('#hearts li:last-child').remove();
        console.log(count +" HEARTS TAKEN");
    if (count === 12)
    {$(".loserScreenModal").css("display", "block")}
});

$(".youLose").click(function(){
    {$(".loserScreenModal").css("display", "block")}
});
