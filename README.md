# SVG-LOGO-MAKER

The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

# Introduction
 
 An application that generates an .svg file that generates a logo as per user prompts.
 by Adam Todorovic


## :ledger: Index

- [About](#beginner-about)
- [File Structure](#file_folder-file-structure)
- [Build](#hammer-build)  
- [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
- [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

##  :beginner: About

This is an SVG Logo Maker application designed to help users easily create custom SVG logos for their projects.
The application is simple to use and allows for quick customization of logos, making it a useful tool for developers and designers alike. 
Whether you need a logo for a project, branding materials, or just want to experiment with SVGs, this tool provides a quick and easy way to generate high-quality results.


Features include:
- Customizable Logos: Users can create logos by choosing a shape (Triangle, Circle, or Square), entering text (up to 3 characters), and selecting colors for both the shape and text.
- Interactive Prompts: The application guides users through the logo creation process with a series of prompts, making it easy to generate personalized SVG logos.
- SVG Output: The generated logo is saved as an SVG file, which can be used directly in web development projects or as a part of a branding strategy.
- Shape Options: Users can select from different shapes (Triangle, Circle, or Square) to serve as the base of the logo.
- Color Customization: The application allows for complete customization of colors, enabling users to input their preferred color using either a keyword (like "red") or a hexadecimal value.
- Simple and Fast: The entire logo creation process is streamlined, allowing users to generate a custom logo in just a few seconds.

Additional Features:

- Preview Photos: Includes a preview image/gif that demonstrate the application's output and functionality, helping users understand how the generated logos will look.
- Directory Structure: Easy-to-navigate file structure, with examples of generated logos stored in a dedicated folder.
- Photo of the generated SVG logo can be found in the examples folder.
- Photo of the terminal commands used to create them can be found in the preview/ directory. 

###  :file_folder: File Structure

Below is a view of the file structure deployed to GitHub.

```plaintext

SVG-LOGO-MAKER
├── examples/           // Example SVG file(s) created with the app
├── lib/                // Folder for classes or functions
│   ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
│   └── shapes.test.js  // Jest tests for shapes
│   
├── preview/            // Folder for preview photos
│   ├── SVG-CLI.png     // Preview photo (preview photo of cli and commands used)
│   └── SVG-TEST.gif    // Additional preview gif
│   
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json        // Project metadata and dependencies
└── README.md           // App description, link to video, setup, and usage instructions




```

###  :hammer: 
Build
- File changes updated and modified using terminal eg. Git bash to add, commit and pull e.t.c.
- Code Editor: Used code editor e.g VS code , to modify existing code and make changes to the javascript code as per request.
- Version Control: Regularly committed changes to a Git repository to track progress and maintain version history.
- Testing and Debugging: Tested the application to ensure compatibility and responsiveness.
- Documentation: Documented code changes, setup instructions to facilitate collaboration and future maintenance.
- Code notes: Notes explaining what each piece of code does, such as a function in Javascript. It is displayed above the corresponding code.
- This enables developers to easily read the code and identify how the application works. Notes have been added to the JS files.

### :rocket: Deployment

  To deploy this application please follow the below instructions:

- 1. Navigate to your terminal so you can save the file to your computer where you will run the application to generate the SVG file. 
- 2. Clone the repository using "git clone "ENTER URL HERE"
- 3. Navigate to the directory of the file names "SVG-LOGO-MAKER".
- 4. Install required npm packages by typing "npm install" in the CLI.
- 5. Run the application by typing "node index.js" in the CLI.
- 6. Answer the prompts as per in the the command line.
- 7. View your generated SCG logo in the examples folder.
- 8. Open preview and save it for your own use!

- IMPORTANT NOTE: The video demonstrating the use and functionality starts off with the npm test which all pass. Followed by running node index to invoke the
  application to run it. Make sure you are in the correct directory which in my case is bootcamp\SVG-LOGO-MAKER to successfuly start the application. Run the application
  and answer the prompts to generate your svg logo. If you are stuck on the steps to run/invoke the applicaiton i have a photo and gif in the preview folder. I also have
  two links to the gif/video demonstrating the use and functionality of the application. If you are stil stuck and unable to resolve an issue do not hesitate to contact me on 
  my email or leave a comment in the issues links below under the contribution section!


  If you are stuck and unable to resolve an issue do not hesitate to contact me on my email or leave a comment in the issues links below under the contribution section!

 ###  :fire: Contribution

 - Your contributions are always welcome and greatly appreciated. Here are some ways you can contribute to the project:

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it here [here](https://github.com/ProjectAdam95/SVG-LOGO-MAKER/issues). I will look into it and take the necessary steps.
 
 2. **Request a feature** <br>
 If you have a feature idea that you think would enhance the project, you can request it [here](https://github.com/ProjectAdam95/SVG-LOGO-MAKER/issues), If the feature is deemed viable, it will be considered for development. 

 3. **Create a pull request** <br>
 The best way to contribute is by creating a pull request. The community will appreciate your efforts. You can start by picking up any open issues from [here](https://github.com/ProjectAdam95/SVG-LOGO-MAKER/issues)and submitting a pull request.

##  :page_facing_up: Resources

Software used
- VS Code -  A powerful code editor for writing and managing code across various programming languages.
- Git Bash - A command-line interface for Git, providing Unix-like shell commands for version control and repository management.
- LICEcap - A screen recording software

##  :camera: Gallery
Below is a preview photo of the website.

- Click here to view preview video/gif!: https://jmp.sh/1Od5dBeG
- Click here if the above link doesn't work !: https://imgur.com/a/KyHSxwC

You may also download the image for your own reference :D


## :star2: Credit/Acknowledgment
Adam Todorovic

##  :lock: License
This project is licensed under the MIT License.
