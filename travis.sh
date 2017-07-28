# vi /etc/ssh/ssh_config
# i Host 192.168.0.*  StrictHostKeyChecking no UserKnownHostsFile=/dev/null

# cd ~/.ssh
# rm known_hosts
# ln -s /dev/null known_hosts

git config --global user.name "$GIT_USER_NAME"
git config --global user.email $GIT_USER_EMAIL

git remote rm $PROVIDER ; 
git remote add $PROVIDER git@$PROVIDER.com:$PROVIDER_APP_NAME.git ;

git add dist/ ;
git checkout -b $TRAVIS_BRANCH ;
git commit -m "$TRAVIS_COMMIT_MESSAGE" ;
git push $PROVIDER $TRAVIS_BRANCH:PROVIDER_BRANCH ;

echo -e "yes" | ./travis.sh ; fi
