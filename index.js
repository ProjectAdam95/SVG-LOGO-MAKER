// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Main function to run the application
async function run() {
  // Prompt the user for input using inquirer
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      // Validate to ensure the input is 3 characters or less
      message: 'Enter text for the logo (up to 3 characters):',
      validate: input => input.length <= 3 || 'Text must be up to 3 characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):'
    }
  ]);

  // Map the user's choice of shape to the corresponding class
  const shapes = { Triangle, Circle, Square };
  const SelectedShape = shapes[shape];
  const shapeInstance = new SelectedShape(shapeColor);

  // Generate the SVG content with the selected shape and text
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  // Write the generated SVG content to a file in the examples folder
  fs.writeFileSync(path.join(__dirname, 'examples', 'logo.svg'), svgContent.trim());
  console.log('Generated logo.svg in the examples folder');
}

// Run the main function to start the application
run();


