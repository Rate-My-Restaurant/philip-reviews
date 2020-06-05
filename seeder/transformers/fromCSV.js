
function csvLineToObj(csvLine) {
  const values = csvLine.split(',');
  // STUDENT
  return {
    review_id: parseInt(values[0]),
    restaurant_id: parseInt(values[1]),
    guest_id: parseInt(values[2]),
    review_text: `"${values[3]}"`,
    review_rating: parseInt(values[4]),
    review_date: `"${values[5]}"`,
    useful_count: parseInt(values[6]),
    funny_count: parseInt(values[7]),
    cool_count: parseInt(values[8]),
    comment_text: values[9] === null ? null : `"${values[9]}"`,
    commenter_name: values[10] === null ? null : `"${values[10]}"`,
    comment_date: values[11] === null ? null : `"${values[11]}"`,
    commenter_photo: values[12],
  };
}

module.exports = csvLineToObj;

// review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo