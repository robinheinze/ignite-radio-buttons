// Ignite plugin for RadioButtons
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-radio-buttons'
// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'RadioButtonsExample.js'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install a npm module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'RadioButtons Example' })

  // Example of copying templates/RadioButtons to App/RadioButtons
  // if (!filesystem.exists(`${APP_PATH}/App/RadioButtons`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/RadioButtons`, `${APP_PATH}/App/RadioButtons`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../RadioButtons/RadioButtons'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/RadioButtons folder
  // const removeRadioButtons = await context.prompt.confirm(
  //   'Do you want to remove App/RadioButtons?'
  // )
  // if (removeRadioButtons) { filesystem.remove(`${APP_PATH}/App/RadioButtons`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../RadioButtons/RadioButtons'\n`
  // )
}

// Required in all Ignite plugins
module.exports = { add, remove }

