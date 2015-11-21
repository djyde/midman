# Midman

Midman is a tool for hosting static file on server.

# Why use Midman

I used to use VPS for transfering some files that was blocked. Then use `python -m SimpleHTTPServer <port>` for hosting these files. But `SimpleHTTPServer` is unstable. The Midman is a replacement. It's based on Node.js, make you could manage the server proccess with `PM2`.

# Requirements

- Node.js >= 4.0

# Installation

### Git way

```bash

$ git clone https://github.com/djyde/midman.git

```

### NPM way

```bash

$ mkdir midman && npm install

```

# Usage

```bash

$ cd midman 

$ cd midman/node_modules # if using NPM way

$ npm install

$ node index.js # pm2 start index.js -n Midman

```

# Configure

You can configure `port`, `dir` and `hostname` in `config.js`

```javascript

{
  dir // The folder where the static files are. Default is ~/Midan
  port , // The port will be listen. Default is 1024
  hostname  // for copying file link
}

```

# TIPS

We recommend you using `pm2` to manage your Node proccess. It makes your server more stable.

# License

MIT License


