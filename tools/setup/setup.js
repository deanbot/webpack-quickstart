/* eslint-disable no-var */
var rimraf = require('rimraf');
var chalk = require('chalk');
var replace = require("replace");
var prompt = require("prompt");
var prompts = require('./setupPrompts');
var fs = require("fs");

var chalkSuccess = chalk.green;
var chalkProcessing = chalk.blue;
var chalkWarn = chalk.red;

/* eslint-disable no-console */

console.log(chalkSuccess('Dependencies installed.'));

prompt.start();

console.log(chalkWarn("WARNING:  Preparing to delete local git repository..."));
prompt.get([{ name: 'deleteGit', description: "Delete the git repository?  YES to continue or NO to skip." }], function (err, result) {
  var deleteGit;

  if (err) {
    process.exit(1);
  }

  deleteGit = result.deleteGit.toUpperCase();
  if (deleteGit === 'Y' || deleteGit === "YES") {
    // remove the original git repository
    rimraf('.git', error => {
      if (error) throw new Error(error);
      console.log(chalkSuccess('Original Git repository removed.\n'));

      console.log(chalkProcessing('Updating package.json settings:'));

      prompt.get(prompts, function (err, result) {
        // parse user responses
        // default values provided for fields that will cause npm to complain if left empty
        const responses = [
          {
            key: 'name',
            value: result.projectName || 'new-project'
          },
          {
            key: 'author',
            value: result.author
          },
          {
            key: 'description',
            value: result.description
          },
          // simply use an empty URL here to clear the existing repo URL
          {
            key: 'url',
            value: ''
          }
        ];

        // update package.json with the user's values
        responses.forEach(res => {
          replace({
            regex: `("${res.key}"): "(.*?)"`,
            replacement: `$1: "${res.value}"`,
            paths: ['package.json'],
            recursive: false,
            silent: true
          });
        });

        // remove Overview section of readme
        var overviewReplacement = result.description ? `# Overview\n\n${result.description}\n\n` : '';
        replace({
          regex: `(# Overview)+[^#]*`,
          replacement: overviewReplacement,
          paths: ['readme.md'],
          recursive: false,
          silent: true
        });

        // remove Quickstart Development section of readme
        replace({
          regex: `(## Setup for Quickstart Development)+[^#]*`,
          replacement: '',
          paths: ['readme.md'],
          recursive: false,
          silent: true
        });

        // remove all setup scripts from the 'tools' folder
        console.log(chalkSuccess('\nSetup complete! Cleaning up...\n'));
        removePackageJsonScriptEntry('setup');
        rimraf('./tools/setup', error => {
          if (error) throw new Error(error);
        });
      });
    });
  }
});

function removePackageJsonScriptEntry(scriptName) {
  const packageJsonPath = './package.json';
  let fileData = fs.readFileSync(packageJsonPath);
  let content = JSON.parse(fileData);
  delete content.scripts[scriptName];
  fs.writeFileSync(packageJsonPath,
    JSON.stringify(content, null, 2) + '\n');
}