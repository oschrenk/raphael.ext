/**
 * Draws a line from x1,y1 coordinate to x2,y2 coordinate
 * 
 * @param {Number} x1
 * 		x coordinate of starting point
 * @param {Number} y1
 * 	 	y coordinate of starting point 
 * @param {Number} x2
 * 		x coordinate of end point
 * @param {Number} y2
 * 	 	y coordinate of end point
 */
Raphael.fn.line = function (x1, y1, x2, y2) {
	var path = "M" + x1 + " " + y1 +"L"+ x2 + " " + y2;
    return this.path(path);
};
