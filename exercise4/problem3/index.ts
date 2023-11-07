class Shape {
  getArea() {
    return 0;
  }
}
export class Circle extends Shape {
  #radius: number;

  constructor(radius: number) {
    super();
    this.#radius = radius;
  }
  getArea() {
    return Math.PI * this.#radius * this.#radius;
  }
}
  
  // Update it as much as you want, just don't change the name
  export class Rectangle extends Shape {
    #width: number;
    #length: number;

    constructor(width: number, length: number) {
      super();

      this.#width = width;
      this.#length = length;
    }
    getArea() {
      return this.#width * this.#length;
    }
  }
  
  // Update it as much as you want, just don't change the name
  export function sumOfAllAreas(...shapes: Shape[]): number {
    let totalArea = 0;

    for (const shape of shapes){
    totalArea += shape.getArea();
    }

    return totalArea;
  }
