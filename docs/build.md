# build

The project is built using gulp, the following gulp tasks are available:

 - browserify:dev - runs the dev build, this does not uglify, so we can access variables easier during runtime
 - browserify:prod - runs the production build, this uglifies the source code
 - clean - cleans the build dir
 - copy - copies static assets from ./src to ./build/dst
 - jsdoc - generates documentation from markdown files like this one, and jsdoc comments, puts it in ./build/docs
 - less - transpiles less -> css and puts it in ./build/dst/styles
 - assets - runs, clean, less and copy
 - watch - watches for static asset and less changes, also triggers livereload whenever the ./build/dst dir changes
 - test - runs tests using karma
 - test:ci - runs tests using karma in continues integration mode
 - devserver - starts a dev server with livereload serving ./build/dst
 - tar - creates a tar.gz archive from the ./build/dst directory and writes it to ./build/build.tar.gz
 - build:prod - runs the production build
 - build:dev - runs the dev build