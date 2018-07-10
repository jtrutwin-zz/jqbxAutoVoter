javascript:el=document.createElement('script'); el.src='https://code.jquery.com/jquery-latest.min.js'; 
/* the selectors I use are more complicated than I care to figure out in regular JS so using jQuery */
document.body.appendChild(el); 

var myDJName = 'icehole';       /* set to your own dj name */
var jqbxAutoUp = true;          /* set to false to disable auto thumbs-up */
var jqbxAutoDown = true;        /* set to false to disable auto thumbs-down (lame) */
var jqbxAutoVoteTimer = 100000; /* autovote every 100000 milliseconds (1.67 minutes) */
var jqbxAutoVoteDebug = false   /* set to true to enable to console output - for developers */

/* if you want to auto lame anyone, put them in this list: */
var djsIHate = ['Blue Bart', 'dirtie', 'pcmotitas', 'Furious Maximous'];

var jqbxAutoVoter = {
  myVote: function() { 
    /* figure out who is djing. */
    var djName=$('div.dj-queue').find('div.dj-name').first().text();
    
    /* I'm djing - don't do anything... */
    if (djName == myDJName) {
      return "My play - no action";
    }
    
    /* if auto down is enabled and we the DJ is someone in the djsIHate list, thumbs down */
    if (jqbxAutoDown) {
      if ($.inArray(djName, djsIHate) >= 0) {
        $('div.meter').find('button.thumbs-down').click();
        return "Boo!  Auto Thumb's Down for " + djName;
      }
    }

    /* everyone else gets auto thumb's up, assuming it's enabled.... */
    if (jqbxAutoUp) {
      $('div.meter').find('button.thumbs-up').click();
      return "Yay!  Auto Thumb's Up for " + djName;
    }
    
    return "Auto Vote - no action";
  }
};

window.setInterval(function() { 
  var jqbxAutoVote = jqbxAutoVoter.myVote();
  if (jqbxAutoVoteDebug) {
    console.log('Auto Voting: ' + jqbxAutoVote); /* not sure why but this doesn't show up in chrome console... */
  }
}, jqbxAutoVoteTimer);
