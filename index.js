var colors = require('colors/safe'),
	dateFormat = require('dateformat');

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
 * @param      {String}  msg     Message to log
 */
function log(type, msg) {
	console[type](getDate() + msg);
}

module.exports = {
	/**
	 * Like console.log but with prefix and color
	 *
	 * @method     info
	 * @param      {String}  msg     Message
	 */
    info: function(msg) {
		log('info', prefix.info + msg);
	},

	/**
	 * Same as module.info() but log to stderr
	 */
	error: function(msg) {
		log('error', prefix.error + msg);
	},

	/**
	 * Same as module.warn()
	 */
	warn: function(msg) {
		log('warn', prefix.warn + msg);
	},

	/**
	 * Same as module.info() but log only if debug enabled
	 */
	debug: function(msg) {
		if(showDebug)
			log('log', prefix.debug + msg);
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
		console.log('------------------------------------------------');
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