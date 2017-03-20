// Define prompts for use with npm 'prompt' module in setup script
module.exports = [
  {
    name: 'projectName',
    description: 'Project name (default: new-project)',
    pattern: /^[^._][a-z0-9\.\-_~]+$/,
    message: 'Limited to: lowercase letters, numbers, period, hyphen, ' +
    'underscore, and tilde; cannot begin with period or underscore.'
  },
  {
    name: 'author',
    description: 'Author'
  },
  {
    name: 'description',
    description: 'Project description'
  }
];
