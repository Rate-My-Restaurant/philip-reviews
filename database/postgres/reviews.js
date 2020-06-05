const { pool } = require('./index.js');

module.exports = {
  insertMany: (reviews) => {
    console.log('hit insertmany')
    const values = reviews.map((review) => `(${Object.values(review).join(',')})`);
    const insert = `
      INSERT INTO review
        (review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count)
      VALUES`;

    const query = `${insert} ${values}`;
    // console.log(query);

    return pool.query(query)
      .then((response) => {
        console.log(response)
        // console.log(query);
      })
      .catch(console.error);

  }


}

// INSERT INTO review(review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count)VALUES(10000002,10,10,'yum super super great food!',5,'May 25,1997',12,1,99)
