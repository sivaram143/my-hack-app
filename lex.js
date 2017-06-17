var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var lexruntime = new AWS.LexRuntime({apiVersion: '2016-11-28'});

/* sending i/p as command line arg 
   eg: node lexs.js "Hi, I would like to book conference room"
*/
var msg = process.argv[2];

var params = {
  botAlias: '$LATEST', /* required, has to be '$LATEST' */
  botName: 'BookConferenceRoom', /* required, the name of you bot */
  inputText: msg, /* required, your text */
  userId: 'sivaram', /* required, arbitrary identifier */
  sessionAttributes: {
    someKey: 'testKey'
  }
};

lexruntime.postText(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  }
  else{
  	console.log(data);
  	// successful response
  }
});
