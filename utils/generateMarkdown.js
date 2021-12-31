// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  return `![${license}](https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## License




## Table of Contents
  [Description](##Description)
  [Installation](##Installation)

## Description

## Installation

## Usage

## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
