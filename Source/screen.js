////////////////////////////////////////////////////////////////////////////////
// Game screen object for holding all game objects
// Responsible for setting the grid size and clearing the screen during the Draw
var Screen = function(w, h, color) {
	Entity.call(this, 0, 0, w, h, "Screen");
	this.color = color;
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	this.timerIdentifier = null;
	this.keys = [];
}

Entity.prototype.impart(Screen);	// Inherit from Entity

Screen.prototype.go = function() {
	if (this.timerIdentifier === null)
		this.timerIdentifier = PS.timerStart(1, Entity.prototype._tick.bind(this));
}

Screen.prototype.stop = function() {
	if (this.timerIdentifier !== null)
		PS.timerStop(this.timerIdentifier);
}

Screen.prototype.addChild = function(object) {
	this.children.push(object);
}

Screen.prototype.keyDown = function(key) {
	this.keys[key] = 1;
}

Screen.prototype.keyUp = function(key) {
	this.keys[key] = 0;
}

Screen.prototype.touch = function(x, y) {
	// Nothing yet
}

Screen.prototype.getKey = function(key) {
	return option(this.keys[key], 0);
}

Screen.prototype.Draw = function(offsetX, offsetY) {
	PS.color( PS.ALL, PS.ALL, this.color);
	PS.glyph( PS.ALL, PS.ALL, 0);
	PS.border(PS.ALL, PS.ALL, 0);
}
