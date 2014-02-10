// Dune Buggy Player vehicle
var Cactus = function(x, y, dx, dy) {
	Entity.call(this, x, y, 1, 1, "Cactus");
	this.animation = new Animation(1, 3, 2
		, [0x0, 0x009900, 0xDDDDDD]
		, [["=","=","="]]
		, [["1","1","1"]]
		, [["2","2","2"]]
		);
 	this.moveDelay = 5;
 	this.dx = dx;
 	this.dy = dy;
}

Entity.prototype.impart(Cactus);	// Inherit from Entity

Cactus.prototype.Update = function() {
	// Move
	if (this.time >= 0 && this.time % this.moveDelay === 0) {
		this.x += this.dx;
		this.y += this.dy;
	}

	if(!GAME.contains(this.x, this.y))
		this.deleteMe = true;
}