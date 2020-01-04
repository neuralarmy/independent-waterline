//Initialize Waterline
var Waterline = require('waterline');
//Initialize sails-disk module for development
var sailsDiskAdapter = require('sails-disk');

// Create the waterline instance.
var waterline = new Waterline();

// Create a specification for a User model.
var userCollection = Waterline.Collection.extend({
  identity: 'user',
  datastore: 'default',
  primaryKey: 'id',
  autoPK: false,

  attributes: {
    id: {
        type: 'number',
        autoMigrations: {autoIncrement: true}
    },
    firstName: {type:'string'},
    lastName: {type:'string'},
	org: {type:'string'},

    
  }
});


// Add the model to the waterline instance.
waterline.registerModel(userCollection);

// Set up the storage configuration for waterline.
var config = {
  adapters: {
    'disk': sailsDiskAdapter
  },

  datastores: {
    default: {
      adapter: 'disk'
    }
  }
};

// Initialise the waterline instance.
waterline.initialize(config, (err, ontology)=>{
  if (err) {
    console.error(err);
    return;
  }

  // Tease out fully initialized models.
  var User = ontology.collections.user;

  // Since we're using `await`, we'll scope our selves an async IIFE:
  (async ()=>{
    // Create a user
    var user = await User.create({
      firstName: 'Jahidul',
      lastName: 'Islam',
	  org: 'Neural Army'
    });
	
	var user = await User.create({
      firstName: 'Yasin',
      lastName: 'Rahman',
	  org: 'Neural Army'
    });
    

	//For deleting one row
	//var burnedBook = await User.destroyOne({id: 1})
	//var burnedBook = await User.destroyOne({id: 2})
	//For deleting entire table
	//await User.destroy({});
	// Then we grab all users
    var users = await User.find()
    console.log(users);
	//Code to delete already created rows at program end
	await User.destroy({});
  })()
  .then(()=>{
    // All done.
  })
  .catch((err)=>{
    console.error(err);
  });

});