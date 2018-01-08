# Highlight Media Tech Test
## Kenneth Camilleri

### Approach
* Build project structure & boilerplate from scratch and to download and install both the necessary tools and then set up the project structure - installed npm, webpack, react, mobx and related dependencies and babel in order to be able to use ES6, JSX and experimental decorators. The boilerplate was adapted from https://github.com/jpsierens/webpack-react-redux , which is a very handy dev stack for the front end as it includes the latest tools being used to make development as convenient as possible, amely providing conveniences such as hot loading and dev server, rapid build times (no need to wait 5-6 seconds for a production build - the webpack dev server stores it all in memory so you can see how it all looks before actually building it). However, I changed the structure so that the project uses mobx instead of react-redux
* Starting the dev server so that I can see most changes in real-time as I add code
* Set up mobx boilerplate so that we have our news section, and some example code that loads the data from in-built JSON in the mobx store
* Implement unstyled JSX while providing classNames for the CSS to be able to reference
* Implement functionality (such as the NewsSnippet showing data dynamically from JSON, sorting and clicking to load more)
* Add styling using SCSS

### How to run the dev server (Ubuntu)
* Make sure npm is installed
	sudo apt-get install npm
	(If you do not have Ubuntu, try downloading VirtualBox and download an Ubuntu 16.04 LTS image to use with it, and then continue)
	* Extract project files to a local directory
* cd to the directory that the project was cloned in
* Make sure all dependencies are installed by:
	npm install
* Start the dev server with:
	npm start-server
* In your browser, visit http://localhost:3000

### How to export the bundled files for use in a production server
* npm run build-production
* Copy the img and fonts folders into the web-server hosting static directory of your choice, such as in the htdocs folder of xampp for Windows
* Copy the contents (from inside) the dist folder into the web-server hosting static directory
* Visit your web server to view the production-builded version

### How to execute unit tests
* Navigate to the directory
* npm run test

### How to change the information in the news items
* Start the dev server with:
	npm start-server
* Go to src/store/HLMStore.js and modify the testNewsItemsArray
	Note how the HLMStore class was built in such a way that it is easy to switch it between calling an actual API and using test data, which is a good standard practice. The API is not implemented as part of this dev test.