var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var lexruntime = new AWS.LexRuntime();

var params = {
  botAlias: '$LATEST', /* required, has to be '$LATEST' */
  botName: 'BOT', /* required, the name of you bot */
  inputText: 'TEXT', /* required, your text */
  userId: 'USER', /* required, arbitrary identifier */
  sessionAttributes: {
    someKey: 'STRING_VALUE',
    /* anotherKey: ... */
  }
};

lexruntime.postText(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
