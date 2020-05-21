## Server API

### Get review info
  * GET `/api/review/:id`

  <!-- Question: should I restructure path to `/api/:restaurantId/review/:id` -->

**Path Parameters:**
  * `id` review id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "restaurant_id": "Number",
      "restaurant_name": "String",
      "username": "String",
      "user_location": "String",
      "user_friend_count": "Number",
      "user_review_count": "Number",
      "user_photo_count": "Number",
      "user_profile_picture": "String",
      "elite_user": "Boolean",
      "review_rating": "Integer",
      "review_date": "YYYY-MM-MM",
      "useful_count": "Number",
      "funny_count": "Number",
      "cool_count": "Number",
      "images": "String",
    }
```




### Add review
  * POST `/api/review`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "restaurant_id": "Number",
      "restaurant_name": "String",
      "username": "String",
      "user_location": "String",
      "user_friend_count": "Number",
      "user_review_count": "Number",
      "user_photo_count": "Number",
      "user_profile_picture": "String",
      "elite_user": "Boolean",
      "review_rating": "Integer",
      "review_date": "YYYY-MM-MM",
      "useful_count": "Number",
      "funny_count": "Number",
      "cool_count": "Number",
      "images": "String"
    }
```




### Update review info
  * PATCH `/api/review/:id`

**Path Parameters:**
  * `id` review id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "restaurant_id": "Number",
      "restaurant_name": "String",
      "username": "String",
      "user_location": "String",
      "user_friend_count": "Number",
      "user_review_count": "Number",
      "user_photo_count": "Number",
      "user_profile_picture": "String",
      "elite_user": "Boolean",
      "review_rating": "Integer",
      "review_date": "YYYY-MM-MM",
      "useful_count": "Number",
      "funny_count": "Number",
      "cool_count": "Number",
      "images": "String"
    }
```




### Delete review
  * DELETE `/api/review/:id`

**Path Parameters:**
  * `id` review id

**Success Status Code:** `204`

