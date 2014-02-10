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
