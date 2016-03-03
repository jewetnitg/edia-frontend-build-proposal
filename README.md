# edia-frontend-typescript
A boilerplate for frontend projects based on gulp, browserify, karma, mocha and chai. Intended as a candidate for the frontend boilerplate for future EDIA projects.

# Installing
Check out this repository using git, and run ```npm install``` in the root of the repository.
Please note that you need to have nodejs installed on your system!

# Development
Developing the project is best done by using the gulp dev task.
This task provides a devserver with livereload, just change code and your page will automatically reload

# Building
Building the project is done though gulp, to build the project run ```gulp build```.

for more information on the build, please refer to the {@link build} documentation.
Please note that you need to have gulp installed globally (using ```npm i gulp -g```) for this to work,
if you would like to run the build without having gulp installed globally, you can use the {@tutorial npm scripts} for this, as they use the local gulp executable.

# Directory hierarchy
The boilerplate directory hierarchy looks like this

```
.
+-- src
|   +-- js
|       +-- config
|       +-- api
|       +-- lib
|       +-- main.ts // the typescript entry point
|   +-- templates // templates, (react / handlebars / ...)
|   +-- fonts // font files
|   +-- images // image files
|   +-- styles // style files
|       +-- importer.less // main less file, this should import all required less files
|   +-- index.html // the index.html of the project, the entry point 
+-- tasks // gulp tasks
+-- docs // tutorials etc.
+-- build // automatically generated files, the built project and documentation
|   +-- coverage // coverage output
|   +-- docs // the generated documentation
|   +-- dst // the built project
|   +-- build.tar.gz // the ./build/dst directory, put in an archive
+-- package.json // configuration for the projects dependencies
+-- tsconfig.json // configuration for typescript
+-- typings.json // configuration for typings, the package json for typings
+-- karma.conf.js // configuration for karma, the test runner
+-- build.config.js // configuration for the gulp build
+-- jsdoc.conf.json // configuration for generation of documentation
+-- README.js // the file you are looking at right now
```


# Features
 - documentation generation
 - bundling
 - rebuilding on file change
 - archive generation
 - less transpilation
 - dev server with livereload
 - testing using karma, mocha and chai
  
# TODOs
  - choose frameworks and libraries
  - es5 vs. es6
  
# Gulp plugins to consider
  - [gulp-autopolyfiller](https://github.com/azproduction/gulp-autopolyfiller) - Automatic and minimal polyfills for your code.
  - [gulp-spritesmith](https://github.com/otouto/gulp-spritesmith) - Converting a set of images into a spritesheet and corresponding CSS variables.
  
# Other possible improvements
 - Publish markdown documentation to Confluence using the [confluence-api](https://www.npmjs.com/package/confluence-api) npm package, research whether the [confluence markdown plugin](https://marketplace.atlassian.com/plugins/org.swift.confluence.markdown/server/overview)  will allow us to achieve this. 
   Also take a look at the [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown) npm module, which might allow us to publish jsdoc documentation to confluence as well.
   Another, easier / more realistic, approach might be to [configure confluence to serve static content](https://confluence.atlassian.com/display/CONFKB/How+to+Use+Confluence+to+Serve+Static+Content), and simply copy the generated documentation to Confluence.
 - the [jsdoc3Template](https://github.com/danyg/jsdoc3Template/wiki#screenshots) *might* be a better jsdoc template
 - Integrate karma with jenkins, see [this](https://karma-runner.github.io/0.8/plus/Jenkins-CI.html) for more information on how to do this. 