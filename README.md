# Npm Hindi Converter
=========

A small package to convert html string into Hindi by picking some basic hindi fonts. As of now this plugin supports `Krutidev10` and `Chanakya` fonts. More fonts will be added soon.

## Installation
```
  npm install npm-hindi-converter --save
```

## Usage
This package is now supporting 2 main hindi fonts
- Krutidev10
- Chanakya
```
  var converter = require('npm-hindi-converter')
      convert = converter.convert;

  var htmlKrutiDev = 'l $ v"Vkax dh lfU/ D;k gksxh\',
      convertedKrutiDev = convert(htmlKrutiDev, 'Krutidev10');

  var htmlChanakya = 'ÚUæÁSÍæÙ çßçÙØæð» ÂýæðˆâæãUÙ ØæðÁÙæ w®vy ç·¤Ù ÂÚU Üæ»ê ãUæð»è?';
      convertChanakya = convert(htmlChanakya, 'Chanakya');
      
  console.log('htmlKrutiDev', htmlKrutiDev, 'convertedKrutiDev', convertedKrutiDev);
  console.log('htmlChanakya', htmlChanakya, 'convertChanakya', convertChanakya);
```

## Tests
```
  npm test
```

## License
This project is licensed under the MIT License.

## Release History

* 0.1.0 Initial release with only Krutidev10 font support
* 0.1.1 Chanakya font support added

## Acknowledgments
- Originally found in google group named `technicalhindi`.
- Explored from https://sites.google.com/site/technicalhindi/home/converters