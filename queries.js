/* Add all the required libraries*/
import mongoose from 'mongoose';
import config from './config.js';
import Listing from './ListingSchema.js';



/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
mongoose.connect(config.db.uri, { useNewUrlParser: true });
const findLibraryWest = () => {
    /* 
      Find the document that contains data corresponding to Library West,
      then log it to the console. 
     */
    Listing.findOne({ name: 'Library West' }, function (err, data) {
        if (err) return err;
        console.log(data);
    });
};
const removeCable = () => {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
     Listing.findOneandDelete({ code: 'CABL' }, function (err, data) {
        if (err) return err;
        console.log(data);
    });
};
const updatePhelpsLab = () => {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
    Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, { new: true }, function (err, data) {
        if (err) return err;
        console.log(data);
    });

};
const retrieveAllListings = () => {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    Listing.find({}, function (err, docs) {
        if (err) return err;
        console.log(docs);
    });


};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
