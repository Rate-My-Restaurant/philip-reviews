const faker = require('faker');
const fs = require('fs');


// fs.writeFile('csvFiles/Guest_100.csv', `30,Jack,Los Angeles,400,200,300,https://www.facebook.com/photo/?fbid=10222593186123601&set=a.1646786014860,FALSE`, 'utf8', function (err) {
//   if (err) {
//     console.log('Some error occured - file either not saved or corrupted file saved.');
//   } else{
//     console.log('It\'s saved!');
//   }
// });



const writeUsers = fs.createWriteStream('./csvFiles/Guest_100.csv');
writeUsers.write('guest_id,username,user_location,user_friend_count,user_photo_count,user_profile_picture,elite_user\n', 'utf8');


function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100;
  let guest_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      guest_id += 1;
      const username = faker.internet.userName();
      const location = faker.address.city() + ' ' + faker.address.stateAbbr();
      const user_friend_count = 300;
      const user_photo_count = 100;
      const user_profile_picture = faker.image.imageUrl();
      const elite_user = true;

      // const data = `${id},${username},${avatar}\n`;
      const data = `${guest_id},${username},${location},${user_friend_count},${user_photo_count},${user_profile_picture},${elite_user}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}


// Then invoke the function with a callback telling the write to end.
writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log(`YOU HAVE SUCCESSFULLY ADDED 100 RECORDS TO Guest_100.csv`)
});