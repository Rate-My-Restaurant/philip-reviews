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
  -- FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id),
  -- FOREIGN KEY (guest_id) REFERENCES guest(guest_id),
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
  -- FOREIGN KEY (associated_review_id) REFERENCES review(review_id),
  review_image_url VARCHAR(200)
);

COPY guest(guest_id,username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/guestData.csv' DELIMITER ',' CSV HEADER;

COPY restaurant(restaurant_id,restaurant_name) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/restaurantData.csv' DELIMITER ',' CSV HEADER;

COPY review(review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/reviewData.csv' DELIMITER ',' CSV HEADER;

COPY reviewimages(associated_review_id,review_image_id,review_image_url) FROM '/Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/reviewImagesData.csv' DELIMITER ',' CSV HEADER;


ALTER TABLE review
ADD CONSTRAINT parent_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);

ALTER TABLE review
ADD CONSTRAINT review_writer FOREIGN KEY (guest_id) REFERENCES guest(guest_id);

ALTER TABLE reviewimages
ADD CONSTRAINT image_writer FOREIGN KEY (associated_review_id) REFERENCES review(review_id);




-- pv /Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/csvFiles/reviewData.csv | psql -U ec2 -d ratemyrestaurant --host 52.53.182.119 --command="COPY review(review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo) FROM STDIN DELIMITER ',' CSV HEADER;"

-- associated_review_id

-- CREATE INDEX ON reviews (columnName) 
-- CREATE UNIQUE INDEX title_idx ON films (title); 
-- CREATE INDEX ON guest (guest_id);   this should be the one im using.


-- SELECT count(*) FROM review
-- INNER JOIN guest ON guest.guest_id = review.guest_id
-- LEFT JOIN reviewimages ON reviewimages.associated_review_id = review.review_id
-- WHERE restaurant_id = 2;

-- INSERT INTO review(review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count)VALUES(35000001,10,10,'yum super super great food!',5,'May 25,1997',12,1,99)




-- 'review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo\n'
-- -- COPY REVIEWIMAGES


-- SELECT
--     indexname,
--     indexdef
-- FROM
--     pg_indexes
-- WHERE
--     tablename = 'guest';


-- DROP INDEX guest_guest_id_idx
