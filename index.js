// Import required modules
const inquirer = require('inquirer'); // Module for prompting the user for input
const fs = require('fs'); // Module for interacting with the file system
const path = require('path'); // Module for handling and transforming file paths
const { Triangle, Circle, Square } = require('./lib/shapes'); // Import shape classes (Triangle, Circle, Square) from shapes file

// Main function to run the application
async function run() {
  // Prompts the user for input using inquirer
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: 'input', // Input prompt for user to enter text
      name: 'text', // Name of the prompt, used to store the value
      // Validate to ensure the input is 3 characters or less
      message: 'Enter text for the logo (up to 3 characters):', // Message displayed to the user
      validate: input => input.length <= 3 || 'Text must be up to 3 characters.' // Validation to ensure text is 3 characters or less
    },
    {
      type: 'input', // Input prompt for user to enter text color
      name: 'textColor', // Name of the prompt, used to store the value
      message: 'Enter text color (keyword or hexadecimal):' // Message displayed to the user
    },
    {
      type: 'list', // List prompt for user to select shape
      name: 'shape', // Name of the prompt, used to store the value
      message: 'Choose a shape:', // Message displayed to the user
      choices: ['Triangle', 'Circle', 'Square'] // Choices for the user to select from
    },
    {
      type: 'input', // Input prompt for user to enter shape color
      name: 'shapeColor', // Name of the prompt, used to store the value
      message: 'Enter shape color (keyword or hexadecimal):' // Message displayed to the user
    }
  ]);

  // Maps the user's choice of shape to the corresponding class
  const shapes = { Triangle, Circle, Square };
  const SelectedShape = shapes[shape];
  const shapeInstance = new SelectedShape(shapeColor);

  // Generates the SVG content with the selected shape and text
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `; // Create the SVG string with the shape and text, positioning them appropriately

  // Writes the generated SVG content to a file in the examples folder
  fs.writeFileSync(path.join(__dirname, 'examples', 'logo.svg'), svgContent.trim()); // Save the SVG content to a file named 'logo.svg' in the 'examples' folder
  console.log('Generated logo.svg in the examples folder');
}

// Runs the main function to start the application
run();


