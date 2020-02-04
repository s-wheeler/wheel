'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
import * as fs from 'fs';
import mongoose from 'mongoose';
import Listing from './ListingSchema.js';
import config from './config.js';

/* Connect to your database using mongoose */
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
var data = JSON.parse(fs.readFileSync('listings.json'));
data.entries.forEach(element => {
    new Listing({
        code: element.code,
        name: element.name,
        coordinates: {
            latitude: element.coordinates ? element.coordinates.latitude : null,
            longitude: element.coordinates ? element.coordinates.longitude : null
        },
        address: element.address
    }).save(function (err) {
        if (err) return err;

    });

});

/*  
  Check to see if it works: Once you've written + run the script, check out your local MongoDB database to ensure that
  it saved everything correctly. 
 */
