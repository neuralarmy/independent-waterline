# independent-waterline
independent use of waterline orm

03/01/2020
In addition to built-in usage with the Sails framework, Waterline can be used as a standalone module.

## Standalone Waterline Installation
Waterline is available via NPM.
$ npm install --save waterline

## Install necessary sails module without installing entire sails framework
#Sails-mysql is depreciated. Use sails-sql instead
$ npm install --save sails-mysql

Sails-disk used for development
$ npm install --save-dev sails-disk

## Project Folder structure
project.js is the main code file.
package.json is the setup file.
package-lock.json is created after installation of required modules.
.tmp folder holds database files.

## Code function
Here we created a simple database using Waterline ORM without importing the whole Sails.js framework.

## Useful links

for standalone waterline usage documentation:
https://sailsjs.com/documentation/concepts/models-and-orm/standalone-waterline-usage

Sails-disk module:
https://www.npmjs.com/package/sails-disk

Sails-mysql module:
https://www.npmjs.com/package/sails-mysql



