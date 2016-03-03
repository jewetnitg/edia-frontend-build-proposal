/**
 * The build configuration
 * @namespace build.config
 * @memberof build
 * @property tasksDir {String} - the directory in which the tasks are located, tasks are looked for recursively, if a module is found that exports a function, it is treated as a task.
 * @property defaultTask {String} - default task to run, eg. this task is ran when running gulp without a task
 * @property tasks {Object<Array>} - an object containing arrays with task sequences, i.e. ```{"build": ["clean", "copy"]}```.
 */

var buildConfig = {

  tasksDir: "./tasks",
  defaultTask: "build",

  /**
   * All gulp tasks and sequences.
   * @memberof build
   * @namespace build.tasks
   */
  tasks: {

    /**
     * The production build, runs {@link build.tasks.assets}, {@link build.tasks.test}, {@link build.tasks.browserify:prod}, {@link build.tasks.jsdoc} and {@link build.tasks.tar}.
     * @name build:prod
     * @memberof build.tasks
     */
    "build:prod": [
      "assets",

      // lint javascript
      "eslint",

      // run tests once
      "test",

      // generate properly sourcemapped coverage
      "coverage",

      // run browserify
      "browserify:prod",

      // create documentation
      "typedoc",

      // put the build in an archive
      "tar"
    ],

    /**
     * The development build, runs {@link build.tasks.assets} and {@link build.tasks.browserify:dev}.
     * @name build:dev
     * @memberof build.tasks
     */
    "build:dev": [
      "assets",

      // run browserify
      "browserify:dev"

    ],

    /**
     * Cleans the build directory using {@link build.tasks.clean}, copies static assets using {@link build.tasks.copy} and transpiles less to css using {@link build.tasks.less}.
     * @name assets
     * @memberof build.tasks
     */
    "assets": [
      // clean build dir
      "clean",

      // copy static assets
      "copy",

      // transpile less to css
      "less"
    ],

    /**
     * Builds the project and serves it, watches for file changes and propagates them to the server, also triggers livereload to reload.
     * It runs the {@link build.tasks.build:dev}, {@link build.tasks.watch} and {@Link build.tasks.devserver} tasks to do so.
     * @name dev
     * @memberof build.tasks
     */
    "dev": [
      // build the project
      "build:dev",
      // watch for changes
      "watch",
      // serve the built project
      "devserver"
    ],

    /**
     * Generates documentation and watches for changes, re-generates it if files change,
     * also runs a server that serves the documentation and uses livereload to reload when the generated documentation changes.
     * @name jsdoc:live
     * @memberof build.tasks
     */
    "jsdoc:live": [
      "jsdoc:watch",
      "docserver"
    ]

  }

};

module.exports = buildConfig;