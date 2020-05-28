
-- Selects all reviews for a particular restaurant.
-- IF a review has no pictures, it appears once.
-- If a review has pictures, a copy of that review appears once per photo

-- SELECT * FROM review
-- INNER JOIN guest ON guest.guest_id = review.guest_id
-- LEFT JOIN reviewimages ON reviewimages.review_id = review.review_id
-- WHERE restaurant_id = 4;

-- READ
SELECT * FROM review
INNER JOIN guest ON guest.guest_id = review.guest_id
LEFT JOIN reviewimages ON reviewimages.associated_review_id = review.review_id
WHERE restaurant_id = 15


-- CREATE
-- INSERT INTO guest(username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user)
-- VALUES('philipsusername','SF California',123,222,534,'www.myprofilepicture.com',false);


INSERT INTO review(review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count)VALUES(10000002,10,10,'yum super super great food!',5,'May 25,1997',12,1,99)



-- CREATE INDEX ON review(restaurant_id);
--
-- availability is my table, id is a column
