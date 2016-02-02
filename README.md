# edia-frontend-build-proposal
A boilerplate for frontend projects based on gulp, browserify, karma, mocha and chai. Intended as a candidate for the frontend boilerplate for future EDIA projects.

# Installing
Check out this repository using git, and run ```npm install``` in the root of the repository.
Please note that you need to have nodejs installed on your system.

# Building
Building the project is done though gulp, to build the project run ```gulp build```.

for more information on the build, please refer to the {@tutorial build} documentation.
Please note that you need to have gulp installed globally (using ```npm i gulp -g```) for this to work,
if you would like to run the build without having gulp installed globally, you can use the {@tutorial npm scripts} for this, as they use the local gulp executable.

# Directory hierarchy
The boilerplate directory hierarchy looks like this

```
    ./
      ./src
        ./js
          ./config
          ./api
          ./lib
          ./main.js - the javascript entry point
        ./templates - templates, (react / handlebars / ...)
        ./fonts - font files
        ./images - image files
        ./styles - style files
          ./importer.less - main less file, this should import all required less files
        index.html - the index.html of the project, the entry point 
      ./tasks - gulp tasks
      ./docs - tutorials etc.
      ./build - automatically generated files, the built project and documentation
        ./coverage - coverage output
        ./docs - the generated documentation
        ./dst - the built project
        ./build.tar.gz - the ./build/dst directory, put in an archive
    ./package.json - configuration for the projects dependencies
    ./karma.conf.js - configuration for karma, the test runner
    ./jsdoc.conf.json - configuration for generation of documentation
    ./README.js - this file
```

# Dependency graph
js/main is the entry point
<iframe style="width: 100%; height: 600px; border: 1px solid #ddd;" src="./dependency_graph.html"></iframe>


# Features
 - documentation generation
 - bundling
 - rebuilding on file change
 - archive generation
 - less transpilation
 - dev server with livereload
 - testing using karma, mocha and chai
 
# Possible improvements
 - Publish markdown documentation to confluence using the [confluence-api](https://www.npmjs.com/package/confluence-api) npm package, research whether the [confluence markdown plugin](https://marketplace.atlassian.com/plugins/org.swift.confluence.markdown/server/overview)  will allow us to achieve this. 
   Also take a look at the [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown) npm module, which might allow us to publish jsdoc documentation to confluence as well.  