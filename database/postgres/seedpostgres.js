const faker = require('faker');
const fs = require('fs');

//GUESTS
const writeGuests = fs.createWriteStream('./csvFiles/guestData.csv');
writeGuests.write('guest_id,username,user_location,user_friend_count,user_photo_count,user_profile_picture,elite_user\n', 'utf8');

//RESTAURANTS
const writeRestaurants = fs.createWriteStream('./csvFiles/restaurantData.csv');
writeRestaurants.write('restaurant_id,restaurant_name\n', 'utf8');

//REVIEWS
const writeReviews = fs.createWriteStream('./csvFiles/reviewData.csv');
writeReviews.write('restaurant_id,restaurant_name\n', 'utf8');


function writeGuestsToCSV(writer, encoding, callback) {
  let i = 100;
  let guest_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      guest_id += 1;
      const username = faker.internet.userName();
      const location = faker.address.city() + ' ' + faker.address.stateAbbr();
      const user_friend_count = 300;
      const user_photo_count = 100;
      const user_profile_picture = faker.image.imageUrl();
      const elite_user = true;

      const data = `${guest_id},${username},${location},${user_friend_count},${user_photo_count},${user_profile_picture},${elite_user}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}
writeGuestsToCSV(writeGuests, 'utf-8', () => {
  writeGuests.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 100 RECORDS TO guestData.csv`)
});


function writeRestaurantsToCSV(writer, encoding, callback) {
  let i = 100;
  let restaurant_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      restaurant_id += 1;
      const restaurant_name = faker.company.companyName();


      const data = `${restaurant_id},${restaurant_name}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}
writeRestaurantsToCSV(writeRestaurants, 'utf-8', () => {
  writeRestaurants.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 100 RECORDS TO restaurantData.csv`)
});