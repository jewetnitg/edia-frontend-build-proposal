var Dependo = require("dependo");
var fs = require('fs');
var mkdirp = require('mkdirp');

module.exports = function (gulp) {
  /**
   * Generates a dependency graph using the dependo npm package
   * @name dependo
   * @memberof build.tasks
   */
  return gulp.task('dependo', function (cb) {
    var dependo = new Dependo('./src', {
      format: 'cjs',
      exclude: 'node_modules',
    });

    mkdirp('./build/docs/', function (err) {
      if (err) {
        throw new Error('Dependo failed to ensure it\'s destination directory.');
      }
      
      fs.writeFile('./build/docs/dependency_graph.html', dependo.generateHtml(), function (err) {
        if (err) {
          throw new Error('Dependo failed to write file to disk.');
        } else {
          cb();
        }
      });
    });
  });
};
