////////////////////////////////////////////////////////////////////////////////
// Game screen object for holding all game objects
// Responsible for setting the grid size and clearing the screen during the Draw
var Screen = function(w, h, color) {
	Entity.call(this, 0, 0, w, h, "Screen");
	this.color = color;
	PS.gridSize(this.w, this.h);
	this.timerIdentifier = null;
}

Entity.prototype.impart(Screen);	// Inherit from Entity

Screen.prototype.Go = function() {
	if (this.timerIdentifier === null)
		this.timerIdentifier = PS.timerStart(1, Entity.prototype._tick.bind(this));
}

Screen.prototype.Stop = function() {
	if (this.timerIdentifier !== null)
		PS.timerStop(this.timerIdentifier);
}

Screen.prototype.Draw = function(offsetX, offsetY) {
	PS.color( PS.ALL, PS.ALL, this.color);
	PS.glyph( PS.ALL, PS.ALL, 0);
	PS.border(PS.ALL, PS.ALL, 0);
}
