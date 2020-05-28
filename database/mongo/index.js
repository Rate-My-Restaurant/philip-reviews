const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratemyrestaurant', { useNewUrlParser: true, useUnifiedTopology: true });
const Restaurant = require('./schema.js');
const faker = require('faker');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected to ratemyrestaurant')
});


let documentArr = [];

let seedDB = function(){
  let restaurantID = 1;
  let userID = 1;
  let reviewID = 1;

  for (var i = 0; i < 1000; i++) {

    var allReviewsForRestaurant = [];


    let numberOfReviews = faker.random.number({
      'min': 1,
      'max': 20
    });


    for (var j = 0; j < numberOfReviews; j++) {
      allReviewsForRestaurant.push({
        //All of the info below (description of the review) should change between each review

        user_id: userID,
        review_id: reviewID,
        business_review_id: j + 1,

        user_name: faker.internet.userName(),
        user_location: faker.address.city() + ' ' + faker.address.stateAbbr(),
        user_friend_count: faker.random.number({'min': 1,'max': 400}),
        user_review_count: faker.random.number({'min': 1,'max': 250}),
        user_photo_count: faker.random.number({'min': 1,'max': 1200}),
        user_profile_picture: faker.image.imageUrl(),
        elite_user: true,

        review_text: faker.lorem.paragraph(),
        review_rating: faker.random.number({'min': 1,'max': 5}),
        review_date: faker.date.past(),
        review_images: [faker.image.image()],

        useful_count: faker.random.number({'min': 1,'max': 400}),
        funny_count: faker.random.number({'min': 1,'max': 500}),
        cool_count: faker.random.number({'min': 1,'max': 350}),

        comment: {
          comment_text: null,
          commenter_name: null,
          commenter_date: null,
          commenter_photo: null
        }
      })
      userID++;
      reviewID++
    }






    let newRestaurant = new Restaurant({
      restaurant_id: restaurantID,
      restaurant_name: faker.company.companyName().replace(/,/g, ""),
      reviews: allReviewsForRestaurant
    })

    restaurantID++;


    // documentArr.push(newRestaurant)
    console.log(restaurantID)

    newRestaurant.save(function (err, newRestaurant) {
      if (err){
        console.log('ATTEMPTED TO SAVE RECORD TO DB, BUT ENCOUNTERED THE FOLLOWING ERROR: ', err);
      } else {
        console.log(`${newRestaurant.restaurant_id}: successfully added ${newRestaurant.restaurant_name} to database.`)
      }
    });
  }
}




seedDB();
// console.log(documentArr.length)





    // let schema = {
      // user_id: user_id,
      // user_name: faker.internet.userName(),
      // user_location: faker.address.city() + ' ' + faker.address.stateAbbr(),
      // user_friend_count: faker.random.number(),
      // user_review_count: faker.random.number(),
      // user_photo_count: 1,
      // user_profile_picture: faker.image.imageUrl(),
      // elite_user: true,

      // review_id: Number,
      // review_text: String,
      // review_rating: Number,
      // review_date: Date,
      // review_images: [String],

      // useful_count: Number,
      // funny_count: Number,
      // cool_count: Number,

      // comment: {
      //   comment_text: String,
      //   commenter_name: String,
      //   commenter_date: Date,
      //   commenter_photo: String
      // }
    //  }










// {
//   user_id: user_id,
//   user_name: faker.internet.userName(),
//   user_location: faker.address.city() + ' ' + faker.address.stateAbbr(),
//   user_friend_count: faker.random.number(),
//   user_review_count: faker.random.number(),
//   user_photo_count: 1,
//   user_profile_picture: faker.image.imageUrl(),
//   elite_user: true,

//   review_id: Number,
//   review_text: String,
//   review_rating: Number,
//   review_date: Date,
//   review_images: [String],

//   useful_count: Number,
//   funny_count: Number,
//   cool_count: Number,

//   comment: {
//     comment_text: String,
//     commenter_name: String,
//     commenter_date: Date,
//     commenter_photo: String
//   }
//  }










// var kittySchema = new mongoose.Schema({
//   name: String
// });

// var Kitten = mongoose.model('Kitten', kittySchema);

// var fluffy = new Kitten({ name: 'fluffy' });

// fluffy.save(function (err, fluffy) {
//   if (err){
//     console.log(err);
//   } else {
//     console.log('success')
//   }
//   // fluffy.speak();
// });
