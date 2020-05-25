const faker = require('faker');
const fs = require('fs');

//GUESTS
const writeGuests = fs.createWriteStream('./csvFiles/guestData.csv');
writeGuests.write('guest_id,username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user\n', 'utf8');

//RESTAURANTS
const writeRestaurants = fs.createWriteStream('./csvFiles/restaurantData.csv');
writeRestaurants.write('restaurant_id,restaurant_name\n', 'utf8');

//REVIEWS
const writeReviews = fs.createWriteStream('./csvFiles/reviewData.csv');
writeReviews.write('review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo\n', 'utf8');

//REVIEW IMAGES
const writeReviewImages = fs.createWriteStream('./csvFiles/reviewImagesData.csv');
writeReviewImages.write('review_id,review_image_id,review_image_url\n', 'utf8');



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
      const user_review_count = 150;
      const user_photo_count = 100;
      const user_profile_picture = faker.image.imageUrl();
      const elite_user = true;

      const data = `${guest_id},${username},${location},${user_friend_count},${user_review_count},${user_photo_count},${user_profile_picture},${elite_user}\n`;

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
  let i = 10000;
  let restaurant_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      restaurant_id += 1;
      const restaurant_name = faker.company.companyName().replace(/,/g, "");


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


function writeReviewsToCSV(writer, encoding, callback) {
  let i = 100;
  let review_id = 0;
  let guest_id = 0;
  let restaurant_id = 0;


  function write() {
    let ok = true;
    do {
      i -= 1;
      review_id += 1;
      restaurant_id +=1;
      guest_id += 1;

      const review_text = faker.lorem.paragraph();
      const review_rating = 1;
      const review_date = 'today';
      const useful_count = 100;
      const funny_count = 50;
      const cool_count = 25;
      //the below comment info is if the business owner has not responded to the review.
      let comment_text = null;
      let commenter_name = null;
      let comment_date = null;
      let commenter_photo = null;

      //make one guest out of 100 feature a resonse from the business owner.
      if(i === 98){
        comment_text = faker.lorem.sentence();
        commenter_name = faker.name.firstName() + ' ' + faker.name.lastName();
        comment_date = 'today';
        commenter_photo = faker.image.imageUrl();
      }



      const data = `${review_id},${restaurant_id},${guest_id},${review_text},${review_rating},${review_date},${useful_count},${funny_count},${cool_count},${comment_text},${commenter_name},${comment_date},${commenter_photo}\n`;

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
writeReviewsToCSV(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 100 RECORDS TO reviewData.csv`)
});



function writeReviewImagesToCSV(writer, encoding, callback) {
  let i = 100;
  let review_id = 0;
  let review_image_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      review_id += 1;
      review_image_id += 1;
      const review_image_url = faker.image.image();

      const data = `${review_id},${review_image_id},${review_image_url}\n`;

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
writeReviewImagesToCSV(writeReviewImages, 'utf-8', () => {
  writeReviewImages.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 100 RECORDS TO reviewImagesData.csv`)
});
