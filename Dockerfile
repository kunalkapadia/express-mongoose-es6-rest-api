# take default image of node boron i.e  node 6.x
FROM node:boron

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# only copy package.json initially so that `RUN npm install` layer is recreated only
# if there are changes in package.json
COPY package.json /app

# install only prod dependencies
RUN npm install

# copy all file from current dir to /app in container
COPY . /app/

# expose port 4040
EXPOSE 4040

# cmd to start service
CMD [ "npm", "start" ]
