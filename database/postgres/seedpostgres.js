

// var counter = 1;
// var dataToWrite =
var fs = require('fs');
var counter = 2;


// fs.writeFile('csvFiles/Guest_100.csv', `30,Jack,Los Angeles,400,200,300,https://www.facebook.com/photo/?fbid=10222593186123601&set=a.1646786014860,FALSE`, 'utf8', function (err) {
//   if (err) {
//     console.log('Some error occured - file either not saved or corrupted file saved.');
//   } else{
//     console.log('It\'s saved!');
//   }
// });



const writeUsers = fs.createWriteStream('./csvFiles/Guest_100.csv');
writeUsers.write('guest_id,username,user_location,user_friend_count,user_photo_count,user_profile_picture,elite_user\n', 'utf8');


// This will create ten million user files. While you can create you data as JSON objects and convert them to CSV with any number of npm modules I find it easier to create the data as comma separated values from the get-go.
function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const username = 'john';
      const avatar = 'image.url';
      // const data = `${id},${username},${avatar}\n`;

      const data = `${id},sneakyphilipusername,san francisco,300,100,myurlforprofilepicture,TRUE\n`;
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
});