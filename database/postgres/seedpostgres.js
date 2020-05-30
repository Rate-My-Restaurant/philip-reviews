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


//eventually want 10mm unique guests, with  10% of that number (1mm posting reviews, averaging 10 per active user, for a total of 10mm unique reviews)
//GUESTS
function writeGuestsToCSV(writer, encoding, callback) {
  let i = 35000000; // 10mm => 35 million
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
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}
writeGuestsToCSV(writeGuests, 'utf-8', () => {
  writeGuests.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 35,000,000 RECORDS (guests) TO guestData.csv`)
});

//400k restaurants, averaging 25 reviews each
//RESTAURANTS
function writeRestaurantsToCSV(writer, encoding, callback) {
  let i = 1400000 //400k => 1,400,000
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
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}
writeRestaurantsToCSV(writeRestaurants, 'utf-8', () => {
  writeRestaurants.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 1,400,000 RECORDS (restaurants) TO restaurantData.csv`)
});



//REVIEWS
function writeReviewsToCSV(writer, encoding, callback) {
  let i = 35000000; //10 million => 35 million
  const reviewFrequencies = [0,1,2,3,10,15,15,15,16,17,18,200];

  let review_id = 0;
  let restaurant_id = 1;   //NEW ITERATION
  let batch = 0;
  let fC = 0;
  let frequencyCounter = reviewFrequencies[fC];


  function write() {
    let ok = true;
    do {
      i -= 1;
      review_id += 1;
      // restaurant_id += 1;  //NEW ITERATION
      // counter += 1;
      if (fC > 11) {
        fC *= 0;
      }

      if (batch > reviewFrequencies[fC] || batch === reviewFrequencies[fC] ) {
        fC += 1;
        restaurant_id += 1;  //NEW ITERATION
        batch *= 0;

      } else {
        batch += 1;
        restaurant_id += 0;
      }

      //currently selecting random restaurant_id to asscoiate with a review

      // let restaurant_id = faker.random.number({
      //   'min': 1,
      //   'max': 1400000 // 400k => 1.4 million
      //   //reviews array
      // });

      let guest_id = faker.random.number({
        'min': 1,
        'max': 3500000  // 1 million => 3.5 million
      });

      const review_text = faker.lorem.paragraph();
      const review_rating = faker.random.number(5);
      const review_date = faker.date.past();
      const useful_count = faker.random.number(300);
      const funny_count = faker.random.number(500);
      const cool_count = faker.random.number(400);
      //the below comment info is if the business owner has not responded to the review.
      let comment_text = null;
      let commenter_name = null;
      let comment_date = null;
      let commenter_photo = null;

      //make one guest out of 25 feature a resonse from the business owner (i.e. 4% comment response rate from business owner)
      if(i % 25 === 0){
        comment_text = faker.lorem.paragraph();
        commenter_name = faker.name.firstName() + ' ' + faker.name.lastName();
        comment_date = faker.date.recent();
        commenter_photo = faker.image.imageUrl();
      }



      const data = `${review_id},${restaurant_id},${guest_id},${review_text},${review_rating},${review_date},${useful_count},${funny_count},${cool_count},${comment_text},${commenter_name},${comment_date},${commenter_photo}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}
writeReviewsToCSV(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 35,000,000 RECORDS (reviews) TO reviewData.csv`)
});


// REVIEW IMAGES
function writeReviewImagesToCSV(writer, encoding, callback) {
  let i = 8750000; //2.5 million => 8.75 million
  let review_id = 1;
  let review_image_id = 0;
  let batch = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      review_image_id += 1;
      if (batch < 4) {
        review_id += 0;
        batch++;

      } else {
        review_id += 1;
        batch *= 0;
      }

      const review_image_url = faker.image.image();

      const data = `${review_id},${review_image_id},${review_image_url}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}
writeReviewImagesToCSV(writeReviewImages, 'utf-8', () => {
  writeReviewImages.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 8,750,000 RECORDS TO reviewImagesData.csv`)
});
