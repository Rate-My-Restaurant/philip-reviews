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
      review_rating Number,
      review_date Date,
      useful_count Number,
      funny_count Number,
      cool_count Number,
      images: [String],  //this seems to check out in the SO answers that I read.
      comment {
        comment_text: String,
        commenter_name: String,
        commenter_date: Date,
        commenter_photo: String
      }
     }
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);