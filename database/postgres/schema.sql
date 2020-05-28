DROP DATABASE IF EXISTS ratemyrestaurant;

CREATE DATABASE ratemyrestaurant;

\c ratemyrestaurant;

DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS guest;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE guest(
  guest_id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  user_location VARCHAR(100) NOT NULL,
  user_friend_count smallint NOT NULL,
  user_review_count smallint NOT NULL,
  user_photo_count smallint NOT NULL,
  user_profile_picture VARCHAR(200) NOT NULL,
  elite_user BOOLEAN
);

CREATE TABLE restaurant(
  restaurant_id SERIAL NOT NULL PRIMARY KEY,
  restaurant_name VARCHAR(100) NOT NULL
);

CREATE TABLE review(
  review_id SERIAL NOT NULL PRIMARY KEY,
  restaurant_id INTEGER,
  guest_id INTEGER,
  FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id),
  FOREIGN KEY (guest_id) REFERENCES guest(guest_id),
  review_text VARCHAR(5000) NOT NULL,
  review_rating smallint,
  review_date VARCHAR(100),
  useful_count smallint,
  funny_count smallint,
  cool_count smallint,
  comment_text VARCHAR(5000),
  commenter_name VARCHAR(40),
  comment_date VARCHAR(100),
  commenter_photo VARCHAR(200)
);

CREATE TABLE reviewimages(
  review_image_id SERIAL NOT NULL PRIMARY KEY,
  associated_review_id INTEGER,
  FOREIGN KEY (associated_review_id) REFERENCES review(review_id),
  review_image_url VARCHAR(200)
);

COPY guest(guest_id,username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/guestData.csv' DELIMITER ',' CSV HEADER;

COPY restaurant(restaurant_id,restaurant_name) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/restaurantData.csv' DELIMITER ',' CSV HEADER;

COPY review(review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/reviewData.csv' DELIMITER ',' CSV HEADER;

COPY reviewimages(review_id,review_image_id,review_image_url) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/reviewImagesData.csv' DELIMITER ',' CSV HEADER;














-- 'review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo\n'
-- -- COPY REVIEWIMAGES