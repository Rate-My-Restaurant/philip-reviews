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

### Update guest info
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

### Delete guest
  <!-- * DELETE `/api/reviews/:id` -->
  <!-- * DELETE `/api/:restaurantId/reviews/:id` -->
  * DELETE `/api/guest/:id`

**Path Parameters:**
  * `id` guest id

**Success Status Code:** `204`



<!-- ------------------------------------------------------------------------------------- -->




### Get restaurant info
  * GET `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "restaurant_name": "String"
    }
```


### Add restaurant
  * POST `/api/restaurant/:id`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "restaurant_name": "String"
    }
```


### Update restaurant info
  * PATCH `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "restaurant_name": "String"
    }
```

### Delete restaurant
  * DELETE `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`


<!-- ------------------------------------------------- -->


### Get review info
  * GET `/api/review/:id`

**Path Parameters:**
  * `id` review id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "review_text": "String",
      "review_rating": "Number",
      "review_date": "String",
      "useful_count": "Number",
      "funny_count": "Number",
      "cool_count": "Number",
      "images": "Array",  //CHECK THIS ONE!!!
      "restaurant_id": "Number",
      "guest_id": "Number",
      "comment": {
        "comment_text": "String",
        "commenter_name": "String",
        "commerneter_date": "String"
      }
    }
```


### Add review
  * POST `/api/review/:id`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "review_text": "String",
      "review_rating": "Number",
      "review_date": "String",
      "useful_count": "Number",
      "funny_count": "Number",
      "cool_count": "Number",
      "images": "Array",  //CHECK THIS ONE!!!
      "restaurant_id": "Number",
      "guest_id": "Number",
      "comment": {
        "comment_text": "String",
        "commenter_name": "String",
        "commerneter_date": "String"
      }
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
      "review_text": "String",
      "review_rating": "Number",
      "review_date": "String",
      "useful_count": "Number",
      "funny_count": "Number",
      "cool_count": "Number",
      "images": "Array",  //CHECK THIS ONE!!!
      "restaurant_id": "Number",
      "guest_id": "Number",
      "comment": {
        "comment_text": "String",
        "commenter_name": "String",
        "commerneter_date": "String"
      }
    }
```

### Delete review
  * DELETE `/api/review/:id`

**Path Parameters:**
  * `id` review id

**Success Status Code:** `204`