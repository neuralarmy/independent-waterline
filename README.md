#Sails-mysql is depreciated. Use sails-sql instead:
$ npm install --save sails-mysql

Sails-disk used for development:
$ npm install --save-dev sails-disk

Sails-Mongo for development
$ npm install sails-mongo

## Project Folder structure
index.js is the main code file.
package.json is the setup file.
package-lock.json is created after installation of required modules.
sailsDisk Version.js for sails disk version of code.

## Code function
Here we created a simple database using Waterline ORM without importing the whole Sails.js framework.

## Useful links

for standalone waterline usage documentation:
https://sailsjs.com/documentation/concepts/models-and-orm/standalone-waterline-usage

Sails-disk module:
https://www.npmjs.com/package/sails-disk

Sails-mysql module:
https://www.npmjs.com/package/sails-mysql

Sails-Mongo Module:
https://sailsjs.com/documentation/tutorials/using-mongo-db

MongoDB community Edition
https://www.mongodb.com/download-center/community

## How to run:
1. Navigate to the project folder in command line.

2. Type "npm install" in the folder where package.json is to install dependencies.

3. Install MongoDB community Edition.

3. Type - "node index.js" into command prompt and press enter.

4. You should see a database table "User" populated with some data.



