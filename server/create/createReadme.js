const questions = require('../content/prompts');
const badges = require('../content/badges');

const createReadme = async(data) => {
    await questions(data);
    return `
    # ${data.title}

    ## Table of contents
    1. [License](#license)
    2. [Description](#description)
    3. [Installation](#installation)
    4. [Usage](#usage)
    5. [Features](#features)
    6. [Required Packages](#required-packages)
    7. [Resources](#resources)
    8. [Tests](#tests)
    9. [Questions](#questions)
    10. [Contributions](#contributions)

    ## License
    Refer to <https://choosealicense.com/> for more information on license types.
    ${badges(data.license)}

    ## Description
    1. Application Description: ${data.title}
    2. Motivation: ${data.motivation}
    3. Problems Solved: ${data.problems}

    ## Installation
    ${data.installation}
    Refer to https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for information on cloning a repository
    && https://npmjs.com for information on installing packages

    ## Usage
    ${data.usage}

    ## Features
    ${data.features}

    ## Required Packages
    ${data.requiredPackages}

    ## Resources
    ${data.resources}

    ## Tests
    ${data.tests}

    ## Questions
    For any questions, please contact me at ${data.email} or one of the following links:
    1. Github Username: ${data.githubUsername}
    2. Github Profile: ${data.githubProfile}
    `;
};

const init = async() => {
    const userData = await questions();
    const readmeContent = createReadme(userData);
    fs.writeFileSync('README.md', readmeContent);
}

module.exports = { createReadme };