const PM_YARN = 'yarn'
const PM_NPM = 'npm'

module.exports = {
  prompts: {
    packageManager: {
      type: 'list',
      message: 'Which package manager do you want to choose?',
      choices: [
        PM_YARN,
        PM_NPM
      ]
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  post(context) {
    context.gitInit()

    if (context.answers.packageManager === PM_YARN) {
      context.yarnInstall()
    } else {
      context.npmInstall()
    }
  }
}
