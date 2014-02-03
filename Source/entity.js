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
}

// A child extends from this entity
Entity.prototype.impart = function(childConstructor) {
	childConstructor.prototype = clone(Entity.prototype);
	childConstructor.prototype.constructor = childConstructor;
}

Entity.prototype._tick = function() {
	this._update();
	this._draw();
}

// Draw self and all children with an offset
Entity.prototype._draw = function(offsetX, offsetY) {
	offsetX = option(offsetX, 0);
	offsetY = option(offsetY, 0);
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
	var x = this.x + offsetX;
	var y = this.y + offsetY;
	PS.glyph(		x, y, "?");
	PS.glyphColor(	x, y, 0x000000);
	PS.color(		x, y, 0xFFFFFF);
	PS.border(		x, y, 4);
	PS.borderColor(	x, y, 0xFF0000);
}

Entity.prototype.Update = function() {
	// Stub for children to overload
}
