/**
 * Draws a rounded rectangle, where you can specify the radius of each corner
 *
 * If you supply only r1, all corners will have the same radius as r1
 * 
 * @param {Number} x
 * 		The top left x coordinate
 * @param {Number} y
 * 	 	The top left y coordinate 
 * @param {Number} width
 * 		The width of the rectangle 
 * @param {Number} height 
 * 		The height of the rectangle
 * @param {Number} r1
 * 		The corner radius of the top left corner.
 * @param {Number} r2
 * 		The corner radius of the top right corner.
 * @param {Number} r3
 * 		The corner radius of the bottom right corner.
 * @param {Number} r4
 * 		The corner radius of the bottom left corner.
 */
Raphael.fn.roundedRect = function (x, y, w, h, r1, r2, r3, r4){
    if (r1 !== undefined && !(r2 || r3 || r4 )) {
        r2 = r3 = r4 = r1;
    }

    var array = [];
    array = array.concat(["M",x,r1+y, "Q",x,y, x+r1,y]); //A
    array = array.concat(["L",x+w-r2,y, "Q",x+w,y, x+w,y+r2]); //B
    array = array.concat(["L",x+w,y+h-r3, "Q",x+w,y+h, x+w-r3,y+h]); //C
    array = array.concat(["L",x+r4,y+h, "Q",x,y+h, x,y+h-r4, "Z"]); //D

    return this.path(array);
};