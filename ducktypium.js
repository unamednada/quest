class Ducktypium {
    constructor(color) {
        if (color != "red" && color != "yellow" && color != "blue") {
            throw new error("Color must be red, yellow or blue!");
        }
        this.color = color;
        this.calibrationSequence = [];
    }

    refract(refractColor) {
        if (refractColor == "red") {
            return this.color == "blue" ? "purple" : this.color == "yellow" ? "orange" : "red";
        } else if (refractColor == "blue") {
            return this.color == "yellow" ? "green" : this.color == "red" ? "purple" : "blue";
        } else if (refractColor == "yellow") {
            return this.color == "blue" ? "green" : this.color == "red" ? "orange" : "yellow";
        } else {
            throw new error("Color must be red, yellow or blue!");
        }
    }
    
    calibrate(array) {
        array.sort().forEach(item => this.calibrationSequence.push(item * 3));
    }

}

// The following would produce an error
try {
    const badColor = new Ducktypium('pink');
  } catch(e) {
    console.log('Color must be red, yellow, or blue!');
  }
  
  // Create a new instance of the class
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(dt.refract('red')); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]