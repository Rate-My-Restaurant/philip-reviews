const Restaurant = require('./schema.js');
const faker = require('faker');


let seedDB = function(){
  for (var i = 0; i < 30; i++) {
    let user_id = 1;
    restaurant_id = 1;

    let newRestaurant = new Restaurant({
      restaurant_id: 3,
      restaurant_name: faker.company.companyName().replace(/,/g, ""),
      reviews: [],
    });


    newRestaurant.save(function (err, newRestaurant) {
      if (err){
        console.log('ATTEMPTED TO SAVE RECORD TO DB, BUT ENCOUNTERED THE FOLLOWING ERROR: ', err);
      } else {
        console.log(`successfully added ${newRestaurant.restaurant_name} to database.`)
      }
    });
  }


}


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