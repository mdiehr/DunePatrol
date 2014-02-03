// Utilities

// Creates an object that uses another as its prototype
function clone(object) {
	function OneShotConstructor(){}
	OneShotConstructor.prototype = object;
	return new OneShotConstructor();
}

// Returns either a value, or a default value if the value was invalid
function option(value, defaultValue) {
	if (value === null || value === undefined)
		return defaultValue;
	return value;
}