FROM node:alpine
# This is the image we'll use as the base

WORKDIR /usr/src/app
# Create app directory

COPY . .
# Copy the app to the directory

RUN npm install
# Install dependencies

EXPOSE 3000
# The port we want the container to open (i.e. run on)

CMD [ "npm", "run", "start" ]
# The command to start the server inside the container      
