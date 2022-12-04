// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var readmeTxt = `
  
  # ${data.projectName}
  
  
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions) 
    
  

  # Description
  ${data.description}
  
  
  # Installation
  ${data.installation}
  
  
  # Usage
  ${data.usage}
  
  
  # Contributions
  ${data.contributions}


  # Test
  ${data.test}

  # License 
  This application is licensed under the ${data.license} license
  
  
  # Questions 
  Any questions, comments or concerns please contact me through my email or GitHub
  
  [Email](mailto:${data.email})

  [GitHub](https://www.github.com/${data.username})
  `;
  return readmeTxt;

  // ` # ${data.username}
  //   `
}

module.exports = generateMarkdown;
