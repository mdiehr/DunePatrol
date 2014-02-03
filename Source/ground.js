////////////////////////////////////////////////////////////////////////////////
// Game screen object for holding all game objects
var Ground = function(x, y, w, h, color) {
	Entity.call(this, x, y, w, h, "Ground");
	this.color = color;
}

Entity.prototype.impart(Ground);	// Inherit from Entity

Ground.prototype.Draw = function(offsetX, offsetY) {
	var x = this.x + offsetX;
	var y = this.y + offsetY;
	PS.applyRect(x, y, this.w, this.h, function(x, y) {
		PS.color( x, y, this.color);
	}.bind(this));
}
