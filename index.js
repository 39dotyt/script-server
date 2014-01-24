/**
 * @license GPLv3
 * @author 0@39.yt (Yurij Mikhalevich)
 */

var path = require('path'),
    uglifyjs = require('uglify-js');


/**
 * @param {string} url
 * @param {string|string[]} pathToScripts
 * @param {Object} srv
 */
exports.serve = function(url, pathToScripts, srv) {
  var evs = srv.listeners('request').slice(0);
  srv.removeAllListeners('request');
  srv.on('request', function(req, res) {
    if (0 === req.url.indexOf(url)) {
      var result = uglifyjs.minify(pathToScripts);
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(result.code);
      res.end();
    } else {
      for (var i = 0; i < evs.length; i++) {
        evs[i].call(srv, req, res);
      }
    }
  });
};
