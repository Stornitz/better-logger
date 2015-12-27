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

// This is an example
var obj = {foo: ['bar'], baz: undefined, qux: {a: 'b', c: 'd'}} 
Log.dir(obj);

Log.space();
Log.separator();
```

## Styles
I used [colors][colors] to set the color and [dateformat][dateformat] for the date.

### enableDebug(status:Boolean)
Enable (or disable) debug output.
If status is undefined, debug output will be enabled.

### setPrefix(type:String, newPrefix:String)
Set the prefix of a log function.
Type can be one of these : **info** / **error** / **warn** / **debug**

### setSeparator(newSeparator:String)
Set the separator for the **separator()** method.

### setDateFormat(newFormat:String, newColor:String)
Set the date format for [dateformat][dateformat].
If newColor is specified, the date color is set to the newColor. (otherwise ignored)
Colors list: [colors][colors]

## Release History
* 0.1.0 Initial release

[dateformat]: https://www.npmjs.com/package/dateformat
[colors]: https://www.npmjs.com/package/colors
