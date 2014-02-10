////////////////////////////////////////////////////////////////////////////////
// Game screen object for holding all game objects
var Ground = function(x, y, w, h, color) {
	Entity.call(this, x, y, w, h, "Ground");
	this.color = color;
	this.spawnDelay = 51;
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
	if (this.time >= 0) {
		if (this.time % this.spawnDelay === 0) {
			if(PS.random(2) == 1)
				GAME.addChild(new Cactus(this.w-1, this.y-PS.random(3)));
			else
				this.addChild(new Hole(GAME.w-1, 0));
		}
	}
}