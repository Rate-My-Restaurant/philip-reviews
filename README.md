## Server API

### Get guest info
  <!-- * GET `/api/reviews/:id` -->
  <!-- * GET `/api/:restaurantId/reviews/:id` -->
  * GET `/api/guest/:id`

**Path Parameters:**
  * `id` guest id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "username": "String",
      "user_location": "String",
      "user_friend_count": "Number",
      "user_review_count": "Number",
      "user_photo_count": "Number",
      "user_profile_picture": "String",
      "elite_user": "Boolean"
    }
```




### Add guest
  <!-- * POST `/api/reviews` -->
  <!-- * POST `/api/:restaurantId/reviews/:id` -->
  * POST `/api/guest/:id`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "username": "String",
      "user_location": "String",
      "user_friend_count": "Number",
      "user_review_count": "Number",
      "user_photo_count": "Number",
      "user_profile_picture": "String",
      "elite_user": "Boolean"
    }
```




### Update review info
  <!-- * PATCH `/api/reviews/:id` -->
  <!-- * PATCH `/api/:restaurantId/reviews/:id` -->
  * PATCH `/api/guest/:id`

**Path Parameters:**
  * `id` guest id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "username": "String",
      "user_location": "String",
      "user_friend_count": "Number",
      "user_review_count": "Number",
      "user_photo_count": "Number",
      "user_profile_picture": "String",
      "elite_user": "Boolean"
    }
```




### Delete review
  <!-- * DELETE `/api/reviews/:id` -->
  <!-- * DELETE `/api/:restaurantId/reviews/:id` -->
  * DELETE `/api/guest/:id`

**Path Parameters:**
  * `id` guest id

**Success Status Code:** `204`

