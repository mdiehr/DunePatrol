// Dune Buggy Player vehicle
var BulletSide = function(x, y) {
	Entity.call(this, x, y, 1, 1, "BulletSide");
	this.animation = [["∗"], ["※"]];
	this.animationColor = [0xFF0000, 0xFFAA00];
 	this.frame = 0;
 	this.time = -1;
 	this.frameTime = 3;
 	this.moveTime = 2;
}

Entity.prototype.impart(BulletSide);	// Inherit from Entity

BulletSide.prototype.Draw = function(offsetX, offsetY) {
	var x = this.x + offsetX;
	var y = this.y + offsetY;
	var animFrame = this.animation[this.frame];
	for (var xd = 0; xd < this.w; ++xd) {
		for (var yd = 0; yd < this.h; ++yd) {
			PS.glyph(x+xd, y+yd, animFrame[yd][xd]);
			PS.glyphColor(x+xd, y+yd, 0xFFFFFF);
			PS.border(x+xd, y+yd, 2);
			PS.borderColor(x+xd, y+yd, GAME.color);
			PS.color(x+xd, y+yd, this.animationColor[this.frame])
		}
	}
}

BulletSide.prototype.Update = function() {
	// Animation frame advance
	if (this.time >= 0 && this.time % this.frameTime === 0) {
		this.frame++;
		if (this.frame >= this.animation.length)
			this.frame = 0;
	}

	// Move
	if (this.time >= 0 && this.time % this.moveTime === 0) {
		this.x++;
	}


	if(this.x < 0 || this.x + this.w >= GAME.w || this.y < 0 || this.y + this.h >= GAME.h)
		this.deleteMe = true;

	this.time++;
}