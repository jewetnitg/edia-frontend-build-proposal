var buildConfig = {

  // directory in which the tasks are located, tasks may be nested under directories
  tasksDir: "./tasks",

  // default task to run, eg. this task is ran when running gulp without a task
  defaultTask: "build",

  tasks: {

    "build": [
      // clean build dir
      "clean",

      // run tests once
      "test",

      // run browserify
      "browserify",

      // create documentation
      "jsdoc",

      // put the build in an archive
      "tar"
    ]

  }

};

module.exports = buildConfig;