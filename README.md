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
