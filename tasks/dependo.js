var Dependo = require("dependo");
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function (gulp) {

  var options = {
    src: './src',
    dst: './build/docs/dependency_graph.html',
    dependoOptions: {
      format: 'cjs',
      exclude: 'node_modules',
    }
  };

  /**
   * Generates a dependency graph using the dependo npm package
   * @name dependo
   * @memberof build.tasks
   */
  return gulp.task('dependo', function (cb) {
    var dependo = new Dependo(options.src, options.dependoOptions);

    mkdirp(path.dirname(options.dst), function (err) {
      if (err) {
        throw new Error('Dependo failed to ensure it\'s destination directory.');
      }

      fs.writeFile(options.dst, dependo.generateHtml(), function (err) {
        if (err) {
          throw new Error('Dependo failed to write file to disk.');
        } else {
          cb();
        }
      });
    });
  });
};
