var buildConfig = {

  // directory in which the tasks are located, tasks may be nested under directories
  tasksDir: "./tasks",

  // default task to run, eg. this task is ran when running gulp without a task
  defaultTask: "build",

  tasks: {

    "build:prod": [
      "assets",

      // run tests once
      "test",

      // run browserify
      "browserify:prod",

      // create documentation
      "jsdoc",

      // put the build in an archive
      "tar"
    ],

    "build:dev": [
      "assets",

      // run browserify
      "browserify:dev"

    ],

    "assets": [
      // clean build dir
      "clean",

      // copy static assets
      "copy",

      // transpile less to css
      "less"
    ],

    "dev": [
      // build the project
      "build:dev",
      // watch for changes
      "watch",
      // serve the built project
      "devserver"
    ]

  }

};

module.exports = buildConfig;