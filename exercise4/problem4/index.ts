interface Shape {
  area(): number;
}

// Implement the Circle class with an area method
export class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Implement the Rectangle class with an area method
export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

// Function to calculate the sum of areas in a functional way
export function sumOfAllAreas(...shapes: Shape[]): number {
  return shapes.reduce((totalArea, shape) => totalArea + shape.area(), 0);
}