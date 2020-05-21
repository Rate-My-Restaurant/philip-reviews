
DROP DATABASE IF EXISTS ratemyrestaurant;

CREATE DATABASE ratemyrestaurant;

\c ratemyrestaurant;

DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS guest;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE guest(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  user_location VARCHAR(200) NOT NULL,
  user_friend_count INTEGER NOT NULL,
  user_review_count INTEGER NOT NULL,
  user_photo_count INTEGER NOT NULL,
  user_profile_picture VARCHAR(200) NOT NULL,
  elite_user BOOLEAN,
);

CREATE TABLE restaurant(
  id SERIAL NOT NULL PRIMARY KEY,
  restaurant_name VARCHAR(200) NOT NULL,
);

CREATE TABLE review(
  id SERIAL NOT NULL PRIMARY KEY,
  review_text VARCHAR(2000) NOT NULL,
  review_rating INTEGER CHECK (review BETWEEN 0 AND 5),
  review_date DATE NOT NULL,
  useful_count INTEGER,
  funny_count INTEGER,
  cool_count INTEGER,
  images VARCHAR(200) NOT NULL,
  restaurant_id INTEGER REFERENCES restaurant(id),
  guest_id INTEGER REFERENCES guest(id)
);