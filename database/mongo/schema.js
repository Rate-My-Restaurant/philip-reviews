var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  restaurant_id: Number,
  restaurant_name: String,
  reviews: [
    {
      user_id: Number,
      business_review_id: Number,
      user_name: String,
      user_location: String,
      user_friend_count: Number,
      user_review_count: Number,
      user_photo_count: Number,
      user_profile_picture: String,
      elite_user: Boolean,

      review_id: Number,
      review_text: String,
      review_rating: Number,
      review_date: Date,
      review_images: [String],

      useful_count: Number,
      funny_count: Number,
      cool_count: Number,

      comment: {
        comment_text: String,
        commenter_name: String,
        commenter_date: Date,
        commenter_photo: String
      }
     }
  ],
});

//could create very specific API routes that pull batches of reviews from given restaurant.
//routes or server?

//make second schema, READ JORDAN'S ARTICLE, AND STACK OVERFLOW (SEE REMI'S MESSAGES)

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;


db.restaurants.insert({
  restaurant_id: 10000001,
  restaurant_name: 'philips place',
  reviews: [
    {
      user_id: 10000001,
      business_review_id: 10000001,
      user_name: 'philip ahmner',
      user_location: 'san francsicso',
      user_friend_count: 4,
      user_review_count: 5,
      user_photo_count: 6,
      user_profile_picture: 'fb.com/myuserphoto',
      elite_user: true,

      review_id: 10000001,
      review_text: 'really really yummy :)',
      review_rating: 1,
      review_date: '2002-12-09',
      review_images: ['justonpicture'],

      useful_count: 3,
      funny_count: 2,
      cool_count: 1,

      comment: {
        comment_text: 'Glad you enjoyed it!',
        commenter_name: 'mr. manager',
        commenter_date: '2002-12-09',
        commenter_photo: 'fb/businessownerpicture'
      }
     }
  ]
})





const temp = {
  restaurant_id: 10000001,
  restaurant_name: 'philips place',
  reviews: [
    {
      user_id: 10000001,
      business_review_id: 10000001,
      user_name: 'philip ahmner',
      user_location: 'san francsicso',
      user_friend_count: 4,
      user_review_count: 5,
      user_photo_count: 6,
      user_profile_picture: 'fb.com/myuserphoto',
      elite_user: true,

      review_id: 10000001,
      review_text: 'really really yummy :)',
      review_rating: 1,
      review_date: '2002-12-09',
      review_images: ['justonpicture'],

      useful_count: 3,
      funny_count: 2,
      cool_count: 1,

      comment: {
        comment_text: 'Glad you enjoyed it!',
        commenter_name: 'mr. manager',
        commenter_date: '2002-12-09',
        commenter_photo: 'fb/businessownerpicture'
      }
     }
  ]
}