var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  restaurantId: Number,
  restaurant_name: String,
  reviews: [
    {
      user_name String,
      user_location String,
      user_friend_count Number,
      user_review_count Number,
      user_photo_count Number,
      user_profile_picture String,
      elite_user Boolean,

      review_text String,
      review_rating Number,
      review_date Date,
      review_images: [String],

      useful_count Number,
      funny_count Number,
      cool_count Number,

      comment {
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