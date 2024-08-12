// Base class for all shapes
class Shape {
  // Constructor to initialize the color property
  constructor(color = '') {
      this.color = color;
  }

  // Method to set the color of the shape
  setColor(color) {
      this.color = color;
  }
}

// Triangle class, inheriting from Shape
class Triangle extends Shape {
  render() {
      
      return `<polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />`;
  }
}

// Circle class, inheriting from Shape
class Circle extends Shape {
  render() {
      
      return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}

// Square class, inheriting from Shape
class Square extends Shape {
  render() {
   
      return `<rect x="50" y="25" width="200" height="150" fill="${this.color}" />`;
  }
}

// Export the Triangle, Circle, and Square classes for use in other modules
module.exports = { Triangle, Circle, Square };


  
  