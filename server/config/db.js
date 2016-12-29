var mongoose = require('mongoose');

var fs = require('fs');

var mongodbUri = 'mongodb://heroku_cz4ct1cp:88k26eef4lqc084dmdscsj1u6e@ds145128.mlab.com:45128/heroku_cz4ct1cp';
mongoose.connect(mongodbUri);

/*
*  CONNECTION EVENTS
*  When successfully connected
*/
mongoose.connection.on( 'connected', function () {
  console.log( 'Mongoose default connection open' );
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error('Mongoose default connection error');
console.error(err);
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});


var models_path = __dirname + "/../models"

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})