// game.js for Perlenspiel 3.1.0
// Modifications by Mark Diehr: mdiehr@fullsail.com 
// Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
// Perlenspiel is Copyright © 2009-14 Worcester Polytechnic Institute.
// This file is part of Perlenspiel. 

// Please fill out these comments with the appropriate information.
//     Project Title:	Dune Patrol
//            Author:	D'Juan Irvin
//              Date:	1/29/14

/* Project notes:
    You can include project notes, messages, instructions, and TODOs here if you wish.
    
*/

// Put your global variables after this line


// Put your function definitions after this line


// PS.init( system, options )
// Initializes the game
PS.init = function (system, options) {
	"use strict";

	// Use PS.gridSize( x, y ) to set the grid to
	// the initial dimensions you want (32 x 32 maximum)
	// Do this FIRST to avoid problems!
	// Otherwise you will get the default 8x8 grid

	PS.gridSize(8, 8); // replace with your own x/y values

	// Add any other initialization code you need here

};

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
PS.touch = function (x, y, data, options) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches over a bead
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
PS.release = function (x, y, data, options) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
PS.enter = function (x, y, data, options) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
PS.exit = function (x, y, data, options) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
PS.exitGrid = function (options) {
	"use strict";

	// Uncomment the following line to verify operation
	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
PS.keyDown = function (key, shift, ctrl, options) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.keyDown(): key = " + key + ", shift = " + shift + ", ctrl = " + ctrl + "\n" );

	// Add code here for when a key is pressed
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
PS.keyUp = function (key, shift, ctrl, options) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.keyUp(): key = " + key + ", shift = " + shift + ", ctrl = " + ctrl + "\n" );

	// Add code here for when a key is released
};

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
PS.input = function (sensors, options) {
	"use strict";

	// Uncomment the following block to inspect parameters
	/*
	PS.debug( "PS.input() called\n" );
	var device = sensors.wheel; // check for scroll wheel
	if ( device )
	{
	    PS.debug( "sensors.wheel = " + device + "\n" );
	}
	*/

	// Add code here for when an input event is detected
};