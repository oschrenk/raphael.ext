/**
 * Draws a rounded rectangle, where you can specify the radius of each corner
 * 
 * @param {Number} x
 * 		The top left x coordinate
 * @param {Number} y
 * 	 	The top left y coordinate 
 * @param {Number} width
 * 		The width of the rectangle 
 * @param {Number} height 
 * 		The height of the rectangle
 * @param {Number} radiusTopLeft
 * 		The corner radius of the top left corner. Defaults to 0;
 * @param {Number} radiusTopRight
 * 		The corner radius of the top right corner. Defaults to 0;
 * @param {Number} radiusBottomRight
 * 		The corner radius of the bottom right corner. Defaults to 0;
 * @param {Number} radiusBottomLeft
 * 		The corner radius of the bottom left corner. Defaults to 0;
 */
Raphael.fn.roundedRect = function(x, y, width, height, radiusTopLeft, radiusTopRight, radiusBottomRight, radiusBottomLeft) {
	if (typeof radiusBottomLeft === "undefined") {
	    radiusBottomLeft = 0;
	}
	if (typeof radiusBottomRight === "undefined") {
	    radiusBottomRight = 0;
	}
	if (typeof radiusTopRight === "undefined") {
	    radiusTopRight = 0;
	}
	if (typeof radiusTopLeft === "undefined") {
	    radiusTopLeft = 0;
	}
	
	var path = 
	"M" + (x + radiusTopLeft) + "," + y + 
	" l" + (width - radiusTopLeft - radiusTopRight) + "," + 0 +
	" q" + radiusTopRight + "," + 0 + "," + radiusTopRight + "," + radiusTopRight +
	" l" + 0 +","+ (height - radiusTopRight - radiusBottomRight) +
	" q" + 0 + "," + radiusBottomRight + "," + (-radiusBottomRight) + "," + (radiusBottomRight) + 
	" l" + (-(width - radiusBottomRight - radiusBottomLeft)) + "," + 0 +
	" q" + (-radiusBottomLeft) + "," + 0 + "," + (-radiusBottomLeft) + "," + (-radiusBottomLeft) + 
	" l" + 0 + "," + (-(height - radiusBottomLeft - radiusTopLeft)) + 
	" q" + 0 + "," + (-radiusTopLeft) + "," + radiusTopLeft + "," + (-radiusTopLeft) + 
	" Z"; 
	
	return this.path(path);
};
