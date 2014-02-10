// Dune Buggy Player vehicle
var Hole = function(x, y) {
	Entity.call(this, x, y, 1, 1, "Hole");
	this.animation = new Animation(1, 2, 1, [0x0, SKY_COLOR]
		, [[" "," "]], [["1","1"]], [["1","1"]]);
 	this.moveDelay = 5;
 	this.dx = -1;
 	this.dy = 0;
}

Entity.prototype.impart(Hole);	// Inherit from Entity

Hole.prototype.Update = function() {
	if (this.time >= 0 && this.time % this.moveDelay === 0) {
		this.x += this.dx;
		this.y += this.dy;
	}

	if(!GAME.contains(this.x, this.y))
		this.deleteMe = true;
}