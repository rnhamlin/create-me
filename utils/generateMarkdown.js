// Helper functions to help me build out what happens if user does X, Y, or Z...
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Try using switchcase, but if that's too much, try if statements.
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "Unlicensed":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Unlicensed") {
    return "";
  } else return "- [License](#license)";
  // need code to return a link to the license section in the table of contents.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "Unlicensed") {
    return "";
  }
  return `# License
  This project is protected under the ${license} license.
 `;
}

// TODO: Create a function to generate markdown for README
// $(variable) passes responses that the user inputs into these sections.
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
