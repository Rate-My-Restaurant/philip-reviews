const faker = require('faker');
const fs = require('fs');

//GUESTS
const writeData = fs.createWriteStream('./csvFiles/guestData.csv');
writeData.write('guest_id,username,user_location,user_friend_count,user_review_count,user_photo_count,user_profile_picture,elite_user\n', 'utf8');



//eventually want 10mm unique guests, with  10% of that number (1mm posting reviews, averaging 10 per active user, for a total of 10mm unique reviews)
//GUESTS
function writeGuestsToCSV(writer, encoding, callback) {
  let i = 10000000;
  let guest_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      guest_id += 1;
      const username = faker.internet.userName();
      const location = faker.address.city() + ' ' + faker.address.stateAbbr();
      const user_friend_count = 300;
      const user_review_count = 150;
      const user_photo_count = 100;
      const user_profile_picture = faker.image.imageUrl();
      const elite_user = true;

      const data = `${guest_id},${username},${location},${user_friend_count},${user_review_count},${user_photo_count},${user_profile_picture},${elite_user}\n`;

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


writeGuestsToCSV(writeData, 'utf-8', () => {
  writeData.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 10,000,000 RECORDS (guests) TO guestData.csv`)
});