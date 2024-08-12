// Import the Triangle, Circle, and Square classes from the 'shapes' module
const { Triangle, Circle, Square } = require('./shapes');

// Describe block to group tests related to shape rendering
describe('Shape rendering', () => {
   // Test case for rendering a Triangle
   // Create a new Triangle
   // Set the color of the Triangle to blue
  test('Triangle renders correctly', () => {
    const shape = new Triangle(); 
    shape.setColor('blue'); 
// Check if the Triangle's SVG output matches the expected blue triangle
    expect(shape.render()).toEqual('<polygon points="150, 20 280, 180 20, 180" fill="blue" />');
  });

  // Test for the Circle shape
  // Create a new Circle
  // Set the color of the Circle to red
  test('Circle renders correctly', () => {
    const shape = new Circle(); 
    shape.setColor('red'); 
    // Check if the Circle's SVG output matches the expected red circle
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="red" />');
  });

  // Test for the Square shape
   // Create a new Square
   // Set the color of the Square to green
  test('Square renders correctly', () => {
    const shape = new Square(); 
    shape.setColor('green'); 
     // Check if the Square's SVG output matches the expected green square
    expect(shape.render()).toEqual('<rect x="50" y="25" width="200" height="150" fill="green" />');
  });
});
