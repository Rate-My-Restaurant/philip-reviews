DROP DATABASE IF EXISTS ratemyrestaurant;

CREATE DATABASE ratemyrestaurant;

\c ratemyrestaurant;

DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS guest;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE guest(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  user_location VARCHAR(100) NOT NULL,
  user_friend_count INTEGER NOT NULL,
  user_review_count INTEGER NOT NULL,
  user_photo_count INTEGER NOT NULL,
  user_profile_picture VARCHAR(200) NOT NULL,
  elite_user BOOLEAN
);

CREATE TABLE restaurant(
  id SERIAL NOT NULL PRIMARY KEY,
  restaurant_name VARCHAR(100) NOT NULL
);

CREATE TABLE review(
  id SERIAL NOT NULL PRIMARY KEY,
  review_text VARCHAR(5000) NOT NULL,
  review_rating INTEGER,
  review_date DATE NOT NULL,
  useful_count INTEGER,
  funny_count INTEGER,
  cool_count INTEGER,
  restaurant_id INTEGER REFERENCES restaurant(id),
  guest_id INTEGER REFERENCES guest(id)
);


  -- images INTEGER ARRAY,
  -- -- comment {
  --   comment_text: VARCHAR(5000),
  --   commenter_name:
  --   commerneter_date:
  --   commenter_photo: String
  -- }

COPY guest(id,username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/Guest_100.csv' DELIMITER ',' CSV HEADER;

COPY restaurant(id,restaurant_name) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/restaurant_100.csv' DELIMITER ',' CSV HEADER;

COPY review(id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,restaurant_id,guest_id) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/review_100.csv' DELIMITER ',' CSV HEADER;