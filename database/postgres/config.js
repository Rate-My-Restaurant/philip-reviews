//MAYBE STICK THE BELOW INTO SCHEMA.SQL.
//I DELETED ALL OF THIS TEXT BELOW BECAUSE IT WAS MESSING W MY DATABASE/TABLE BUILD SCRIPT.

// -- database/postgres/schema.sql
// --  in guest table:
//   -- unique identifyer to travel to person's profile.
//   -- query database to see how many reviews match what you're expecting, and make that equal the 'number of reviews'

// -- insert into guest (username, user_location, user_friend_count, user_review_count, user_photo_count, user_profile_picture, elite_user) values ('phamner', 'Oakland, CA', 123, 3, 999, 'https://www.facebook.com/photo/?fbid=10222593186123601&set=a.1646786014762', TRUE)


// --  //make the images in review table an array of strings, each representing a photo url


// -- psql -U postgres < /Users/philiphamner/Documents/HRSF127/SDC-127/yelp_business-reviews/database/postgres/schema.sql