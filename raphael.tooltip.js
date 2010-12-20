/**
 * Draws a rectangular tooltip pointing to the given x , y coordinate
 * 
 * @param {Number} x
 * 		x coordinate to point to
 * @param {Number} y
 * 	 	y coordinate to point to
 * @param {Number} boxWidth
 * 		width of the box (including the width of the triangle)
 * @param {Number} boxHeight 
 * 	 	height of the box (in addition to the height of the triangle)
 * @param {Number} triangleWidth
 * 		width of the triangle which points to the x,y coordinate, defaults to 8
 * @param {Number} triangleHeight 
 * 	 	height of the triangle which points to the x,y coordinate, defaults to 8
 */
Raphael.fn.tooltip = function(x, y, boxWidth, boxHeight, triangleWidth, triangleHeight) {
    if (triangleWidth === undefined) triangleWidth = 8;
    if (triangleHeight === undefined) triangleHeight = 8;

    var path =
    "M" + x + "," + y +
    " l" + ( - triangleWidth / 2) + "," + ( - triangleHeight) +
    " l" + ( - (boxWidth / 2 - triangleWidth / 2)) + "," + 0 +
    " l" + 0 + "," + ( - boxHeight) +
    " l" + boxWidth + "," + 0 +
    " l" + 0 + "," + boxHeight +
    " l" + ( - (boxWidth / 2 - triangleWidth / 2)) + "," + 0 +
    " l" + ( - triangleWidth / 2) + "," + triangleHeight +
    " Z";

    return this.path(path);
};
