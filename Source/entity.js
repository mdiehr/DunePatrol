////////////////////////////////////////////////////////////////////////////////
// Base game object type
var Entity = function(x, y, w, h, name) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.name = name;
	this.active = true;		// Toggle to enable/disable drawing and updating
	this.deleteMe = false;	// Toggle to flag for deletion at the end of the update (before draw)
	this.children = [];
 	this.time = -1;
 	this.animation = null;
 }

// A child extends from this entity
Entity.prototype.impart = function(childConstructor) {
	childConstructor.prototype = clone(Entity.prototype);
	childConstructor.prototype.constructor = childConstructor;
}

Entity.prototype.addChild = function(object) {
	this.children.push(object);
}

Entity.prototype.contains = function(x, y) {
	return (x >= this.x) && (y >= this.y) && (x < this.x + this.w) && (y < this.y + this.h);
}

Entity.prototype._tick = function() {
	this._update();
	this._draw(0, 0);
}

// Draw self and all children with an offset
Entity.prototype._draw = function(offsetX, offsetY) {
	this.Draw(offsetX, offsetY);
	var x = this.x + offsetX;
	var y = this.y + offsetY;
	for (var i = 0; i < this.children.length; ++i) {
		if(this.children[i].active);
			this.children[i]._draw(x, y);
	}
}

// Update self and all children
Entity.prototype._update = function() {
	this.Update();
	this.time++;
	for (var i = 0; i < this.children.length; ++i) {
		if(this.children[i].active);
			this.children[i]._update();
	}
	// Remove inactive children
	for (var i = 0; i < this.children.length; ++i) {
		if(this.children[i].deleteMe)
			this.children.splice(i--, 1);
	}
}

Entity.prototype.Draw = function(offsetX, offsetY) {
	if(this.animation !== null)
		this.animation.render(this.x + offsetX, this.y + offsetY);
}

Entity.prototype.Update = function() {
	// Stub for children to overload
}