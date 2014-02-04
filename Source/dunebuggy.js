// Dune Buggy Player vehicle
var DuneBuggy = function(x, y) {
	Entity.call(this, x, y, 3, 2, "DuneBuggy");

	this.animation = new Animation
		( 3, 2, 4
		, [0x0, 0x336600, 0x999999, 0x666600]
		, [["╧☰☐", "o o"]
		  ,["╧☰☐", "o O"]
		  ,["╧☰☐", "O O"]
		  ,["╧☰☐", "O o"]
		  ]
		, [["311", "0 0"]]
		, [["000", "2 2"]]
		);

 	this.animationDelay = 6;
 	this.moveDelay 		= 3;
 	this.shootDelay 	= 15;
}

Entity.prototype.impart(DuneBuggy);	// Inherit from Entity

DuneBuggy.prototype.Update = function() {
	if (this.time >= 0 && this.time % this.animationDelay === 0)
		this.animation.advance();

	// Move
	if (this.time >= 0 && this.time % this.moveDelay === 0) {
		if(GAME.getKey(PS.KEY_ARROW_LEFT) === 1 && this.x > 0)
			this.x--;
		if(GAME.getKey(PS.KEY_ARROW_RIGHT) === 1 && this.x + this.w < GAME.w)
			this.x++;
	}

	if (this.time >= 0 && this.time % this.shootDelay === 0) {
		if(GAME.getKey(32) === 1) {
			GAME.addChild(new Bullet(this.x+this.w, this.y  , 1,  0));
			GAME.addChild(new Bullet(this.x       , this.y-1, 0, -1));
		}
	}
}