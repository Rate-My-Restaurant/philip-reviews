dir="./reviewDataSplit/"
file="./reviewData.csv"
newFile="reviewData"

# head -n 3 "$file"
# exit 0

# printf "review_id,restaurant_id,guest_id,review_text,review_rating,review_date,useful_count,funny_count,cool_count,comment_text,commenter_name,comment_date,commenter_photo\n" > "${dir}${newFile}1.csv"

tail -n +2 "$file" | head -n 10 >> "${dir}${newFile}-1.csv"
# tail -n +2 "$file" | head -n 3500000 >> "${dir}${newFile}1.csv"
echo "Done writing"
wc -l "${dir}${newFile}1.csv"
tail "${dir}${newFile}1.csv"

# tail -n +1000002 "$file" | head -n 1000000 >> "${dir}${newFile}2.csv"
# echo "Done writing"
# wc -l "${dir}${newFile}1.csv"
# tail "${dir}${newFile}1.csv"