Npm Hindi Converter
=========

A small package to convert string into Hindi by picking some basics hindi fonts. As of now this plugin supports "Krutidev10"
more fonts will be added soon.

## Installation

  npm install npm-hindi-converter --save

## Usage

  var converter = require('npm-hindi-converter')
      convert = converter.convert;

  var html = 'l $ v"Vkax dh lfU/ D;k gksxh\',
      convert = convert(html);

  console.log('html', html, 'converted', convert);

## Explored from
 
https://sites.google.com/site/technicalhindi/home/converters

## Tests

  npm test

## Release History

* 0.1.0 Initial release