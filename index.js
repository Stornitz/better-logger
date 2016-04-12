var colors = require('colors/safe');
var util = require('util');
var dateFormat = require('dateformat');

var date = {
	format: '[dd-mm HH:MM:ss] ',
	color: 'blue'
}

var prefix = {
	info: colors.green('[INFO]') + ' ',
	error: colors.red('[ERROR]') + ' ',
	warn: colors.yellow('[WARN]') + ' ',
	debug: colors.magenta('[DEBUG]') + ' ',
}

var separatorStr = '------------------------------------------------';

var showDebug = false;

/**
 * Return a formated and colored date
 *
 * @method     getDate
 * @return     {String}  Formated and colored date
 */
function getDate() {
	var now = new Date();
	return colors[date.color](dateFormat(now, date.format));
}

/**
 * Log to the console
 *
 * @method     log
 * @param      {String}  type    Type of the log
 * @param      {String}  args     Message to log
 */
function log(type, prefix, args) {
	var msg = util.format.apply(null, args);
	console[type](getDate() + prefix + msg);
}

module.exports = {
	/**
	 * Like console.log but with prefix and color
	 *
	 * @method     info
	 * @param      {String[, ...]}  arguments     Arguments as a printf-like format
	 */
    info: function() {
		log('info', prefix.info, arguments);
	},

	/**
	 * Same as module.info() but log to stderr
	 */
	error: function() {
		log('error', prefix.error, arguments);
	},

	/**
	 * Same as module.warn()
	 */
	warn: function() {
		log('warn', prefix.warn, arguments);
	},

	/**
	 * Same as module.info() but log only if debug enabled
	 */
	debug: function() {
		if(showDebug)
			log('log', prefix.debug, arguments);
	},

	/**
	 * Same as console.dir() but with color enabled
	 *
	 * @method     dir
	 * @param      {Object}  obj     Object
	 * @param      {number}  depth   Depth
	 */
	dir: function(obj, depth) {
		if(typeof depth === 'undefined')
			depth = 2;

		console.dir(obj, {
			colors: true,
			depth: depth
		})
	},

	/**
	 * Log a dashed separator
	 *
	 * @method     separator
	 */
	separator: function () {
		console.log(separatorStr);
	},

	/**
	 * Log an empty line
	 *
	 * @method     space
	 */
	space: function() {
		console.log('');
	},

	/**
	 * Enable (or disable) debug output
	 *
	 * @method     enableDebug
	 * @param      {boolean}  status  True to enable debug (Default: true)
	 */
	enableDebug: function(status) {
		if(typeof status === 'undefined')
			status = true;

		showDebug = status;
	},

	/**
	 * Set the prefix of a function
	 *
	 * @method     setPrefix
	 * @param      {String}  type       Type of log (info/error/warn/debug)
	 * @param      {String}  newPrefix  New prefix
	 */
	setPrefix: function(type, newPrefix) {
		prefix[type] = newPrefix;
	},

	/**
	 * Set the separator for the module.separator() method
	 *
	 * @method     setSeparator
	 * @param      {String}  newSeparator  Separator
	 */
	setSeparator: function(newSeparator) {
		separatorStr = newSeparator;
	},

	/**
	 * Set the date format, and color
	 *
	 * @method     setDateFormat
	 * @param      {String}  newFormat  New dateformat (see npm dateformat)
	 * @param      {String}  newColor   New color (If undefined, keep the same color as before)
	 */
	setDateFormat: function(newFormat, newColor) {
		date['format'] = newFormat;
		if(typeof newColor !== 'undefined')
			date['color'] = newColor;
	}
}