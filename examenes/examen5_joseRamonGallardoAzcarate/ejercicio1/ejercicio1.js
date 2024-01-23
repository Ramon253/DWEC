class Shape {
    name;
    sides;
    lengthSide;

    constructor(name, sides, lengthSide) {
        this.name = name;
        this.sides = sides;
        this.lengthSide = lengthSide;
    }

    calcPerimeter() {
        //Perimeter = Number of sides * length of the sides
        let perimeter = parseInt(this.sides) * parseInt(this.lengthSide);
        console.log("Perimeter : " + perimeter)
        return perimeter
    }
    //OverRide the default toString method
    toString(){
        return `{\nName : ${this.name} \nSides : ${this.sides} \nLength per side :  ${this.lengthSide}\n}`
    }
}

let square = new Shape("square", 4, 5)
square.calcPerimeter();
console.log(square.toString())

class Square extends Shape{
    constructor(  lengthSide) {
        super("square", 4, lengthSide);
    }
    calcArea(){
        //Area = Base * Height (in a square base === height)
        let area = Math.pow(this.lengthSide, 2)
        console.log("Area : " + area)
        return area;
    }
}

let myNewSquare = new Square(25);
myNewSquare.calcArea()
myNewSquare.calcPerimeter()