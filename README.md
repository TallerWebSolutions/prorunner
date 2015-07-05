# Prorunner

A test application

## Installation

First of all you have to install npm and node.js to your box. Installation instructions with nvm can be found [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps).

After that you need to install bower, gulp and sails main packages to make all things to happen. These can be installed with following commands on your box.

```
sudo npm install bower -g
sudo npm install gulp -g
sudo npm install sails -g
```

## How running this application

### Server

  ```
  cd server
  sails lift
  ```
This will start sails.js server on defined port. By default this is accessible from http://localhost:1337 url. If you try that with your browser you should only see page that contains Not Found message on it. This means that everything is ok.

### Client
  ```
  cd client
  gulp serve
  ```
This will start simple web server that you can use within developing frontend side. By default this is accessible from http://localhost:3000 url. You should be see projects page.
