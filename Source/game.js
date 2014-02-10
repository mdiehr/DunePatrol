// game.js for Perlenspiel 3.1.0
// Modifications by Mark Diehr: mdiehr@fullsail.com 
// Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
// Perlenspiel is Copyright © 2009-14 Worcester Polytechnic Institute.
// This file is part of Perlenspiel. 

// Please fill out these comments with the appropriate information.
//     Project Title:	Dune Patrol
//            Author:	D'Juan Irvin
//            Author:	Mark Diehr
//              Date:	1/29/14

var GAME;

var SKY_COLOR = 0x99CCFF;

// PS.init( system, options )
// Initializes the game
PS.init = function (system, options) {
	"use strict";
	PS.statusText("Dune Patrol");
	GAME = new Screen(32, 20, SKY_COLOR);
	GAME.addChild(new Ground(0, 16, 32, 4, 0xE6B85C));
	GAME.addChild(new DuneBuggy(3, 14));
	GAME.go();
};

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
PS.touch = function (x, y, data, options) {
	"use strict";
	GAME.touch(x, y);
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
PS.release = function (x, y, data, options) {
	"use strict";
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
PS.enter = function (x, y, data, options) {
	"use strict";
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
PS.exit = function (x, y, data, options) {
	"use strict";
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
PS.exitGrid = function (options) {
	"use strict";
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
PS.keyDown = function (key, shift, ctrl, options) {
	"use strict";
	GAME.keyDown(key);
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
PS.keyUp = function (key, shift, ctrl, options) {
	"use strict";
	GAME.keyUp(key);
};

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
PS.input = function (sensors, options) {
	"use strict";
};