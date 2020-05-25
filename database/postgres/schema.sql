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
  review_date DATE NOT NULL,
  useful_count smallint,
  funny_count smallint,
  cool_count smallint,
  comment_text VARCHAR(5000),
  commenter_name VARCHAR(40),
  comment_date DATE,
  commenter_photo VARCHAR(200)
);

CREATE TABLE reviewimages(
  review_id INTEGER,
  review_image_id SERIAL NOT NULL PRIMARY KEY,
  FOREIGN KEY (review_id) REFERENCES review(review_id),
  review_image_url VARCHAR(200)
);







COPY guest(guest_id,username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/Guest_100.csv' DELIMITER ',' CSV HEADER;

COPY restaurant(restaurant_id,restaurant_name) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/restaurant_100.csv' DELIMITER ',' CSV HEADER;

COPY review(review,review_text,review_rating,review_date,useful_count,funny_count,cool_count,restaurant_id,guest_id) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/review_100.csv' DELIMITER ',' CSV HEADER;

-- -- COPY REVIEWIMAGES