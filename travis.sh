git config user.name "Surabhi Sharma"
git config user.email "surabhisharma.226005@gmail.com"

#git remote add upstream "https://$GH_TOKEN@github.com/rust-lang/rust-by-example.git"
# git remote add upstream "https://github.com/surabhi226005/express-mongoose-es6-rest-api.git"
echo "Remote branch added"
git fetch
echo "Remote fetched"
git branch --track develop origin/develop
git branch
git checkout develop
git pull
