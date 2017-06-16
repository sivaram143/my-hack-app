var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var lexruntime = new AWS.LexRuntime({apiVersion: '2016-11-28'});

var params = {
  botAlias: '$LATEST', /* required, has to be '$LATEST' */
  botName: 'BookConferenceRoom', /* required, the name of you bot */
  inputText: 'I want to book conference room', /* required, your text */
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
