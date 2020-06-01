const express = require('express');
const db = require('../database/postgres/index.js');  //postgres db
// const db = require('../database/index.js');

const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());



//APPROPRIATE API ROUTE:  http://localhost:8080/restaurants/10/comments
app.get(`/restaurants/:restaurantId/comments`, (req, res) => {
  db.getReviewsByRestaurantId(req.params.restaurantId, (data) => {
    if (data){
      let arrayOfData = data.rows;

      // let sortByDate = function (a, b) {
      //   return new Date(a.result.date).getTime() - new Date(b.result.date).getTime();
      // }

      let sortedArrayOfData = arrayOfData.sort(function(a, b) {
        return b.review_date > a.review_date;
      }));
    // your_array.sort(comp);

      // let sorted = data.sort()
      res.send(sortedArrayOfData)
    } else {
      res.send('failure')
    }
  })
})

//BELOW IS DEPRECIATED.  DOESN'T DYNAMCIALLY RETURN REVIEWS BASED ON RESTAURANT NUMBER (PARAMETER) PASSED IN BY API.  PLEASE USE app.get(`/restaurants/:restaurantId/comments`, ....) ABOVE.
// app.get(`/restaurants/comments`, (req, res) => {
//   db.getReviewsByRestaurantId(4, (data) => {
//     if (data){
//       res.send(data)
//     } else {
//       res.send('failure')
//     }
//   })
//       // res.status(200).send('data');
// })








//BELOW IS ALL MINJI'S WORK
// app.get('/reviews/restaurants/:id', (req, res) => {
//   console.log(req.query);
//   if(req.query.sort_by) {
//     return db.sortReviews(req.params.id, req.query.sort_by, (error, data) => {
//       if (error) {
//         console.log(error);
//         res.status(404).send('error GET on sort reviews');
//       } else {
//         res.status(200).send(data);
//       }
//     })
//   } else if (req.query.q) {
//     return db.searchedReviews(req.params.id, req.query.q, (error, data) => {
//       if (error) {
//         console.log(error);
//         res.status(404).send('error GET on searched reviews');
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   }
//   db.allReviews(req.params.id, (error, data) => {
//     if (error) {
//       console.log(error);
//       res.status(404).send('error GET request on all reviews');
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });


// app.post('/reviews/emoji', (req, res) => {
//     db.emojiPlus(req.body, (err, data) => {
//         if (err) {
//           res.status(404).send('error updating emoji')
//         } else {
//           res.status(200).send(data)
//         }
//       });
//     }
//   )

//   // MINJI WASN'T USING THIS ONE



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
