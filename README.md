# script-server

Minifies and serves to client js scripts

## server

```javascript
require('script-server').serve(url, pathToScripts, srv);
```

pathToScripts is a single path or an array of paths to js scripts.

After, it may be accessed by url.

Server is any node.js http server.

After you should manually call server.listen to start it.

For more detailed documentation use sources.
