# better-logger
A small node module providing an advanced logger interface with colors and date.
As easy to use as the default [Console class](https://nodejs.org/api/console.html).

## Installation
```shell
	npm install better-logger --save
```

## Usage
```js
	var Log = require('better-logger');
	
	Log.info('info');
	Log.warn('warn');
	Log.error('error');

	Log.enableDebug();
	Log.debug('debug');

	Log.space();
	Log.separator();
```

## Notes
I used [colors](https://www.npmjs.com/package/colors) to set the color and [dateformat](https://www.npmjs.com/package/dateformat) for the date.


## Release History
* 0.1.0 Initial release
