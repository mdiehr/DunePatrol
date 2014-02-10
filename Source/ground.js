////////////////////////////////////////////////////////////////////////////////
// Game screen object for holding all game objects
var Ground = function(x, y, w, h, color) {
	Entity.call(this, x, y, w, h, "Ground");
	this.color = color;
	this.moveDelay = 79;
}

Entity.prototype.impart(Ground);	// Inherit from Entity

Ground.prototype.Draw = function(offsetX, offsetY) {
	var x = this.x + offsetX;
	var y = this.y + offsetY;
	PS.applyRect(x, y, this.w, this.h, function(x, y) {
		PS.color( x, y, this.color);
	}.bind(this));
}


Ground.prototype.Update = function() {
	if (this.time >= 0 && this.time % this.moveDelay === 0) {
		GAME.addChild(new Cactus(GAME.w-1, GAME.h-2-PS.random(5), -1, 0));
	}
}