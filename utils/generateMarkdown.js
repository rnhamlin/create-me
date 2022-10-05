// Helper functions to help me build out what happens if user does X, Y, or Z...
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Try using switchcase, but if that's too much, try if statements.
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Unlicensed") {
    return "";
  }
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
