// Dune Buggy Player vehicle
var DuneBuggy = function(x, y) {
	Entity.call(this, x, y, 3, 2, "DuneBuggy");
	this.animation = [	[ "╧☰☐"
			  			, "O o"
					 	]
				 	 ,	[ "╧☰☐"
			  			, "o o"
					 	]
				 	 ,	[ "╧☰☐"
			  			, "o O"
					 	]
				 	 ,	[ "╧☰☐"
			  			, "O O"
					 	]
				 	 ];
 	this.frame = 0;
 	this.time = -1;
 	this.frameTime = 6;
 	this.moveTime = 3;
 	this.shootTime = 15;
 	this.bodyColor = 0x336600;
}

Entity.prototype.impart(DuneBuggy);	// Inherit from Entity

DuneBuggy.prototype.Draw = function(offsetX, offsetY) {
	var x = this.x + offsetX;
	var y = this.y + offsetY;
	var animFrame = this.animation[this.frame];
	for (var xd = 0; xd < this.w; ++xd) {
		for (var yd = 0; yd < this.h; ++yd) {
			PS.glyph(x+xd, y+yd, animFrame[yd][xd]);
			PS.glyphColor(x+xd, y+yd, 0x000000);
			if(yd == 0)
				PS.color(x+xd, y+yd, this.bodyColor)
		}
	}
}

DuneBuggy.prototype.Update = function() {
	// Animation frame advance
	if (this.time >= 0 && this.time % this.frameTime === 0) {
		this.frame++;
		if (this.frame >= this.animation.length)
			this.frame = 0;
	}

	// Move
	if (this.time >= 0 && this.time % this.moveTime === 0) {
		if(GAME.getKey(PS.KEY_ARROW_LEFT) === 1 && this.x > 0) {
			this.x--;
		}
		if(GAME.getKey(PS.KEY_ARROW_RIGHT) === 1 && this.x + this.w < GAME.w) {
			this.x++;
		}
	}

	if (this.time >= 0 && this.time % this.shootTime === 0) {
		if(GAME.getKey(32) === 1) {
			GAME.addChild(new BulletSide(this.x+this.w, this.y));
			GAME.addChild(new BulletUp(this.x, this.y-1));
		}
	}

	this.time++;
}