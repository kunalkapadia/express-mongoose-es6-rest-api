#!/bin/bash

# set -o errexit -o nounset

# if [ "$TRAVIS_BRANCH" != "master" ]
# then
#   echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
#   exit 0
# fi

# rev=$(git rev-parse --short HEAD)

# cd stage/_book

# git init
git config user.name "Surabhi Sharma"
git config user.email "surabhisharma.226005@gmail.com"

#git remote add upstream "https://$GH_TOKEN@github.com/rust-lang/rust-by-example.git"
git remote add upstream "https://github.com/surabhi226005/express-mongoose-es6-rest-api.git"
echo "Remote branch added"
git fetch
echo "Remote fetched"
git branch --track develop origin/develop
echo "will not come here"
git branch
git checkout develop
git pull

#git fetch upstream
#git reset upstream/gh-pages

#echo "rustbyexample.com" > CNAME

# touch .

# git add -A .
# git commit -m "rebuild pages at ${rev}"
# git push -q upstream HEAD:gh-pages
