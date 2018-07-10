# jqbxAutoVoter
jQuery AutoVoter for JQBX

1. Edit the configuration variables on the top of the file - they should be self explanator.

djsIHate will be anyone that gets a down vote (in our room down votes are a sign of respect).  

If you don't want to auto downvote anyone set jqbxAutoDown to false.
If you don't want to auto upvote anyone set jqbxAutoUp to false.
If you set both to false you're dumb and this code won't do jack shit.  ;)

Note the default timer runs the auto voter every 100000 milliseconds (100 seconds or 1.67 minutes) - so really short songs may be missed if the timing is just off.

Also note that once the vote has registered you cannot change it.  So if you want to do down vote someone you have to beat the autovoter. The autovote code will still run but it will not be able to change your vote.

2. Save the code in a bookmarklet / button / whatever.  

In chrome I show the bookmarks bar, right click the bar, choose Add Page and put "JQBX Auto Voter" in the name, and copy/paste the javascript code in the code.js file in the URL.

3. Join your favorite jqbx room
4. Click the bookmarklet / button / whatever
5. To disable just click f5 to reload the browser room (note, you will fall off the dj queue)

TODO:

Add an easy way to disable without rejoining the room.
