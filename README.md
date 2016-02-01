# edia-frontend-build-proposal
A boilerplate for frontend projects based on gulp, browserify, karma, mocha and chai. Intended as a candidate for the frontend boilerplate for future EDIA projects.

# installing
Check out this repository using git, and run ```npm install``` in the root of the repository.

# building
Building the project is done though gulp, to build the project run ```gulp build```.

# directory hierarchy
The boilerplate directory hierarchy looks like this

```
    ./
      ./src
        ./js
          ./config
          ./api
          ./lib
          ./main.js - the javascript entry point
        ./assets - static assets, styles, images, fonts etc.
          ./fonts - font files
          ./images - image files
          ./styles - style files
            ./importer.less - main less file, this should import all required less files
            ./importer.sass - main sass file, this should import all required sass files
          index.html - the index.html of the project, the entry point 
        ./templates - templates, (react / handlebars / w/e)
      ./tasks - gulp tasks
        ./**.js
      ./docs - tutorials etc.
        ./**/**.md
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

# features
 - documentation generation
 - bundling
 - rebuilding on file change
 - archive generation
 - less transpilation
 - dev server
 - testing using karma, mocha and chai