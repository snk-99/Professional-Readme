// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case 'GNU General Public License v3.0':
      return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'MIT License':
      return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'None':
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'Apache License 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    case 'None':
    return '';

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Project licensed under the [${licence}]`
  }else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  # Title:
  ${data.title}
  

  ## Table of Contents: 
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Test
  ${data.test}
  ## License:
  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}
  
  ## Questions
  Contact me for any questions!!
  * Contact Email: ${data.email}
  * GitHub Profile: [${data.github}](https://github.com/snk-99${data.github})

  
`;
}
// export the generateMarkdown function to index.js
module.exports = generateMarkdown;
