class TargetingSolution {
    constructor({x, y, z}) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    target() {
        return`(${this.x}, ${this.y}, ${this.z})`;
    }
}

const sln = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
  });
  
  console.log(sln.target()); // Should output a string of (45, 12, -1)