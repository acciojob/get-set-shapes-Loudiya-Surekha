//complete this code
class Rectangle {
	constructor(width:number, height:number){
		this._width=width;
		this._height=heigth;
	}
	get width(){
		return this_width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return (this._width*this._height);
	}
}

class Square extends Rectangle {
	constructor(side){
	super(side, side); // Call Rectangle constructor with same value for width and height
    this._side = side; // Optional: Keep side separately if needed
	}
	getPerimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;





