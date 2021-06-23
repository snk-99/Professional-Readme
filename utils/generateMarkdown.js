

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  
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
  This project is protected under the terms of the ${data.license}
  
  ## Questions
  Contact me for any questions!!
  * Contact Email: ${data.email}
  * GitHub Profile: [${data.github}](https://github.com/snk-99${data.github})

  
`;
}
// export the generateMarkdown function to index.js
module.exports = generateMarkdown;
