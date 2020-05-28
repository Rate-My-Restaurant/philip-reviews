
-- Selects all reviews for a particular restaurant.
-- IF a review has no pictures, it appears once.
-- If a review has pictures, a copy of that review appears once per photo

SELECT * FROM review
INNER JOIN guest ON guest.guest_id = review.guest_id
LEFT JOIN reviewimages ON reviewimages.review_id = review.review_id
WHERE restaurant_id = 4;