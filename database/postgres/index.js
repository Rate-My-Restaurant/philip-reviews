const Pool = require('pg').Pool;

//PLEASE NOTE, MOST OF MY METHODS ONLY CONSOLE.LOG THE DATA, THEY ARE NOT RETURNING IT TO THE USER.
//I MUST MAKE THE SWITCH AT SOME POINT IN THE FUTURE, BUT FOR NOW CONSOLE.LOGGING WORKS.

const pool = new Pool (
  {
    user: 'philiphamner',
    database: 'ratemyrestaurant',
  }
)


//make sure the below methods accept a callback so we can transfer data back to the user.
//change all of the methods to pass data rather than console.log the success or failure.
module.exports = {
  addGuest: () => {
    const text = 'INSERT INTO guest(id, username, user_location, user_friend_count, user_review_count, user_photo_count, user_profile_picture, elite_user) VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [ 20, 'Philip', 'Point Reyes, CA', 670, 25, 100, 'https://www.facebook.com/photo/?fbid=10222593186123601&set=a.1646786014762', 'true' ];

    pool.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log('successfully added new guest to TABLE guest')
        // res.send('200');
      }
    })
  },
  getGuestById: (id) => {
    pool.query('SELECT * FROM guest WHERE id = $1', [id], (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('guest:', res.rows[0])
      }
    })
  },
  getAllGuests: () => {
    pool.query('SELECT * FROM guest;'), (err, data) => {
      if (err){
        console.log(err)
      } else {
        console.log('data')
        // console.log('guest:', res.rows)
        res.send(data);
        //something weird is going on here, it isn't console.logging the way i'd expect, i.e. logging nothing.
      }
    }
  },
  addRestaurant: () => {
    const text = 'INSERT INTO restaurant(id, restaurant_name) VALUES($1, $2)';
    const values = [ 3, 'Tiger Queens Famous Steaks2' ];

    pool.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(`successfully added new restaurant (${values[1]}) to TABLE restaurant`)
        // res.send('200')
      }
    })
  },
  getRestaurantById: (id) => {
    pool.query('SELECT * FROM restaurant WHERE id = $1', [id], (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log('guest:', res.rows[0])
      }
    })
  },
  getAllRestaurants: () => {
    pool.query('SELECT * FROM restaurant'), (err, data) => {
      if (err){
        console.log(err)
      } else {
        console.log('data')
        // console.log('guest:', res.rows)
        res.send(data);
        //something weird is going on here, it isn't console.logging the way i'd expect, i.e. logging nothing.
      }
    }
  },
  getReviewsByRestaurantId: (id, callback) => {
    pool.query(`SELECT * FROM review
                INNER JOIN guest ON guest.guest_id = review.guest_id
                LEFT JOIN reviewimages ON reviewimages.associated_review_id = review.review_id
                WHERE restaurant_id = $1`, [id], (error, data) => {
      if (error) {
        console.log('ERROR IN DB: ', error);
      } else {
        console.log('success IN THE DATABASE', data);
        callback(data);
      }
    })
  }
}