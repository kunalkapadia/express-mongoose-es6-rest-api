# vi /etc/ssh/ssh_config
# i Host 192.168.0.*  StrictHostKeyChecking no UserKnownHostsFile=/dev/null

# cd ~/.ssh
# rm known_hosts
# ln -s /dev/null known_hosts

git config --global user.name "$GIT_USER_NAME"
git config --global user.email $GIT_USER_EMAIL

# Install the Heroku gem (or the Heroku toolbelt)
gem install $PROVIDER
# Add your Heroku git repo:
git remote rm $PROVIDER ; 
git remote add $PROVIDER git@$PROVIDER.com:$PROVIDER_APP_NAME.git ;
# Add your Heroku API key:
export HEROKU_API_KEY=$HEROKU_API_KEY
# Turn off warnings about SSH keys:
echo "   Host heroku.com" >> ~/.ssh/config
echo "   StrictHostKeyChecking no" >> ~/.ssh/config
echo "   CheckHostIP no" >> ~/.ssh/config
echo "   UserKnownHostsFile=/dev/null" >> ~/.ssh/config
# Clear your current Heroku SSH keys:
$PROVIDER keys:clear
# Add a new SSH key to Heroku
yes | $PROVIDER keys:add

git add dist/ ;
git checkout -b $NEW_TRAVIS_BRANCH ;
git commit -m "$TRAVIS_COMMIT_MESSAGE" ;
# Push to Heroku!
git fetch --all --unshallow
yes | git push --force $PROVIDER $NEW_TRAVIS_BRANCH:$PROVIDER_BRANCH ;


# echo -e "yes" | ./travis.sh
