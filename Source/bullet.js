// Dune Buggy Player vehicle
var Bullet = function(x, y, dx, dy) {
	Entity.call(this, x, y, 1, 1, "Bullet");
	this.animation = new Animation(1, 1, 2
		, [0x0, 0xFF0000, 0xFFAA00]
		, [["∗"], ["※"]]
		, [["1"], ["2"]]
		, [["0"], ["0"]]
		);
 	this.animationDelay = 3;
 	this.moveDelay = 2;
 	this.dx = dx;
 	this.dy = dy;
}

Entity.prototype.impart(Bullet);	// Inherit from Entity

Bullet.prototype.Update = function() {
	if (this.time >= 0 && this.time % this.animationDelay === 0)
		this.animation.advance();

	// Move
	if (this.time >= 0 && this.time % this.moveDelay === 0) {
		this.x += this.dx;
		this.y += this.dy;
	}

	if(!GAME.contains(this.x, this.y))
		this.deleteMe = true;
}