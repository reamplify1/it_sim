export class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calcPerimeter() {
        return this.width * 2 + this.height * 2
    }
}

export class Square extends Rectangle {
    constructor(width, height){
        super(width, height)
    }

    calcArea(){
        return this.width * this.height
    }
}

export class RectangleWithColor extends Rectangle {
    constructor(width, height, color){
        super(width, height)
        this.color = color
    }

    showColorInConsole(){
        console.log(`my color is ${this.color}`);
    }
}