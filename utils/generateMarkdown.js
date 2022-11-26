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
  
  # README
  
  # Table of Contents
  * [ProjectName](#projectname)
  * [UserName](#username)
  * [Email](#email)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test](#test)
  * [License](#license)

  # ProjectName
  ${data.projectName}
  
  # UserName
  ${data.username}

  # Email
  ${data.email}

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
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  
  `;
  return readmeTxt;

  // ` # ${data.username}
  //   `
}

module.exports = generateMarkdown;
