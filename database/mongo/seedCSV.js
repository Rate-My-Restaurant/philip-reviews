const faker = require('faker');
const fs = require('fs');

//GUESTS
const writeData = fs.createWriteStream('./csvFiles/mongoData.csv');
writeData.write('restaurant_id,user_id,business_review_id,review_id,restaurant_name,user_name,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user,review_text,review_rating,review_date,review_images,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo\n', 'utf8');



//eventually want 10mm unique guests, with  10% of that number (1mm posting reviews, averaging 10 per active user, for a total of 10mm unique reviews)
//GUESTS
function writeDataToCSV(writer, encoding, callback) {
  let i = 10000000;
  let restaurant_id = 0;
  let user_id = 0;
  let business_review_id = 0;
  let review_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      restaurant_id += 1;
      user_id += 1;
      business_review_id += 1;
      review_id += 1;

      const restaurant_name = faker.company.companyName().replace(/,/g, "");
      const user_name = faker.internet.userName();
      const user_location = faker.address.city() + ' ' + faker.address.stateAbbr();
      const user_friend_count = 200;
      const user_review_count = 150;
      const user_photo_count = 100;
      const user_profile_picture = faker.image.imageUrl();
      const elite_user = true;

      const review_text = faker.lorem.paragraph();
      const review_rating = faker.random.number(5);
      const review_date = faker.date.past();
      const review_images = null;

      const useful_count = faker.random.number(300);
      const funny_count = faker.random.number(500);
      const cool_count = faker.random.number(400);

      //the below comment info is if the business owner has not responded to the review.
      let comment_text = null;
      let commenter_name = null;
      let comment_date = null;
      let commenter_photo = null;

      const data = `${restaurant_id},${user_id},${business_review_id},${review_id},${restaurant_name},${user_name},${user_location},${user_friend_count},${user_review_count},${user_photo_count},${user_profile_picture},${elite_user},${review_text},${review_rating},${review_date},${review_images},${useful_count},${funny_count},${cool_count},${comment_text},${commenter_name},${comment_date},${commenter_photo}\n`;


      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}


writeDataToCSV(writeData, 'utf-8', () => {
  writeData.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 10000 RECORDS (complete reivew) TO mongoData.csv`)
});




      // const username = faker.internet.userName();
      // const location = faker.address.city() + ' ' + faker.address.stateAbbr();
      // const user_friend_count = 300;
      // const user_review_count = 150;
      // const user_photo_count = 100;
      // const user_profile_picture = faker.image.imageUrl();
      // const elite_user = true;

      // const data = `${guest_id},${username},${location},${user_friend_count},${user_review_count},${user_photo_count},${user_profile_picture},${elite_user}\n`;