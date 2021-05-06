# js-dev-env
A JavaScript Development Environment

## Sharing work in progress
- localtunnel
  - 1. npm install localtunnel -g
  - 2. Start your app
  - lt --port [your_port] [--subdomain wanted_domain]
- ngrok
- Surge
  - Supports only static files
- Vercel

## Automation
- Grunt
  - The 'original'. Configuration over code. Large plugin ecosystem
- Gulp
  - In-memory streams. Fast. Code over configuration. Large plugin ecosystem
- npm Scripts
  - Declared in package.json. Leverage your OS' command line. Directly use npm packages. Call separate node scripts. Convention-based pre/post hooks
  - 'pre' and 'post' hooks for scripts (ex: 'prestart')
  - 'npm-run-all' run multiple concurrent tasks

## Transpiling
1. Babel
   - modern, standards-based JS, leverage full JS Ecosystem, use experimental features, no type defs, annotaions required
   - .babelrc configuration file(not npm specific, easier to read) or package.json
2. TypeScript
   - Superset of JavaScript, enhanced autocompletion, safer refactorings, clearer intent, enhanced readability, interfaces

### Build Script JS Style
1. Plain JS
   - No waiting for transpile = faster
   - No transpiler dependency
2. Transpiled
   - Enjoy the latest features
   - Consistent coding style
   - Use the same linting rules everywhere
   - Can eventually remove transpiler

## Bundling
  - Motivation
    - CommonJS doesn't work in web browsers
    - Package project into file(s)
    - Improve Node performance ('require' is slow)

### Module formats 
- (!global variables are bad)
- IIFE (immediately invoked functions expressions)
  - (function() {})();
- AMD (Asynchronous Module Definition)
  - define(['jq], function(jq) {});
- CJS (CommonJS)
  - var jquery = require('jquerry')
- UMD (Universal module definition)
- ES6 Modules
  - import jQuery from 'jquery'
  - motivations to use:
    -> standardized
    -> statically analyzable (improved autocomplete, intelligent refactoring, fails fast, Tree Shaking (dead code elimination - reduces the size of the production code))
    -> easy to read (named imports, default exports)

### Choosing a bundler
Takes all the JavaScript files and intelligently packages them for a target environment(dev, prod...) in a single minified file
1. RequireJS (first popular bundler, AMD pattern)
2. Browserify
  - The first bundler to reach mass adoption, bundle npm packages for the web, large plugin ecosystem (minification, linting, transpiling)
3. Webpack (mature, popular, and comprehensive)
  - Bundles more than just JS, import CSS, images, fonts, html, etc like JS, build in hot-reloading web server
  - inline images via base64 encoding (where small enough)
  - bundle splitting (you can download JS on demand, not the whole JS up front)
  - Hot module reloading
4. Rollup
  - Tree shaking (reduce bundle size - 20%), faster loading production code, great for library authors
5. Parcel
  - Logical defaults, get started quickly, code splitting, asset bundling, fast
6. Snowpack
  - Near instant startup, instant refresh on save, build once - cache forever, built in support for TS, React, CSS etc, plugin ecosystem, frontend focused 

! use 'Sourcemaps' to debug bundled code
  - maps code back to original source
  - part of our build
  - downloaded if you open developer tools
  - write 'debugger;' at the line where you want to insert a breakpoint

## Linting
Enforce Consistency / Avoid Mistakes
1. JSLint
2. JSHint
3. ESLint (de facto standard)
   - eslint-loader (webpack)
   - eslint-watch (wrapper that adds file watch, not tied to webpack, displays clean message, easily lint tests and build scripts too)
   - babel-elint -> to use experimental JavaScript features

## Unit Testing

### Unit Testing decisions
1. Testing Framework (Mocha)
   - Mocha
   - Jasmine
   - Tape (simple, minimal configuration)
   - QUnit
   - AVA
   - Jest
2. Assertion Library (Chai)
   - Chai (popular)
   - Should.js
   - expect
3. Helper Libraries (JSDOM)
   - JSDOM (simulate the browser's DOM, run DOM-related tests without a browser)
   - Cheerio (jQuery for the server, Query virtual DOM using jQuery selectors)
4. Where to run tests (Node)
   - Browser (Karma, Testem)
   - Headless Browser (Headless Chrome)
   - In-memory DOM (JSDOM) -> fast and quick to set up
5. Where do test files belong (Alongside)
   - Centralized (inertia?)
   - Alongside
     - easy imports !
     - clear visibility
     - convenient to open
     - no recreating folder structure
     - easy file moves
6. When should tests run (On save)
   - when you hit save
     - rapid feedback
     - facilitates TDD
     - increases test visibility

## Continuous Integration (CI)
- Run Automated build
- Run your tests
- Check code coverage
- Automate deployment

### Servers
1. Travis (Linux)
2. Appveyour (Windows)
3. Jenkins
4. CircleCI
5. Semaphore
6. SnapCI
