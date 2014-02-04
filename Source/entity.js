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
	if(this.animation !== null) {
		this.animation.render(this.x + offsetX, this.y + offsetY);
	} else {
		var x = this.x + offsetX;
		var y = this.y + offsetY;
		PS.glyph(		x, y, "?");
		PS.glyphColor(	x, y, 0x000000);
		PS.color(		x, y, 0xFFFFFF);
		PS.border(		x, y, 4);
		PS.borderColor(	x, y, 0xFF0000);
	}
}

Entity.prototype.Update = function() {
	// Stub for children to overload
}

// Animation controller
var Animation = function(w, h, frames, palette, glyphs, colors, glyphColors) {
	this.w = w;
	this.h = h;
	this.frames = frames;
	this.palette = palette;
	this.glyphs = glyphs;
	this.colors = colors;
	this.glyphColors = glyphColors;
	// internal data
	this.frame = 0;

	function _processColors(arrayData, desiredLength, palette) {
		// Convert ascii codes into colors from the palette
		for(var i = 0; i < arrayData.length; ++i) {
			var frameData = arrayData[i];
			for (var y = 0; y < frameData.length; ++y) {
				var newRow = [];
				for (var x = 0; x < frameData[y].length; ++x) {
					var data = frameData[y][x];
					if(data === " ")
						newRow.push(null);
					else
						newRow.push(palette[parseInt(data)]);
				}
				frameData[y] = newRow;
			}
		}
		// Extend last array entry through to the desired length
		while(arrayData.length < desiredLength) {
			arrayData.push(arrayData[arrayData.length-1]);
		}
	}
	_processColors(this.colors, this.frames, this.palette);
	_processColors(this.glyphColors, this.frames, this.palette);
}

Animation.prototype.advance = function() {
	this.frame = (this.frame + 1) % this.frames;
}

Animation.prototype.render = function(x, y) {
	var frameGlyph = this.glyphs[this.frame];
	var frameColor = this.colors[this.frame];
	var frameGlyphColor = this.glyphColors[this.frame];
	for (var xd = 0; xd < this.w; ++xd) {
		for (var yd = 0; yd < this.h; ++yd) {
			var a = x+xd;
			var b = y+yd;
			if (GAME.contains(a, b)) {
				var glyph = frameGlyph[yd][xd];
				var color = frameColor[yd][xd]
				var glyphColor = frameGlyphColor[yd][xd]
				if(glyph !== " ")
					PS.glyph(a, b, glyph);
				if(color !== null)
					PS.color(a, b, color);
				if(glyphColor !== null)
					PS.glyphColor(a, b, glyphColor);
			}
		}
	}
}
