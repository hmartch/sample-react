# sample-react

A simple, sample site using React.  Give your name, answer whether you have a favorite movie, if you do then say what it is. If you have given a favorite movie and allow your answers to be saved, the app will thank you and display the description and poster image of the movie.

## To use this repository
1. Clone the repository

2. Check for or install:
    ```
    node version: v6.9.5
    npm version:  3.10.10
    ```

3. Use command `npm install` at root to install the necessary dependencies (refer to package.json for what's included).

4. To build and start the server in Localhost-Development mode: Use command `npm run localhost` at root, which will also initiate watching and continuous updating of js and css code changes (allowing a simple browser refresh to see changes), and set the BASE_API_URL for the local dev environment (see below notes on Database setup).

5. To build and start the server in Production mode: Use command `npm run prod` at root, which will also minify both js and css, add MD5 hashes to asset files for cache-busting, and set the BASE_API_URL for the production environment (see below notes on Database setup).

6. Server runs at 127.0.0.1:2000 (localhost:2000).

Note: To reset the BASE_API_URL in AppConstants.js file to the initial state, especially for before committing code updates to the repository, use command `npm run set-api-url:init` at root.

## Database setup

1. Create a PostGreSQL database with a table as defined in the included `database.sql` file.

2. In `server_db.js` modify the DATABASE_URL values for development and production environments to use the appropriate db user, password and db name. Eg. `postgres://[user]:[pass]@localhost:5432/[db_name]` for each environment.

3. In `server_db.js` modify the portNum variable for the port numbers for the http address of your database api server as needed.

4. Modify the individual config files in the `config` directory to use the appropriate http addresses of your database api server. These are used in the build process to set variables.

## Edit in pre-process files, not the generated files
The following files are the ones to edit:

1. `src/index_template.html` is for editing.  It is used to generate `public/index.html`; that file should not be edited directly.

2. `src/js/app.js` and all .js files in sub-directories of `src/js` can be edited directly.  They are processed and bundled into `public/js/bundle.js` (for dev mode) or `public/js/bundle.js` (with a hashmark, for production mode). The bundle.js files should not be edited directly.

3. `src/stylesheets/main.css.scss` and all .css.scss files in the `src/stylesheets/imports` sub-directory can be edited directly.  Any new files added to `imports` will need to be imported into main.css.scss.  The scss files are processed and saved to `public/stylesheets/main.css` (dev mode) or `public/stylesheets/main.css` (with a hashmark, for production mode).  The main.css files should not be edited directly.

## Local Testing

### 1. Jest Tests
Script tests are contained in the `__tests__` directory and run from the root with the command `npm test`, which will run all the tests.  For active development, you can use the command `npm run test-dev` to run only the changed test files.
