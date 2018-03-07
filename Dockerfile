# take default image of node boron i.e node 8.x
FROM node:8

MAINTAINER Kunal Kapadia <kunalkapadia12@gmail.com>

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json yarn.lock /config/ /app/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --pure-lockfile

# copy all file from current dir to /app in container
COPY . /app/

# expose port 4040
EXPOSE 4040

# build node app with babel
RUN yarn prod:build

# cmd to start service
CMD [ "yarn", "prod:start" ]
